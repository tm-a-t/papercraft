import {DefaultTheme} from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
    '/ru/book/': [
        {text: 'Начало', link: '/ru/book/'},
        {
            text: 'Разработка',
            items:
                [
                    {text: 'О ботах', link: '/ru/book/dev/basics'},
                    {text: 'API', link: '/ru/book/dev/api'},
                    {text: 'Библиотеки', link: '/ru/book/dev/libraries'},
                    {text: 'Юзернеймы', link: '/ru/book/dev/usernames'},
                    {text: 'BotFather', link: '/ru/book/dev/botfather'},
                    {text: 'Апдейты', link: '/ru/book/dev/updates'},
                    {text: 'Хостинг', link: '/ru/book/dev/host'},
                ],
        },
        {
            text: 'Сообщения', items:
                [
                    {text: 'FAQ по сообщениям', link: '/ru/book/messages/sending'},
                    {text: 'Разметка', link: '/ru/book/messages/markup'},
                    {text: 'Команды', link: '/ru/book/messages/commands'},
                    {text: 'Кнопки', link: '/ru/book/messages/buttons'},
                    {text: 'ID сообщений', link: '/ru/book/messages/id'},
                ],
        },
        {
            text: 'Чаты', items:
                [
                    {text: 'Пользователи', link: '/ru/book/chats/users'},
                    {text: 'Личные сообщения', link: '/ru/book/chats/pm'},
                    {text: 'Группы', link: '/ru/book/chats/groups'},
                    {text: 'Каналы', link: '/ru/book/chats/channels'},
                    {text: 'Форумы', link: '/ru/book/chats/forums'},
                    {text: 'О супергруппах', link: '/ru/book/chats/supergroups'},
                    {text: 'ID чатов', link: '/ru/book/chats/id'},
                ],
        },
        {
            text: 'Интерактивность', items:
                [
                    {text: 'Заявки', link: '/ru/book/interaction/join-requests'},
                    {text: 'Ссылки на бота', link: '/ru/book/interaction/links'},
                    {text: 'Инлайн-режим', link: '/ru/book/interaction/inline'},
                    {text: 'Стикеры', link: '/ru/book/interaction/stickers'},
                    {text: 'Платежи', link: '/ru/book/interaction/payments'},
                    {text: 'Авторизация на сайте', link: '/ru/book/interaction/login-widget'},
                    {text: 'HTML-игры', link: '/ru/book/interaction/html-games'},
                    {text: 'Мини-приложения', link: '/ru/book/interaction/mini-apps'},
                ],
        },
        {
            text: 'Дополнение',
            collapsed: true,
            items: [
                {text: 'Сравнение API', link: '/ru/book/appendix/api-comparison'},
                {text: 'Официальные боты', link: '/ru/book/appendix/official-bots'},
            ],
        },
    ],
}
export default sidebar
