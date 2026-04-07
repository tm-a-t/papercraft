# How IDs of Users and Chats Work

Each user, bot, group, or channel has an invariable ID. 
You can enable showing chat IDs in Telegram macOS settings or Telegram Desktop experimental settings.

::: warning
Don't store user and chat IDs in 32-bit integers: they may be too large. 
Double-precision floats (such as `number` in JS) or 64-bit integers are OK.
:::

## In Bot API { #bot-api }

In Bot API, regular group IDs start with `-` and channel/supergroup IDs start with `-100`.
Thus, a channel with an actual ID `1356415630` has ID `-1001356415630` in Bot API.

::: tabs key:libraries
== Telethon & Folds
Although Telethon and Folds libraries don't use Bot API, sometimes they utilize the ID format from Bot API.
Thus, `message.chat_id` starts with `-100` in case of channels or supergroups.

You can convert between ID formats using `telethon.utils.get_peer_id` and `telethon.utils.resolve_id`.
:::

## Bot ID in its token

The first part of a bot token is the bot ID. For example, the token `110201874:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`
belongs to the bot with ID `110201874`.
