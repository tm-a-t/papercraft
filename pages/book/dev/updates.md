# Understanding Updates

## What are updates

Updates are events that your bot program receives from Telegram servers.
There can be an update about an incoming message, an update about a user joining a group, and so on.

We'll use this term throughout the book.

::: tabs key:libraries
== aiogram
Here's an example of handling updates for incoming photos:
```python
@dp.message(F.photo & (F.chat.type == ChatType.PRIVATE))
async def on_private_photo(message: Message):
    photo = message.photo[-1]  # highest resolution
    file_path = f"downloads/photo_{photo.file_id}.jpg"
    await bot.download(photo, file_path)
    await message.answer('Got your photo! Saved to ' + file_path)
```
== Folds
Here's an example of handling updates for incoming photos:
```python
@bot.private_message()
async def handle_photo(message: Message):
    if not message.photo: 
        return
        
    file_path = await message.download_media()
    return 'Got your photo! Saved to ' + file_path
```
== Telethon
Here's an example of handling updates for incoming photos:
```python
@client.on(events.NewMessage(incoming=True, func=lambda e: e.photo and e.is_private))
async def handle_photo(event: Message):
    file_path = await event.download_media()
    await event.respond('Got your photo! Saved to ' + file_path)
```
== Other libraries
<HelpNeeded/>
:::

## You should save everything { #limitations }

<mark>Updates are almost the only way to get any information about chats, messages, and users.</mark>

Your program can't fetch the latest user's message or the list of chats where the bot belongs.
Telegram only provides information about the current user or the current chat in updates—for example, when a user sends a message or the bot is added to a group.

If you need a list of bot users, received messages, or anything similar, you should save this data.
(You'll likely need a database.)

If you lose this info, you won't be able to retrieve it again.

::: info NOTE
You can fetch some information using Telegram API and not Bot API—for example, it's possible to get a message by its ID or the info about a user.
These features are listed [in the table.](../appendix/api-comparison)
:::

## Receiving updates multiple times

Bot API disallows getting updates multiple times. If you received an update in Bot API, you won't be able to receive it again.

There's no such limitation in Telegram API. This is because Telegram API is primarily designed for apps, where a user can have multiple Telegram applications on different devices, each needing to receive new messages.
The same principle applies to bots: when you run multiple bot programs using Telegram API, they all receive the new updates.

::: tip DEV TIP
Moreover, there's a Telegram API technique to fetch old updates.
For instance, it may be useful to get a list of bot users if it wasn't saved or the database was lost.
[Docs.](https://core.telegram.org/api/updates#recovering-gaps)
:::