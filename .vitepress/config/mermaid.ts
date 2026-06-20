import type { MarkdownRenderer } from 'vitepress'

export function mermaidMarkdownPlugin(md: MarkdownRenderer) {
    const defaultFenceRenderer = md.renderer.rules.fence

    if (!defaultFenceRenderer) {
        throw new Error('default fence renderer is not available')
    }

    md.renderer.rules.fence = (tokens, index, options, env, self) => {
        const token = tokens[index]
        const language = token.info.trim()

        if (language !== 'mermaid') {
            return defaultFenceRenderer(tokens, index, options, env, self)
        }

        const graph = encodeURIComponent(token.content)
        const id = `mermaid-${index}`

        return `<ClientOnly><MermaidDiagram id="${id}" graph="${graph}" /></ClientOnly>`
    }
}
