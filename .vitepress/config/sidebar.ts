import {DefaultTheme} from 'vitepress'

async function importSidebar(resolve: () => Promise<{
    readonly default: DefaultTheme.SidebarItem[]
}>): Promise<DefaultTheme.SidebarItem[]> {
    try {
        return (await resolve()).default
    } catch (error) {
        if (!(error instanceof Error) || !error.message.includes('Cannot find module')) {
            throw error
        }
        return []
    }
}

const sidebar: DefaultTheme.Sidebar = {
    '/book/': [
        {text: 'Introduction', link: '/book/'},
        {
            text: 'Development',
            items: [
                {text: 'Bots 101', link: '/book/dev/basics'},
                {text: 'APIs', link: '/book/dev/api'},
                {text: 'Libraries', link: '/book/dev/libraries'},
                {text: 'Bot Usernames', link: '/book/dev/usernames'},
                {text: 'BotFather', link: '/book/dev/botfather'},
                {text: 'Updates', link: '/book/dev/updates'},
                {text: 'Host', link: '/book/dev/host'},
            ],
        },
        {
            text: 'Messages',
            items: [
                {text: 'Messages FAQ', link: '/book/messages/sending'},
                {text: 'Markup', link: '/book/messages/markup'},
                {text: 'Commands', link: '/book/messages/commands'},
                {text: 'Buttons', link: '/book/messages/buttons'},
                {text: 'Message IDs', link: '/book/messages/id'},
            ],
        },
        {
            text: 'Chats',
            items: [
                {text: 'Users', link: '/book/chats/users'},
                {text: 'PM', link: '/book/chats/pm'},
                {text: 'Groups', link: '/book/chats/groups'},
                {text: 'Channels', link: '/book/chats/channels'},
                {text: 'Forums', link: '/book/chats/forums'},
                {text: 'Supergroups', link: '/book/chats/supergroups'},
                {text: 'Chat IDs', link: '/book/chats/id'},
            ],
        },
        {
            text: 'Interaction',
            items: [
                {text: 'Join Requests', link: '/book/interaction/join-requests'},
                {text: 'Bot Links', link: '/book/interaction/links'},
                {text: 'Inline Mode', link: '/book/interaction/inline'},
                {text: 'Stickers', link: '/book/interaction/stickers'},
                {text: 'Payments', link: '/book/interaction/payments'},
                {text: 'Web Login', link: '/book/interaction/login-widget'},
                {text: 'HTML Games', link: '/book/interaction/html-games'},
                {text: 'Mini Apps', link: '/book/interaction/mini-apps'},
            ],
        },
        {
            text: 'Appendix',
            collapsed: true,
            items: [
                {text: 'API Comparison', link: '/book/appendix/api-comparison'},
                {text: 'Official Bots', link: '/book/appendix/official-bots'},
            ],
        },
    ],

    '/folds/': await importSidebar(() => import('../../pages/folds/.site/sidebar')),

    '/tgpy/': await importSidebar(() => import('../../pages/tgpy/.site/sidebar')),
}


export default sidebar
