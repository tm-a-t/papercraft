# Bots in Channels

Bots can participate in channels only as admins.
Admin rights allow bots to send and edit posts, rename channels, and perform other administrative actions—making them particularly helpful for channel authors.
The most common uses are scheduled publishing, adding buttons to posts, moderation helpers, and connecting a channel to another system.

## Request channel admin rights

Just like in groups, channel admins can select specific admin rights for bots. The default options can be configured [in BotFather](../dev/botfather). 

## Add buttons by editing posts

One common use case is adding buttons to channel posts: likes, links, and other interactive elements.
This was especially popular before message reactions were introduced.

This works by using the “Edit messages of others” admin right, which allows bots to add buttons when editing messages.
Here's an example:

![Post with buttons](/pictures/ru/channel-buttons.png)

::: tabs key:libraries
== aiogram
```python
@dp.message(F.chat.type == ChatType.CHANNEL)
async def on_new_message(message: Message):
    reply_markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="Visit Site", url="https://example.com")]
        ]
    )
    try:
        await bot.edit_message_reply_markup(
            chat_id=message.chat.id,
            message_id=message.message_id,
            reply_markup=reply_markup
        )
    except Exception:
        # Bot is not an admin, or the message can't be edited (e.g., a sticker)
        pass
```
== Folds
```python
@bot.channel_message()
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Visit Site", "https://example.com")]
            ]
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Bot is not an admin, or the message can't be edited (e.g., a sticker)
        pass
```
== Telethon
```python
@client.on(events.NewMessage(func=lambda e: e.is_channel))
async def on_new_message(message: Message):
    try:
        await message.edit(
            buttons=[
                [Button.url("Visit Site", "https://example.com")]
            ]    
        )
    except (ChatAdminRequiredError, MessageIdInvalidError, InlineBotRequiredError):
        # Bot is not an admin, or the message can't be edited (e.g., a sticker)
        pass
```
== Other libraries
<HelpNeeded/>
:::

[//]: # (todo: check for the in the example)

## Store direct-message topic IDs { #direct-messages-for-channels }

Channels can enable direct messages, letting subscribers privately contact channel owners and admins without exposing
the owner's personal account.

In Bot API, these conversations are represented as a special direct messages chat with topics.
When sending into such a chat, the bot may need to specify the direct messages topic ID so the answer goes to the right
subscriber thread.

Bots that help manage a channel inbox should store the channel, direct messages chat, and topic identifiers they receive
in updates.

## Review suggested and paid posts carefully

Subscribers can suggest posts to a channel through channel direct messages.
Suggested posts can include a proposed publishing time and may include payment in Stars or Toncoin.

Bots with the right admin permissions can approve or decline suggested posts.
If a post is paid, Telegram marks it in Bot API.
Do not delete paid posts during the required 24-hour period if the channel owner expects to receive the payment.
