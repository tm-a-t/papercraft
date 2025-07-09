import {defineConfig} from 'vitepress'
import head from './head'
import ruConfig from './ru'
import sidebar from './sidebar'
import {tabsMarkdownPlugin} from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Papercraft',
    titleTemplate: ':title • Papercraft',

    appearance: 'dark',
    cleanUrls: true,
    description: 'Tools and resources for Telegram developers. Learn to develop user-friendly, featureful, and stable Telegram bots.',

    head: head,
    lastUpdated: true,
    locales: {
        root: {
            label: 'English',
            lang: 'en',
        },
        ru: {
            label: 'Русский',
            lang: 'ru',
            ...ruConfig,
        },
    },
    sitemap: {
        hostname: 'https://papercraft.tmat.me',
    },
    srcDir: 'pages',
    srcExclude: ['readme.md'],
    markdown: {
        config: (md) => {
            md.disable('emoji')
            md.use(tabsMarkdownPlugin)
        }
    },
    vite: {
        ssr: {
            noExternal: [
                '@nolebase/vitepress-plugin-highlight-targeted-heading',
            ],
        },
    },
    async transformPageData(pageData, { siteConfig }) {
        pageData.params ||= {}
        pageData.params.hasRussianTranslation =
            pageData.relativePath.startsWith('book')
            || pageData.relativePath.startsWith('ru/book')

        if (pageData.params.hasRussianTranslation) {
            pageData.frontmatter.pageClass = 'has-russian-translation'
        }
    },
    themeConfig: {
        logo: '/logo.png',
        externalLinkIcon: true,
        footer: {
            message: 'Art Ivanov'
        },
        editLink: {
            pattern: 'https://github.com/tm-a-t/papercraft/edit/main/pages/:path',
            text: 'Edit this page on GitHub',
        },
        lastUpdated: {
            formatOptions: {
                // @ts-ignore
                dateStyle: 'long',
                forceLocale: true,
            },
        },
        nav: [
            {text: 'Book', link: '/book/', activeMatch: '/book/'},
            {text: 'Folds', link: '/folds/', activeMatch: '/folds/'},
            {
                text: 'TGPy',
                link: '/tgpy/',
                activeMatch: '/tgpy/',
            },
            // {text: 'Share', link: 'https://t.me/share?url=papercraft.tmat.me/'},
        ],
        outline: 'deep',
        search: {
            provider: 'algolia',
            options: {
                appId: '6PO2OC0W1X',
                apiKey: 'ff73f6ce0f89bcef29d1d41e9dc2143e',
                indexName: 'papercraft',
            }
        },
        sidebar: sidebar,
        socialLinks: [
            {icon: 'github', link: 'https://github.com/tm-a-t/papercraft', ariaLabel: 'GitHub'},
        ],
    },
})
