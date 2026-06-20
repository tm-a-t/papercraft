import {DefaultTheme} from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
    '/ru/book/': [
        {text: 'Начало', link: '/ru/book/'},
        {
            text: 'Разработка',
            items:
                [
                    {text: 'О ботах', link: '/ru/book/basics'},
                    {text: 'API', link: '/ru/book/api'},
                    {text: 'Библиотеки', link: '/ru/book/libraries'},
                    {text: 'Юзернеймы', link: '/ru/book/usernames'},
                    {text: 'BotFather', link: '/ru/book/botfather'},
                    {text: 'Апдейты', link: '/ru/book/updates'},
                    {text: 'Хостинг', link: '/ru/book/host'},
                ],
        },
        {
            text: 'Сообщения', items:
                [
                    {text: 'FAQ по сообщениям', link: '/ru/book/sending'},
                    {text: 'Разметка', link: '/ru/book/markup'},
                    {text: 'Команды', link: '/ru/book/commands'},
                    {text: 'Кнопки', link: '/ru/book/buttons'},
                    {text: 'ID сообщений', link: '/ru/book/message-ids'},
                ],
        },
        {
            text: 'Чаты', items:
                [
                    {text: 'Пользователи', link: '/ru/book/users'},
                    {text: 'Личные сообщения', link: '/ru/book/pm'},
                    {text: 'Группы', link: '/ru/book/groups'},
                    {text: 'Каналы', link: '/ru/book/channels'},
                    {text: 'Форумы', link: '/ru/book/forums'},
                    {text: 'О супергруппах', link: '/ru/book/supergroups'},
                    {text: 'ID чатов', link: '/ru/book/chat-ids'},
                ],
        },
        {
            text: 'Интерактивность', items:
                [
                    {text: 'Заявки', link: '/ru/book/join-requests'},
                    {text: 'Ссылки на бота', link: '/ru/book/links'},
                    {text: 'Инлайн-режим', link: '/ru/book/inline'},
                    {text: 'Стикеры', link: '/ru/book/stickers'},
                    {text: 'Платежи', link: '/ru/book/payments'},
                    {text: 'Авторизация на сайте', link: '/ru/book/login-widget'},
                    {text: 'HTML-игры', link: '/ru/book/html-games'},
                    {text: 'Мини-приложения', link: '/ru/book/mini-apps'},
                ],
        },
        {
            text: 'Дополнение',
            collapsed: true,
            items: [
                {text: 'Сравнение API', link: '/ru/book/api-comparison'},
                {text: 'Официальные боты', link: '/ru/book/official-bots'},
            ],
        },
    ],
}
export default sidebar
