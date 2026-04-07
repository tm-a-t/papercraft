# Developing Telegram Bots for Forums

Forums are a special kind of group that is split into multiple topics.
If your bot works in groups, you should verify that it handles forums correctly.

<br>

<figure>

![Forum](/pictures/ru/forum.png)

<figcaption>Forum topics are listed, while other chats shrink into a small column.</figcaption>
</figure>

## Technical perspective

A forum is a group with a special UI.
You can even open a forum in regular chat view using the forum menu in official apps.

How topics work technically:
- When a topic is created, a system message "Topic created" appears
- All replies to this message fall into the topic
- The topic ID equals the system message ID
- The General topic is where all other messages go, and its ID equals 1

## Usage

If your bot works in groups, consider how it'll behave when the group is a forum.
For example, when a user sends a command, the bot should answer in the same topic—otherwise the response will appear in the General topic.

[//]: # (todo: code for answering in the same topic)

::: tabs key:libraries
== aiogram
```python
@dp.message()
async def handle_message(message: types.Message):
    if message.chat.type == ChatType.SUPERGROUP and message.message_thread_id:
        await message.answer('This is a forum!')
    else:
        await message.answer('This is not a forum')
```
== Folds
```python
@bot.group_message()
async def handle_group_message(message: Message, chat: ThisChat):
    if chat.forum:
        await message.reply('This is a forum, so I am replying to your message')
    else:
        await message.respond('This is not a forum, I am just texting')
```
== Telethon
```python
@client.on(events.NewMessage())
async def handle_message(message: Message):
    chat = await message.get_chat()
    if chat.forum:
        await message.reply('This is a forum, so I am replying to your message')
    else:
        await message.respond('This is not a forum, I am just texting')
```
== Other libraries
<HelpNeeded/>
:::

## Managing topics

Bots can open, edit, and close topics just like users.
Depending on the forum settings, this may require special admin rights.

[//]: # (todo: https://core.telegram.org/api/threads)