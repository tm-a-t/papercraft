# How to Choose the Right Library for a Telegram Bot

Your choice will depend on whether you decide to use Bot API or Telegram API. 
I've covered the differences [on the previous page;](./api) make sure to read it first.

## Bot API libraries

A common choice for developing Telegram bots is a Python library called [aiogram.](https://github.com/aiogram/aiogram) 
[Rocketgram](https://github.com/rocketgram/rocketgram) is a popular alternative.

JavaScript is often used as well: check out [Telegraf](https://github.com/telegraf/telegraf)
or [GrammY.](https://github.com/grammyjs/grammY)

There are Bot API libraries for many other languages, too. 
The official site has [a list](https://core.telegram.org/bots/samples) and seems to keep it up-to-date.

## Telegram API libraries

For Python, the most popular library built with Telegram API is [Telethon.](https://github.com/LonamiWebs/Telethon)
Since Telethon is not primarily focused on developing bots,
I started the [Folds](/folds/) framework, which is built on top of Telethon
and is designed to create simple and scalable bot programs.

As of alternatives, there are [Pyrogram](https://github.com/pyrogram/pyrogram) for Python and 
[mtcute](https://github.com/mtcute/mtcute) or [GramJS](https://github.com/gram-js/gramjs) for JavaScript.

[//]: # (todo other langs?)

## Getting started

Here is a simple example of a bot that repeats after the user in DM:

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
