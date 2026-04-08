import {spawnSync} from 'node:child_process'
import {cpSync, existsSync, mkdirSync, mkdtempSync, rmSync} from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url))
const DEFAULT_PROJECT_ROOT = path.resolve(SCRIPT_DIR, '..')
const DEFAULT_REPO_URL = 'https://github.com/tm-a-t/TGPy.git'
const DEFAULT_BRANCH = 'master'
const TGPY_SOURCE_DIR = path.join('docs', 'tgpy')
const TGPY_TARGET_DIR = path.join('pages', 'tgpy')
const PUBLIC_SOURCE_DIR = path.join('docs', 'public', 'assets', 'tgpy')
const PUBLIC_TARGET_DIR = path.join('pages', 'public', 'assets', 'tgpy')

export function syncTgpyDocs({
    repoUrl = process.env.TGPY_DOCS_REPO_URL || DEFAULT_REPO_URL,
    branch = process.env.TGPY_DOCS_BRANCH || DEFAULT_BRANCH,
    projectRoot = DEFAULT_PROJECT_ROOT,
    log = console,
} = {}) {
    const checkoutDir = mkdtempSync(path.join(os.tmpdir(), 'tgpy-docs-'))

    try {
        try {
            runGit(['ls-remote', '--exit-code', repoUrl, `refs/heads/${branch}`], {
                timeoutMs: 15_000,
            })
        } catch (error) {
            if (isConnectivityError(error)) {
                log.warn(`[tgpy-sync] Skipping upstream sync because ${repoUrl} is unreachable.`)
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
        runGit(['sparse-checkout', 'set', 'docs/tgpy', 'docs/public'], {
            cwd: checkoutDir,
            timeoutMs: 15_000,
        })

        let syncedSomething = false

        const tgpySource = path.join(checkoutDir, TGPY_SOURCE_DIR)
        if (existsSync(tgpySource)) {
            replaceDirectory(tgpySource, path.join(projectRoot, TGPY_TARGET_DIR))
            syncedSomething = true
            log.info('[tgpy-sync] Synced docs/tgpy -> pages/tgpy.')
        } else {
            log.warn('[tgpy-sync] Upstream docs/tgpy is missing; leaving pages/tgpy untouched.')
        }

        const publicSource = path.join(checkoutDir, PUBLIC_SOURCE_DIR)
        if (existsSync(publicSource)) {
            replaceDirectory(publicSource, path.join(projectRoot, PUBLIC_TARGET_DIR))
            syncedSomething = true
            log.info('[tgpy-sync] Synced docs/public/assets/tgpy -> pages/public/assets/tgpy.')
        } else {
            log.warn('[tgpy-sync] Upstream docs/public/assets/tgpy is missing; leaving pages/public/assets/tgpy untouched.')
        }

        if (!syncedSomething) {
            log.warn('[tgpy-sync] No upstream TGPy docs were found. Skipping without failing the build.')
            return {ok: true, skipped: true}
        }

        return {ok: true, skipped: false}
    } finally {
        rmSync(checkoutDir, {recursive: true, force: true})
    }
}

function replaceDirectory(sourceDir, targetDir) {
    rmSync(targetDir, {recursive: true, force: true})
    mkdirSync(path.dirname(targetDir), {recursive: true})
    cpSync(sourceDir, targetDir, {
        force: true,
        recursive: true,
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

const isDirectRun = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isDirectRun) {
    try {
        const result = syncTgpyDocs()
        process.exitCode = result.ok ? 0 : 1
    } catch (error) {
        console.error('[tgpy-sync] Failed to sync upstream TGPy docs.')
        console.error(error)
        process.exitCode = 1
    }
}
