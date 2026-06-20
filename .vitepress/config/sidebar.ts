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
        {text: 'Start Here', link: '/book/'},
        {
            text: 'Build and Ship a Bot',
            items: [
                {text: 'Start Building', link: '/book/dev/basics'},
                {text: 'Create the Bot', link: '/book/dev/botfather'},
                {text: 'Choose a Library', link: '/book/dev/libraries'},
                {text: 'Handle Updates', link: '/book/dev/updates'},
                {text: 'Run on a Server', link: '/book/dev/host'},
            ],
        },
        {
            text: 'Design Conversations',
            items: [
                {text: 'Private Chats and /start', link: '/book/chats/pm'},
                {text: 'Commands', link: '/book/messages/commands'},
                {text: 'Buttons', link: '/book/messages/buttons'},
                {text: 'Bot Links', link: '/book/interaction/links'},
                {text: 'Send and Edit Messages', link: '/book/messages/sending'},
                {text: 'Text Formatting', link: '/book/messages/markup'},
                {text: 'Rich Messages', link: '/book/messages/rich-messages'},
                {text: 'Polls and Checklists', link: '/book/messages/polls-checklists'},
            ],
        },
        {
            text: 'Work with Chats',
            items: [
                {text: 'Users', link: '/book/chats/users'},
                {text: 'Groups', link: '/book/chats/groups'},
                {text: 'Forums', link: '/book/chats/forums'},
                {text: 'Channels', link: '/book/chats/channels'},
                {text: 'Supergroups', link: '/book/chats/supergroups'},
                {text: 'User and Chat IDs', link: '/book/chats/id'},
                {text: 'Message IDs', link: '/book/messages/id'},
            ],
        },
        {
            text: 'Add Telegram Features',
            items: [
                {text: 'Join Requests', link: '/book/interaction/join-requests'},
                {text: 'Inline Mode', link: '/book/interaction/inline'},
                {text: 'Log In with Telegram', link: '/book/interaction/login-widget'},
                {text: 'Mini Apps', link: '/book/interaction/mini-apps'},
                {text: 'Bot Automation', link: '/book/interaction/bot-automation'},
                {text: 'Payments and Stars', link: '/book/interaction/payments'},
                {text: 'Stickers', link: '/book/interaction/stickers'},
                {text: 'HTML Games', link: '/book/interaction/html-games'},
            ],
        },
        {
            text: 'Reference',
            collapsed: true,
            items: [
                {text: 'Bot API vs Telegram API', link: '/book/dev/api'},
                {text: 'API Comparison', link: '/book/appendix/api-comparison'},
                {text: 'Official Bots', link: '/book/appendix/official-bots'},
            ],
        },
    ],

    '/folds/': await importSidebar(() => import('../../pages/folds/.site/sidebar')),

    '/tgpy/': await importSidebar(() => import('../../pages/tgpy/.site/sidebar')),
}


export default sidebar
