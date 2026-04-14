import {spawnSync} from 'node:child_process'
import {cpSync, existsSync, mkdirSync, mkdtempSync, rmSync} from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_PROJECT_ROOT = path.resolve(SCRIPT_DIR, '..')

const SOURCE_DIR = 'docs'
const PAGES_DIR = 'pages'
const EXCLUDE = ['.vitepress', 'index.md']

export function syncRemoteDocs({
    repoUrl,
    branch = 'main',
    projectRoot = DEFAULT_PROJECT_ROOT,
    log = console,
} = {}) {
    if (!repoUrl) {
        log.error('[doc-sync] Missing repo URL. Pass --repo-url <url>.')
        return {ok: false, skipped: true}
    }

    const checkoutDir = mkdtempSync(path.join(os.tmpdir(), 'remote-docs-'))

    try {
        try {
            runGit(['ls-remote', '--exit-code', repoUrl, `refs/heads/${branch}`], {
                timeoutMs: 15_000,
            })
        } catch (error) {
            if (isConnectivityError(error)) {
                log.warn(`[doc-sync] Skipping upstream sync because ${repoUrl} is unreachable.`)
                return {ok: true, skipped: true}
            }

            throw error
        }

        runGit([
            'clone',
            '--depth', '1',
            '--filter=blob:none',
            '--sparse',
            '--branch', branch,
            repoUrl,
            checkoutDir,
        ], {
            timeoutMs: 60_000,
        })
        runGit(['sparse-checkout', 'set', 'docs'], {
            cwd: checkoutDir,
            timeoutMs: 15_000,
        })

        const source = path.join(checkoutDir, SOURCE_DIR)
        if (!existsSync(source)) {
            log.warn(`[doc-sync] No upstream docs for ${repoUrl} were found; leaving subsite untouched.`)
            return {ok: true, skipped: true}
        }

        replaceDirectory(
            source,
            path.join(projectRoot, PAGES_DIR),
            {filter: src => !EXCLUDE.includes(path.relative(source, src))}
        )
        log.info(`[doc-sync] Synced docs for ${repoUrl}`)
        return {ok: true, skipped: false}

    } finally {
        rmSync(checkoutDir, {recursive: true, force: true})
    }
}

function replaceDirectory(sourceDir, targetDir, {filter}) {
    mkdirSync(path.dirname(targetDir), {recursive: true})
    cpSync(sourceDir, targetDir, {
        force: true,
        recursive: true,
        filter,
    })
}

function runGit(args, {cwd, timeoutMs} = {}) {
    const result = spawnSync('git', args, {
        cwd,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'pipe'],
        timeout: timeoutMs,
    })

    if (result.error) {
        throw result.error
    }

    if (result.status !== 0) {
        const output = [result.stderr, result.stdout]
            .filter(Boolean)
            .join('\n')
            .trim()
        throw new Error(`git ${args.join(' ')} failed\n${output}`)
    }

    return result
}

function isConnectivityError(error) {
    if (!(error instanceof Error)) {
        return false
    }

    return [
        'Could not resolve host',
        'Could not connect',
        'Connection timed out',
        'Connection refused',
        'Network is unreachable',
        'Operation timed out',
        'Failed to connect',
        'Temporary failure',
        'timed out',
    ].some((fragment) => error.message.includes(fragment))
}

function parseCliArgs(argv) {
    const options = {}

    for (let index = 0; index < argv.length; index += 1) {
        const arg = argv[index]

        if (arg === '--help' || arg === '-h') {
            options.help = true
            continue
        }

        if (arg === '--repo-url') {
            options.repoUrl = readOptionValue(argv, index, arg)
            index += 1
            continue
        }

        if (arg.startsWith('--repo-url=')) {
            options.repoUrl = arg.slice('--repo-url='.length)
            continue
        }

        if (arg === '--branch') {
            options.branch = readOptionValue(argv, index, arg)
            index += 1
            continue
        }

        if (arg.startsWith('--branch=')) {
            options.branch = arg.slice('--branch='.length)
            continue
        }

        if (arg === '--project-root') {
            options.projectRoot = readOptionValue(argv, index, arg)
            index += 1
            continue
        }

        if (arg.startsWith('--project-root=')) {
            options.projectRoot = arg.slice('--project-root='.length)
            continue
        }

        throw new Error(`[doc-sync] Unknown argument: ${arg}`)
    }

    return options
}

function readOptionValue(argv, index, optionName) {
    const value = argv[index + 1]

    if (!value || value.startsWith('--')) {
        throw new Error(`[doc-sync] Missing value for ${optionName}`)
    }

    return value
}

function printUsage(log = console) {
    log.info('Usage: node scripts/sync-remote-docs.mjs --repo-url <url> [--branch <branch>] [--project-root <path>]')
}

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isDirectRun) {
    try {
        const options = parseCliArgs(process.argv.slice(2))
        if (options.help) {
            printUsage()
            process.exitCode = 0
        } else {
            const result = syncRemoteDocs(options)
            process.exitCode = result.ok ? 0 : 1
        }
    } catch (error) {
        console.error('[doc-sync] Failed to sync upstream docs.')
        console.error(error)
        process.exitCode = 1
    }
}
