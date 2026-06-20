# How to Edit Telegram Bot Messages

Use this page when your bot needs to update a message after sending it:
progress updates, corrections, and small changes that should stay in the same place in the chat.

Some code examples:

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

## Replace media when Telegram allows it { #edit-media }

Replace media when the message should stay in the same place in the chat.
While editing a message, you can edit its media as well as the text.
A picture, video, or file can be replaced with another picture, video, or file (music counts as files too.)

You can add a media document to a text message that was originally sent without media (but only one, so no albums).
You cannot remove media from a message though.
