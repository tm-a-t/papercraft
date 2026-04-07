import {DefaultTheme} from 'vitepress'

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

    '/folds/': [
        {text: 'Overview', link: '/folds/'},
        {
            text: 'Tutorial',
            items: [
                {text: 'Quick Start', link: '/folds/tutorial/quick-start'},
                {text: 'Simple Rules', link: '/folds/tutorial/rules'},
                {text: 'Rule Kinds', link: '/folds/tutorial/rule-kinds'},
                {text: 'Arguments', link: '/folds/tutorial/arguments'},
                {text: 'Multiple Files', link: '/folds/tutorial/multiple-files'},
            ]
        },
        {
            text: 'Advanced Features',
            items: [
                {text: 'Admin Rules', link: '/folds/advanced/admin'},
                {text: 'Multiple Bots', link: '/folds/advanced/multiple-bots'},
            ],
        },
        {
            text: 'Learn',
            items: [
                {text: 'Examples', link: '/folds/examples'},
            ],
        },
    ],

    '/tgpy/': [
        {text: 'Overview', link: '/tgpy/'},
        {text: 'Installation', link: '/tgpy/installation'},
        {
            text: 'Beginner’s Guide',
            items: [
                {text: 'Running Code', link: '/tgpy/basics/code'},
                {text: 'Asyncio', link: '/tgpy/basics/asyncio'},
                {text: 'Messages', link: '/tgpy/basics/messages'},
                {text: 'Examples', link: '/tgpy/basics/examples'},
            ],
        },
        {
            text: 'Extensibility Guide',
            items: [
                {text: 'Context Data', link: '/tgpy/extensibility/context'},
                {text: 'Modules', link: '/tgpy/extensibility/modules'},
                {text: 'Module Examples', link: '/tgpy/extensibility/module-examples'},
                {text: 'Transformers & Hooks', link: '/tgpy/extensibility/transformers'},
                {text: 'Other API Features', link: '/tgpy/extensibility/api'},
            ],
        },
        {
            text: 'Reference',
            items: [
                {text: 'Builtins', link: '/tgpy/reference/builtins'},
                {text: 'Module Metadata', link: '/tgpy/reference/module-metadata'},
                {text: 'Code Detection', link: '/tgpy/reference/code-detection'},
            ],
        },
        {
            text: 'TGPy Recipes',
            items: [
                {text: 'About recipes', link: '/tgpy/recipes/about'},
                {text: 'Asking ChatGPT from TGPy', link: '/tgpy/recipes/chatgpt'},
                {text: 'Throwing dice (and faking the result)', link: '/tgpy/recipes/dice'},
                {text: 'Setting up reminders', link: '/tgpy/recipes/reminders'},
                {text: 'Auto-adding group members to contacts to see their stories', link: '/tgpy/recipes/contacts'},
                {text: 'Writing TGPy programs in code editors', link: '/tgpy/recipes/editors'},
            ],
        },
        {text: 'Russian Chat', link: 'tg://resolve?domain=tgpy_flood'},
    ],
}


export default sidebar
