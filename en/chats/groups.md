# Developing Telegram Bots for Groups

Users can add bots to groups, but bots cannot join groups by their own. Bot developer can forbid adding to groups 
[in BotFather settings](../dev/botfather).

In public groups, which means groups with usernames, bots can only be added by admins. 
Group admins can grant the bot admin rights to allow deleting group members and doing other admin actions.

A group may contain up to 20 bots.

![Bot highlight example](/pictures/ru/highlighter.png)

## Privacy mode: message visibility { #privacy }

Many bots should react only [to commands](../messages/commands.md).
This is why by default Telegram doesn't notify bots about non-command messages (protecting the group's privacy).

However, you can make your bot see all chat messages by turning off privacy mode.

Privacy mode is a BotFather setting which is activated by default. In this mode, the bot only sees group messages that
address the bot:
- [Commands](../messages/commands)
- Replies on bot messages, replies to replies and so on
- Messages [mentioning](../messages/markup#упоминание-пользователя) the bot
- System messages

When the privacy mode is off, the bot can see all messages in groups except for ones from other bots.

If a bot is a group admin, it sees all messages as well regardless of the privacy mode setting.

![A bot that doesn't see some messages](/pictures/ru/friedrich.png)

::: tip Troubles turning off privacy mode?
When you turned off the privacy mode, you should delete the bot from the group and add it back 
in order to apply changes.
:::

Mobile and desktop Telegram apps indicate whether the privacy mode is on in group member lists:

![Пример бота](/pictures/ru/privacy.png){ style="margin: 0 auto" }

::: info Force reply {#force-reply}
If a bot has the privacy mode enabled and asks a group member a question, the user's answer clearly
should be a message reply so that the bot can see it.

Rather than ask the user to choose to "reply", a bot can send a "force reply" message which automatically makes
the user start replying.

However, I don't recommend using force reply because automatic replies confuse users.
:::

## Admin rights

When a user makes a bot a chat admin, they can select admin rights. There is a BotFather setting for specifying 
the admin rights suggested by default.

The right to remain anonymous, which allows users to send messages on behalf of the group, has no effect on bots.

![Choosing rights](/pictures/ru/admin-rights.png)

## Sending messages to group members

Group messages are visible to all members. There is no way for a bot to show a message to one person only.
For example, if a bot greets new members, all members will receive the message.

To keep the chat clean, the bot can delete auxiliary messages in some time. If your bot is to write personal messages 
to users, [join requests](../interaction/join-requests) may be useful to get PM permission.

## Messages on behalf of groups and channels

Note that your program should handle the cases when the message senders in groups are not users:

- Messages from a linked channel in a discussion group (API treats them as forwarded)
- Messages from a group by anonymous group admins
- Messages from public channels by premium users

## Related links

- [Telegram docs. Privacy mode](https://core.telegram.org/bots/features#privacy-mode)
