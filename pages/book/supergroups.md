# How to Handle Telegram Supergroups and Chat Migrations

When you use Telegram, you deal with groups regularly. 
What looks like groups in Telegram UI is actually two kinds of entities: groups and supergroups.
For bot developers, the important part is that migrations can change chat IDs and break stored references if you ignore them.

## Detect supergroups even when the UI says "group"

Detect the API chat type instead of relying on what the Telegram UI calls a group.
A long time ago, Telegram developers introduced two types of groups: regular ones and supergroups.
Supergroups had public links, larger limit for the number of members, and other features designed for big communities.

Apparently, this was later considered rather confusing. Telegram app interface no longer mentions 
“supergroups” and all groups look the same there, although on the technical level two types remain distinct.
In fact, most of the groups you participate in are probably supergroups.

For bot code, the main trait of supergroups is that API considers them a special case of channels.

::: tabs key:libraries variant:code
== aiogram
```python
if chat.type == ChatType.SUPERGROUP:
    print('This is a supergroup')
if chat.type == ChatType.CHANNEL:
    print('This is a real channel')
if chat.type == ChatType.GROUP:
    print('This is an old-type group')
if chat.type == ChatType.PRIVATE:
    print('This is PM')
```
== Telethon & Folds
```python
from telethon.tl.types import Chat, Channel, User

# How to check the type of chat using API types:
if isinstance(chat, Channel) and chat.megagroup:
    print('This is a supergroup')  # 'megagroup' is an API term for the same thing
if isinstance(chat, Channel) and not chat.megagroup:
    print('This is a real channel')
if isinstance(chat, Chat):
    print('This is an old-type group')
if isinstance(chat, User):
    print('This is PM')
    
# How to check the type of chat from an update using Telethon helpers:
if message.is_group:
    print('This is a supergroup or a regular group')
if message.is_channel:
    print('This is a channel or a supergroup')
if message.is_private:
    print('This is PM')
```
== Other libraries
<HelpNeeded/>
:::

I use the term “groups” both for regular groups and supergroups in this book. 
For more info about group bots, see [the page about groups.](groups)




## Update stored chat IDs after migration

A regular group becomes a supergroup when certain settings are changed. 
As technically the group is replaced with a supergroup (which is a new channel), its [chat ID](chat-ids) changes. 
You may want to handle this event if you store the chats in a database:

::: tabs key:libraries variant:code
== aiogram
```python
@dp.message(F.migrate_to_chat_id)
async def migrated(message: Message):
    print(f'{message.chat.title} became a supergroup')
```
== Folds
```python
@bot.group_became_supergroup()
async def handle_supergroup(chat: ThisChat):
    print(f'{chat.title} became a supergroup')
```
== Telethon
```python
def group_became_supergroup(event: events.ChatAction.Event) -> bool:
    return (
            isinstance(event, tl_types.UpdateNewChannelMessage)
            and isinstance(event.message, tl_types.MessageService)
            and isinstance(
                event.message.action, tl_types.MessageActionChannelMigrateFrom
            )
    )

@client.on(events.ChatAction(func=group_became_supergroup))
async def handle_supergroup(event: events.ChatAction.Event):
    chat = await event.get_chat()
    print(f'{chat.title} became a supergroup')
```
== Other libraries
<HelpNeeded/>
:::

A supergroup cannot become a regular group again.

## Store message and group IDs with chat type

Store IDs with enough context to tell regular groups and supergroups apart.
The [chat IDs page](chat-ids#bot-api) explains how group IDs are different for groups and supergroups in Bot API.
In addition, regular groups and supergroups are different in terms of how message IDs work
as discussed in [Message IDs.](message-ids)


## Treat gigagroups as a rare case

Do not design around gigagroups unless your bot actually encounters one.
They are very rare.

A maximal number of supergroup members is 200,000. 
When it's close to the limit, Telegram app suggests admins turn the supergroup into a gigagroup. 
Gigagroups may contain an unlimited number of members, but only admins can send messages there.

I have no idea why they exist.

## Related links

- [Features of different types of groups. Cases when a regular group turns into a supergroup](https://tginfo.me/groups_vs_supergroups-en/)
- [Telegram API. Differences between regular groups, supergroups, and gigagroups](https://core.telegram.org/api/channel)
