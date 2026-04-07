# How to Choose the Right Library for a Telegram Bot

Your choice depends on whether you use Bot API or Telegram API.
I've covered the differences [on the previous page,](./api) so make sure to read it first.

## Bot API libraries

A common choice for developing Telegram bots is a Python library called [aiogram.](https://github.com/aiogram/aiogram)
[Rocketgram](https://github.com/rocketgram/rocketgram) is a popular alternative.

JavaScript is often used as well: check out [Telegraf](https://github.com/telegraf/telegraf)
or [GrammY.](https://github.com/grammyjs/grammY)

Bot API libraries exist for many other languages, too.
The official site has [a list](https://core.telegram.org/bots/samples) and seems to keep it up-to-date.

## Telegram API libraries

For Python, the most popular library built with Telegram API is 
[Telethon.](https://github.com/LonamiWebs/Telethon) _Since Telethon isn't primarily focused on bot development,
I created the [Folds](/folds/) framework, which builds on top of Telethon
and helps you create simple and scalable bots._

For JavaScript, the options include [mtcute](https://github.com/mtcute/mtcute) or [GramJS.](https://github.com/gram-js/gramjs)

[//]: # (todo other langs?)

## Getting started

Here's a simple bot that echoes the user's messages in DM:

::: tabs key:libraries
== aiogram
```python
import asyncio
from aiogram import Bot, Dispatcher, F
from aiogram.types import Message

bot = Bot(token='YOUR_BOT_TOKEN_HERE')
dp = Dispatcher()


@dp.message(F.chat.type == ChatType.PRIVATE)
async def echo(message: Message):
    await message.answer(message.text)


if __name__ == '__main__':
    asyncio.run(dp.start_polling(bot))
```
== Folds
```python
from folds import Bot, Message

bot = Bot(bot_token='YOUR_BOT_TOKEN_HERE', api_id=123456, api_hash='YOUR_API_HASH')


@bot.private_message()
async def echo(text: str):
    return text


if __name__ == '__main__':
    bot.run()
```
== Telethon
```python
from telethon import TelegramClient, events
from telethon.tl.custom import Message

client = TelegramClient('mybot', api_id=123456, api_hash='YOUR_API_HASH')
client.start(bot_token='YOUR_BOT_TOKEN_HERE')


@client.on(events.NewMessage(func=lambda e: e.is_private, incoming=True))
async def echo(event: Message):
    await event.respond(event.raw_text)


if __name__ == '__main__':
    client.run_until_disconnected()
```

== Other libraries
<HelpNeeded/>
:::

But first, you will need to register a bot and obtain the token.
