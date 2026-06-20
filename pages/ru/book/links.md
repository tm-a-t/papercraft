# Ссылки, открывающие Телеграм-бота

Ссылки — это обычный способ перейти к боту и начать диалог.
Диплинки (deep links) можно использовать, чтобы пользователь начал диалог с ботом с дополнительными параметрами.

## Обычные ссылки

Ссылки на ботов работают так же, как и ссылки на пользователей, группы и каналы:
бота с юзернеймом `@examplebot` можно открыть по ссылке [t.me/examplebot](https://t.me/examplebot).

## Диплинки

Диплинк — это ссылка, по которой пользователь может запустить бота с неким параметром.
Например, для реферальных програм этот параметр может содержать ID поделившегося ссылкой.
Такая ссылка имеет вид [t.me/examplebot?start=ВАШ_ТЕКСТ](https://t.me/examplebot?start=ВАШ_ТЕКСТ)

::: tabs key:libraries
== aiogram
```python
from aiogram.utils.deep_linking import create_start_link

link = await create_start_link(bot, 'from_ad')
```
== Folds
```python
from folds.context import client

link = f'https://t.me/{client.me.username}?start=from_ad'
```
== Telethon
```python
self_user = await client.get_me()
link = f'https://t.me/{self_user.username}?start=from_ad'
```
== Other libraries
<HelpNeeded/>
:::

Когда пользователь переходит по диплинку, у него открывается переписка с ботом и кнопка «Запустить» —
даже если пользователь уже [запускал бота](pm). Кнопка «Запустить» отправляет команду `/start ВАШ_ТЕКСТ`.
При этом пользователь увидит только `/start`, как при обычном запуске бота.

<video controls loop muted preload="auto">
<source src="/pictures/ru/start.webm" type="video/mp4">
</video>

## Диплинки для групп

Диплинки можно использовать не только для личных сообщений, но и для групп.

Ссылка [t.me/examplebot?startgroup=ВАШ_ТЕКСТ](https://t.me/examplebot?startgroup=ВАШ_ТЕКСТ) откроет у пользователя меню
с выбором группы для добавления бота. Когда пользователь добавит бота, сразу отправится команда `/start ВАШ_ТЕКСТ`.

::: tabs key:libraries
== aiogram
```python
from aiogram.utils.deep_linking import create_start_link

link = await create_startgroup_link(bot, 'from_ad')
```
== Folds
```python
from folds.context import client

link = f'https://t.me/{client.me.username}?startgroup=from_ad'
```
== Telethon
```python
self_user = await client.get_me()
link = f'https://t.me/{self_user.username}?startgroup=from_ad'
```
== Other libraries
<HelpNeeded/>
:::

## Использование ссылок `tg://`

Все эти ссылки также имеют эквиваленты с `tg://`. 
Это прямые ссылки, которые можно открыть внутри приложения:

- Обычная ссылка: [tg://resolve?domain=examplebot](tg://resolve?domain=examplebot)
- Диплинк: [tg://resolve?domain=examplebot&start=ВАШ_ТЕКСТ](tg://resolve?domain=examplebot&start=ВАШ_ТЕКСТ)
- Диплинк для групп: [tg://resolve?domain=examplebot&startgroup=true](tg://resolve?domain=examplebot&startgroup=true)

Существуют и другие прямые ссылки, которые могут заменять ссылки `t.me` или выполнять специальные действия.
Например, ссылка [tg://settings](tg://settings) открывает настройки в некоторых приложениях Telegram.
Списки таких ссылок есть [в документации API](https://core.telegram.org/api/links) и
в неофициальном канале [@DeepLink](https://t.me/deeplink).

## Ссылки по теме (но не на ботов)

- [О диплинках в документации к API](https://core.telegram.org/bots/features#deep-linking)
