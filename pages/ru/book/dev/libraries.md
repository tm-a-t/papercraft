# Как выбрать правильную библиотеку для Телеграм-бота

Ваш выбор будет зависеть от того, решите ли вы использовать Bot API или Telegram API.
Я разобрал различия [на предыдущей странице,](./api) так что обязательно прочитайте её сначала.

## Библиотеки для Bot API

Самая популярная библиотека для разработки Telegram ботов на Питоне — это [aiogram.](https://github.com/aiogram/aiogram)
Популярная альтернатива — [Rocketgram](https://github.com/rocketgram/rocketgram).
Для Джаваскрипта часто используют [Telegraf](https://github.com/telegraf/telegraf)
или [GrammY](https://github.com/grammyjs/grammY).

Библиотеки под Bot API есть и для многих других языков.
На официальном сайте есть [список](https://core.telegram.org/bots/samples), который, похоже, поддерживается в актуальном состоянии.

## Библиотеки для Telegram API

Самая популярная библиотека для Питона, построенная на Telegram API, — это
[Telethon.](https://github.com/LonamiWebs/Telethon) _Поскольку Telethon не сосредоточен именно на разработке ботов,
я создал на его основе фреймворк [Folds](/folds/), который помогает писать простой и масштабируемый код для ботов._

Для Джаваскрипта можно посмотреть на [mtcute](https://github.com/mtcute/mtcute) и [GramJS.](https://github.com/gram-js/gramjs)

[//]: # (todo other langs?)

## Начало работы

Вот простой пример бота, который повторяет сообщения пользователя в личке:

::::: tabs key:libraries
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
:::::

Но сначала вам нужно зарегистрировать бота и получить токен.
