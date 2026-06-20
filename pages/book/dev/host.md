# Running Your Telegram Bot on a Server

## Hosting

During development, you can run the bot on your computer.
For real users, the bot should run on a server with stable power and internet connection.
Bot programs are usually lightweight, so a small VPS or container is enough for many projects.

The important part is not raw CPU power, but reliability:

- The process should restart after crashes and server reboots.
- Bot tokens and API keys should be stored outside the source code.
- Logs should be available when users report bugs.
- Data should be stored in a database, not only in memory.
- Backups should exist before the bot becomes important.

For a small Linux server, `systemd` is often enough to keep the process running.
Docker is useful when you want the same environment locally and on the server.

## Free hosting

If you can't pay for hosting yet, try these free options:
- [PythonAnywhere](https://www.pythonanywhere.com/) (may be unstable)
- [Yandex Cloud Functions](https://cloud.yandex.ru/docs/functions/tutorials/telegram-bot-serverless) (serverless)

Free hosting is fine for experiments.
For a bot that people rely on, paid hosting is usually cheaper than debugging random sleep modes or network limits.

## Long-polling vs webhooks

When using Bot API, you can choose between long-polling and webhooks.

With long-polling (the default), your program regularly asks Telegram servers for new updates. With webhooks, Telegram sends HTTP requests to your program when updates arrive.

Long-polling is easier for development and small bots.
Webhooks are better for production bots with higher message volume or strict response time requirements.

To set up webhooks, you need a web application that can receive HTTP requests.
For aiogram, there are [built-in features](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html) that work with aiohttp and other async frameworks.
Your webhook server also needs an HTTPS/SSL certificate.

::: tabs key:libraries
== aiogram
See the guide on [aiogram webhooks](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html)
== Other libraries
<HelpNeeded/>
::: 

## What to save

As discussed on the [updates page](./updates#limitations), Telegram will not give your bot a complete history of users,
chats, and messages on demand.
If your bot needs this information, save it when updates arrive.

Common things to store:

- Users who started the bot.
- Chats where the bot was added.
- Message IDs that the bot may need to edit or delete later.
- User settings, language, and current dialog state.
- Jobs for delayed or repeated messages.

If your bot broadcasts messages, use a queue.
Sending everything at once will hit Telegram limits and make failures difficult to retry.
