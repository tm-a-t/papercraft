# How to Send Telegram Bot Messages

Bots can send messages just like users... almost. Mind chat permissions, file limits, rate limits, and a few Telegram-specific corner cases.

Some code examples:

::: tabs key:libraries
== aiogram
```python
# Send a message
await bot.send_message(chat_id=chat_id, text='Hey there')

# Shortcut: send where the message came from
await message.answer('Hey there')

# Send a file
document = FSInputFile('path.txt')
await bot.send_document(
    chat_id=chat_id,
    document=document    
)
```
See [How to upload file?](https://docs.aiogram.dev/en/v3.20.0.post0/api/upload_file.html#sending-files).
== Telethon & Folds
```python
# Send a message
await client.send_message(chat_id, 'Hey there')

# Shortcut: send where the event came from
await event.respond('Hey there')

# Send a file
await client.send_message(
    chat_id,
    file='path.txt'
)
```
== Other libraries
<HelpNeeded/>
:::

## Use any message type

Choose the simplest message type that fits the user task.
Bot messages can be simple text or include media such as
pictures, videos, live photos, files, polls, voice messages, stickers, and more.

Add [buttons](../messages/buttons) when the message should offer a choice or action.
For highly structured output such as tables, formulas, and long AI answers, bots can send
[rich messages](./rich-messages).

## Handle forbidden sends

Expect some sends to fail.
A bot can't send messages to a user who [blocked it.](../chats/pm#block)

In channels and groups, bots can only send messages if they're members and admins haven't restricted message sending.

Premium users can restrict receiving voice messages (including round videos).

::: tabs key:libraries
== aiogram
```python
try:
    await client.send_message(chat_id, 'Hey there')
except TelegramForbiddenError:
    print('User blocked the bot, bot banned from chat, etc.')
```
== Telethon & Folds
```python
try:
    await client.send_message(...)
except UserIsBlockedError:
    print('User blocked the bot :(')
```
== Other libraries
<HelpNeeded/>
:::

## Treat albums as multiple messages

An album is a collection of multiple media messages (such as photos or videos) that are displayed as a single grouped message in Telegram apps.

When your bot receives an album, for example, you should handle it as multiple incoming messages.

## Respect file limits { #file-limits }

Check file sizes before upload or download.
Telegram allows sharing files up to 4 GB; however, Bot API has more strict limits. Through Bot API, a bot can download 
files up to 20 MB and upload files up to 50 MB. If you use [a local Bot API server](../appendix/api-comparison) though, these limits extend up 
to 2 GB.

## Rate-limit broadcasts

Send broadcasts gradually.
Telegram won't let you spam, of course, and the main limits from the official docs are:

- No more than a message per second in a chat.
- No more than 30 messages per second in all chats.
- No more than 20 messages per minute in a group.

Telegram does not provide a built-in “send to all users” feature.
If you need to broadcast information to all bot users, you'll need to implement a queue.

Remember that the limits for less common actions, such as editing or deleting messages, are more restrictive.

Developers of popular bots can contact Telegram support to request increased limits.

## Stream generated answers carefully

Use streaming when a generated answer may take long enough that users need progress feedback.
Bots can now stream text drafts while a response is being generated.
For structured AI output, use [rich-message streaming](./rich-messages#streaming-rich-replies).

::: warning
Streaming is not a replacement for rate limiting.
If your bot streams to many users at once, you still need queues, timeouts, and cancellation logic.
:::

## Related links

- [Bot FAQ. Answer about limits.](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this)
