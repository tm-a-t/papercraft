# Sending and Editing Messages

Use this page when your bot needs to send, edit, forward, copy, or react to messages.
Plan for Telegram-specific constraints from the start:
chat permissions, file limits, rate limits, protected content, and a few Telegram-specific corner cases.

## Send messages users can receive

### Choose the message type

Choose the simplest message type that fits the user task.
Bot messages can be simple text or include media such as
pictures, videos, live photos, files, polls, voice messages, stickers, and more.

Add [buttons](../messages/buttons) when the message should offer a choice or action.
For highly structured output such as tables, formulas, and long AI answers, bots can send
[rich messages](./rich-messages).

### Send with your library

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

### Handle forbidden sends

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

### Treat albums as multiple messages

An album is a collection of multiple media messages (such as photos or videos) that are displayed as a single grouped message in Telegram apps.

When your bot receives an album, for example, you should handle it as multiple incoming messages.

### Respect file limits { #file-limits }

Check file sizes before upload or download.
Telegram allows sharing files up to 4 GB; however, Bot API has more strict limits. Through Bot API, a bot can download 
files up to 20 MB and upload files up to 50 MB. If you use [a local Bot API server](../appendix/api-comparison) though, these limits extend up 
to 2 GB.

### Rate-limit broadcasts

Send broadcasts gradually.
Telegram won't let you spam, of course, and the main limits from the official docs are:

- No more than a message per second in a chat.
- No more than 30 messages per second in all chats.
- No more than 20 messages per minute in a group.

Telegram does not provide a built-in “send to all users” feature.
If you need to broadcast information to all bot users, you'll need to implement a queue.

Remember that the limits for less common actions, such as editing or deleting messages, are more restrictive.

Developers of popular bots can contact Telegram support to request increased limits.

### Stream generated answers carefully

Use streaming when a generated answer may take long enough that users need progress feedback.
Bots can now stream text drafts while a response is being generated.
For structured AI output, use [rich-message streaming](./rich-messages#streaming-rich-replies).

::: warning
Streaming is not a replacement for rate limiting.
If your bot streams to many users at once, you still need queues, timeouts, and cancellation logic.
:::

## Edit messages for progress and corrections

### Edit text

::: tabs key:libraries
== aiogram
```python
from asyncio import sleep

...

my_message = await bot.send_message(chat_id, 'Loading...')
await sleep(10)
await my_message.edit_text('Loaded!')
```
== Telethon & Folds
```python
from asyncio import sleep

...

my_message = await client.send_message(chat_id, 'Loading...')
await sleep(10)
await my_message.edit('Loaded!')
```
== Other libraries
<HelpNeeded/>
:::

Edit messages freely when it helps show progress or fix bot output:
bot edits do not get the “Edited” label that users' edits get.

### Replace media when Telegram allows it { #edit-media }

Replace media when the message should stay in the same place in the chat.
While editing a message, you can edit its media as well as the text.
A picture, video, or file can be replaced with another picture, video, or file (music counts as files too.)

You can add a media document to a text message that was originally sent without media (but only one, so no albums). 
You cannot remove media from a message though.

## Forward or copy intentionally

### Keep or remove the forwarded label

::: tabs key:libraries
== aiogram
```python
# With the 'Forwarded' label
await message.forward(chat_id)

# Without the 'Forwarded' label
await message.copy_to(chat_id)
```
== Telethon & Folds
```python
# With the 'Forwarded' label
await message.forward(chat_id)

# Without the 'Forwarded' label
await client.send_message(chat_id, message)
```
== Other libraries
<HelpNeeded/>
:::

### Expect music forwarding quirks

When a user or a bot forwards a music file, it doesn't receive the “Forwarded” label. Strange Telegram rules ¯\_(ツ)_/¯

### Respect protected content

Do not forward messages from groups and channels with the “protected content” setting turned on.

## Use message interactions where they fit

### Send polls instead of voting

If the bot needs to collect answers, send a poll instead of trying to vote.
Bots can't vote in polls, but they can send many kinds of polls.
Modern polls can include more options, media, links, descriptions, time limits, and other settings.
See [Polls and Checklists](./polls-checklists).

### React when needed

Use reactions only when they add visible feedback to a workflow.

## Related links

- [Bot FAQ. Answer about limits.](https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this)
