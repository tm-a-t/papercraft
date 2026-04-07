# Developing Telegram Bots for Groups

Group bots are powerful.
They provide features in groups — the space where people talk to each other.
There are a lot of details to consider, though.

## Joining groups

Users can add bots to groups, but bots cannot join groups on their own.
The bot's developer can forbid adding to groups [using BotFather settings](../dev/botfather).

In public groups (those with usernames), bots can only be added by administrators. 
Group admins can grant the bot permissions for deleting group members or performing other administrative actions.

A group may contain up to 20 bots.

::: tabs key:libraries
== aiogram
```python
@dp.my_chat_member(ChatMemberUpdatedFilter(IS_NOT_MEMBER >> IS_MEMBER))
async def handle_join(event: ChatMemberUpdated):
    await event.answer('Hello ' + event.chat.title)
```
== Folds
```python
@bot.added_to_group()
async def handle_join(chat: Chat):
    return 'Hello ' + chat.title
```
== Telethon
```python
@client.on(events.NewMessage(func=lambda e: e.is_group and e.user_added and e.user.is_self))
async def handle_join(event):
    chat = await event.get_chat()
    await event.respond('Hello ' + chat.title)
```
== Other libraries
<HelpNeeded/>
:::

## Sending messages to group members

<!-- TODO

Some examples:

::: tabs key:libraries
== Folds
```python
@bot.group_message()
async def _(chat: Chat):
    return 'Hello ' + chat.title
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

-->


Group messages are visible to all members. A bot cannot send a message that only one person in the group will see.
For example, when a bot greets new members, all existing members will also receive this greeting message.

To keep the chat clean, the bot can automatically delete auxiliary messages after a certain period.
Here is an example of deleting greeting messages after 30 seconds (unless the program is interrupted):

::: tabs key:libraries
== aiogram
```python
@dp.chat_member(ChatMemberUpdatedFilter(IS_NOT_MEMBER >> IS_MEMBER))
async def handle_join(event: ChatMemberUpdated):
    user = event.new_chat_member.user
    answer = await event.answer('Welcome to the group, {user.first_name}')
    await asyncio.sleep(30)
    await answer.delete()
```
== Folds & Telethon
```python
@bot.on(events.ChatAction(func=event.group and event.user_added and not event.user.is_self))
async def greet(event: events.ChatAction.Event):
    answer = await event.respond(f'Welcome to the group, {event.user.first_name}')
    await asyncio.sleep(30)
    await answer.delete()
```
== Other libraries
<HelpNeeded/>
:::

Note that if your bot needs to personally contact new group users, join requests may be useful to get PM permission
— we will explore [join requests](../interaction/join-requests) later in the book.

## Privacy mode and visible messages { #privacy }

Many bots are designed to react only [to commands](../messages/commands.md).
For this reason, Telegram protects group privacy by default and doesn't notify bots about non-command messages.

If you want your bot to see all chat messages, you need to disable the privacy mode.

Privacy mode is a BotFather setting that's activated by default.
In this mode, the bot only gets updates about commands and other group messages that may address the bot.
This includes:
- Commands
- Replies on bot messages, replies to replies and so on
- Messages [mentioning](../messages/markup#mention) the bot
- System messages

When privacy mode is off, the bot can see all messages in groups except ones from other bots.

Also, if a bot is a group admin, it sees all messages regardless of the privacy mode setting.

![A bot that doesn't see some messages](/pictures/ru/friedrich.png){ style="" }

::: tip Troubles turning off privacy mode?
After disabling the privacy mode, you need to remove the bot from the group and add it back 
for the changes to take effect.
:::

Mobile and desktop Telegram apps indicate whether the privacy mode is on in group member lists:

![Пример бота](/pictures/ru/privacy.png){ style="margin: 0 auto" }

::: info Force reply {#force-reply}
If a bot with privacy mode enabled asks a question in a group, the user's response must be a reply 
for the bot to see it.

To make replying easier, a bot can send a "force reply" message which automatically initiates 
the reply interface for the user.

However, I don't recommend using force reply. In my opinion, automatic replies only confuse users.
:::

## Admin rights

When a user promotes a bot to a group admin, they can select admin rights. There is a BotFather setting for specifying 
the admin rights suggested by default.

The right to remain anonymous, which allows users to send messages on behalf of the group, has no effect on bots.

![Choosing rights](/pictures/ru/admin-rights.png)

## Messages on behalf of groups and channels

Not only users can send messages in groups.
Your program should correctly handle messages sent by other entities:

- Messages from a linked channel in a discussion group (API treats them as forwarded)
- Messages from a group by anonymous group admins
- Messages from public channels by premium users

### Examples

Determining chat type (e.g., for storing in a database):

::: tabs key:libraries
== aiogram
```python
@dp.message(F.chat.type == ChatType.GROUP | F.chat.type == ChatType.SUPERGROUP])
async def handle_group_message(message: Message):
    if message.sender_chat is None:
        print('Message from user')
    if message.sender_chat is not None and message.sender_chat.type == ChatType.SUPERGROUP:    
        print('Message from supergroup')
    elif message.sender_chat is not None and message.sender_chat.type == ChatType.CHANNEL:
        print('Message from channel')

```
== Folds
```python
from folds import ThisSender
from telethon.tl.types import Chat, Channel, User

...

@bot.group_message()
async def handle_group_message(sender: ThisSender):
    if isinstance(sender, User):
        print('Message from user')
    if isinstance(sender, Channel) and sender.megagroup:
        print('Message from supergroup')
    if isinstance(sender, Channel) and not sender.megagroup:
        print('Message from channel')
```
== Telethon
```python
from telethon.tl.types import Chat, Channel, User

...

@client.on(events.NewMessage(func=lambda e: e.is_group))
async def handle_group_message(event: Message):
    sender = await event.get_sender()
    if isinstance(sender, User):
        print('Message from user')
    if isinstance(sender, Channel) and sender.megagroup:
        print('Message from supergroup')
    if isinstance(sender, Channel) and not sender.megagroup:
        print('Message from channel')
```
== Other libraries
<HelpNeeded/>
:::

Getting the sender's name:

::: tabs key:libraries
== aiogram
```python
name = message.from_user.first_name if message.from_user else message.sender_chat.title 
```
== Folds & Telethon
```python
name = sender.first_name or sender.title  # one of these is not None
```
== Other libraries
<HelpNeeded/>
:::

## Related links

- [Telegram docs. Privacy mode](https://core.telegram.org/bots/features#privacy-mode)
