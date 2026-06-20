# What Telegram Bots Can Do

Use a Telegram bot when a server program should chat with users, respond to commands, send media, or participate in groups and channels.
A bot is a special user account controlled by your program.

Bots have some limitations compared to real users—mostly for privacy protection.
For instance, bots can't join groups on their own and must be invited by users.

<!--
::: info
Although technically bots are a kind of user account, in this book, I use the term 'users' to refer to people's accounts.
:::
-->

## Start with the basic bot model

Most bots receive [updates](./updates), decide what to do, and send requests back to Telegram.
This model covers common bot work: personal dialogs, group moderation, channel posting, buttons, commands, and files.

When a feature needs permission or setup, Telegram usually exposes that through BotFather, admin rights, or a specific user action.

## Add newer platform features when they fit

Modern Telegram bots are not limited to simple chat commands.
Depending on the settings and permissions, bots can also:

- Send [rich messages](../messages/rich-messages) with tables, formulas, collapsible sections, and streamed AI output.
- Work as [guest bots](../interaction/bot-automation#guest-bots) when users mention them in chats where the bot is not a member.
- Help automate user or business accounts with explicit access permissions.
- Help users create and manage other bots.
- Handle newer chat features such as [channel direct messages](../chats/channels#direct-messages-for-channels),
  suggested posts, checklists, and advanced polls.

These features still follow Telegram's privacy model:
the bot only receives the data Telegram sends in updates or through a permissioned connection.
If you need data later, save it when you receive it.

## Build the first working program

At minimum, you need four things:

1. A bot registered in [BotFather](./botfather).
2. A token for controlling the bot.
3. A library for your programming language.
4. A program that receives [updates](./updates) and sends responses.

While you can run the bot program on your computer during development, 
you'll want to deploy it to a hosting service when the code is ready for production.

The following pages cover these steps in order.

## Related links

- [Telegram docs. How bots are different from users](https://core.telegram.org/bots#how-do-bots-work)
