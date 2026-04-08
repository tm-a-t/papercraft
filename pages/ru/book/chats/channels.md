# Разработка Телеграм-ботов для каналов

Боты могут состоять в каналах только как админы.
Права администратора позволяют ботам отправлять и редактировать посты, переименовывать каналы и выполнять другие административные действия, поэтому для авторов каналов они особенно полезны.

## Права администратора

Как и в группах, администраторы каналов могут выбрать для бота конкретные права. Параметры по умолчанию можно настроить [в BotFather](../dev/botfather).

## Добавление кнопок под постами

Один из распространённых сценариев — добавление к постам кнопок: лайков, ссылок и других интерактивных элементов.
Это было особенно популярно до появления реакций.

Это работает благодаря праву администратора на редактирование чужих публикаций, которое позволяет боту добавлять кнопки при редактировании сообщений.
Вот пример:

![Пост с кнопками](/pictures/ru/channel-buttons.png)

::: tabs key:libraries
== aiogram
```python
@dp.message(F.chat.type == ChatType.CHANNEL)
async def on_new_message(message: Message):
    reply_markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Посетить сайт", url="https://example.com")]
        ]
    )
    try:
        await bot.edit_message_reply_markup(
            chat_id=message.chat.id,
            message_id=message.message_id,
            reply_markup=reply_markup
        )
    except Exception:
        # Бот не админ, или сообщение нельзя отредактировать (например, стикер)
        pass
```
== Folds
```python
@bot.channel_message()
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Посетить сайт", "https://example.com")]
            ]
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Бот не админ, или сообщение нельзя отредактировать (например, стикер)
        pass
```
== Telethon
```python
@client.on(events.NewMessage(func=lambda e: e.is_channel))
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Посетить сайт", "https://example.com")]
            ]    
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Бот не админ, или сообщение нельзя отредактировать (например, стикер)
        pass
```
== Other libraries
<HelpNeeded/>
:::

[//]: # (todo: check for the in the example)

[//]: # (todo: Paid posts)
