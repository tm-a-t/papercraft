# Folds

<p style="display: flex; align-items: start; column-gap: 2px">
    <a href="https://github.com/tm-a-t/folds" target="_blank">
        <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/tm-a-t/folds?style=flat-square&logo=github" style="border-radius: 10px">
    </a>
    <a href="https://pypi.org/project/folds" target="_blank">
        <img alt="GitHub Repo stars" src="https://img.shields.io/pypi/v/folds?style=flat-square" style="border-radius: 10px">
    </a>
</p>

---

Folds is an elegant and scalable framework for bots, wrapping Telethon library.

- Minimalistic when you need simple features, powerful when you need complex ones.
- Flexible app structure with no boilerplate and no imports in the middle of files.
- Easy support for multi-bot apps.
- Built with Telegram API without Bot API — I explain it below.

```python 
from folds import Bot, Message, ThisUser

bot = Bot(bot_token, api_id, api_hash)


@bot.added_to_group()
async def handle_added():
  return 'Hello!'


@bot.group_commands.help()
async def handle_help_command():
  return 'You called for /help?'


@bot.group_commands.hello()
async def handle_hello_command(message: Message, user: ThisUser):
  await message.reply('Hmm!')
  await message.reply(f'Hello, {user.first_name}')


bot.run()
```

## Built with Telegram API

Folds is built on top of Telethon, a Telegram API library. This means Folds doesn't use Bot API.

#### Pros

- No limitations.
  Folds doesn't have natural limitations that Bot API has:
  see [the API explanation](/book/dev/api) and [the comparison table](/book/appendix/api-comparison) 
  from the Papercraft Book for details.
- Reuse code for userbots. 
  When you are familiar with Telethon concepts, 
  you can not only program bots with Folds but also program user accounts.
  In particular, our Telegram script tool named [TGPy](/tgpy/) is also based on Telethon.

#### Cons

- Setting up requires a little extra step.

## Should I use it?

The framework is in its early version, and the features will change, so...

For small hobby bots — yes. For big complex projects — also yes, but better come back later! 
I will appreciate if you show your interest by leaving a star on the repo.

## Learn

Here is how to get familiar with Folds:
- Read these docs, of course. I tried to make them friendly!
- Read [the Telethon docs](https://docs.telethon.dev) because Folds bases on Telethon. 
  ChatGPT knows Telethon well, apparently.
- For specific features, read [the Papercraft Book,](/book/) my book on developing Telegram bots. 
  It includes code examples for Folds.

[//]: # (- Join the chat and ask questions: [@sdlof]&#40;https://t.me/sdlof&#41;)

## Getting Started

Head over to [Quick Start.](./tutorial/quick-start)
