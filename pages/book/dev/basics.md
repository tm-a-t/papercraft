# What Telegram Bots Can Do

A Telegram bot is a special user account controlled by your server program.
Bots can chat with users, respond to commands, send media, and participate in groups and channels.

Bots have some limitations compared to real users—mostly for privacy protection.
For instance, bots can't join groups on their own and must be invited by users.

<!--
::: info
Although technically bots are a kind of user account, in this book, I use the term 'users' to refer to people's accounts.
:::
-->


## How to program a bot

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
