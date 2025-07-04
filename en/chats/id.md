# How IDs of Users and Chats Work

Each user, bot, group, or channel has an invariable ID. 

Official Telegram apps don't show IDs. Use unofficial apps or bots [like this](https://t.me/getmyid_bot) when you need 
to manually learn specific user or chat IDs.

::: warning
Don't store user and chat IDs in 32-bit integers: they may be too large. 
Double-precision floats (such as `number` in JS) or 64-bit integers are OK.
:::

## In Bot API { #bot-api }

In Bot API, regular group IDs start with `-` and supergroup IDs start with `-100`.
Thus, a channel with an actual ID `1356415630` has ID `-1001356415630` in Bot API.

## Bot ID in its token

The first part of a bot token is the bot ID. For example, the token `110201874:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`
belongs to the bot with ID `110201874`.
