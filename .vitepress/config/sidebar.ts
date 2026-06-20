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
                {text: 'Create the Bot', link: '/book/botfather'},
                {text: 'Choose a Library', link: '/book/libraries'},
                {text: 'Handle Updates', link: '/book/updates'},
                {text: 'Run on a Server', link: '/book/host'},
            ],
        },
        {
            text: 'Design Bot Dialogs',
            items: [
                {text: 'Private Chat Lifecycle', link: '/book/pm'},
                {text: 'Send Messages', link: '/book/sending'},
                {text: 'Edit Messages', link: '/book/editing'},
                {text: 'Forward Messages', link: '/book/forwarding'},
                {text: 'Commands', link: '/book/commands'},
                {text: 'Buttons', link: '/book/buttons'},
                {text: 'Bot Links', link: '/book/links'},
                {text: 'Text Formatting', link: '/book/markup'},
                {text: 'Rich Messages', link: '/book/rich-messages'},
                {text: 'Polls and Checklists', link: '/book/polls-checklists'},
            ],
        },
        {
            text: 'Work with Chats',
            items: [
                {text: 'Users', link: '/book/users'},
                {text: 'Supergroups', link: '/book/supergroups'},
                {text: 'Groups', link: '/book/groups'},
                {text: 'Forums', link: '/book/forums'},
                {text: 'Channels', link: '/book/channels'},
                {text: 'User and Chat IDs', link: '/book/chat-ids'},
                {text: 'Message IDs', link: '/book/message-ids'},
            ],
        },
        {
            text: 'Add Telegram Features',
            items: [
                {text: 'Join Requests', link: '/book/join-requests'},
                {text: 'Inline Mode', link: '/book/inline'},
                {text: 'Log In with Telegram', link: '/book/login-widget'},
                {text: 'Mini Apps', link: '/book/mini-apps'},
                {text: 'Bot Automation', link: '/book/bot-automation'},
                {text: 'Payments and Stars', link: '/book/payments'},
                {text: 'Stickers', link: '/book/stickers'},
                {text: 'HTML Games', link: '/book/html-games'},
            ],
        },
        {
            text: 'Reference',
            collapsed: true,
            items: [
                {text: 'Bot API vs Telegram API', link: '/book/api'},
                {text: 'API Comparison', link: '/book/api-comparison'},
                {text: 'Official Bots', link: '/book/official-bots'},
            ],
        },
    ],

    '/folds/': await importSidebar(() => import('../../pages/folds/.site/sidebar')),

    '/tgpy/': await importSidebar(() => import('../../pages/tgpy/.site/sidebar')),
}


export default sidebar
