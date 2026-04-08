# Running Your Telegram Bot on a Server

## Hosting

Your bot needs a server with stable power and internet connection. Bot programs are lightweight—a basic hosting plan will work just fine.

[//]: # (todo: tips on using Docker, systemd?)

## Free hosting

If you can't pay for hosting yet, try these free options:
- [PythonAnywhere](https://www.pythonanywhere.com/) (may be unstable)
- [Yandex Cloud Functions](https://cloud.yandex.ru/docs/functions/tutorials/telegram-bot-serverless) (serverless)

## Long-polling vs webhooks

When using Bot API, you can choose between long-polling and webhooks.

With long-polling (the default), your program regularly asks Telegram servers for new updates. With webhooks, Telegram sends HTTP requests to your program when updates arrive.

Webhooks are faster and use fewer resources—your bot responds instantly instead of waiting for the next polling cycle. They're the better choice for production bots, especially if you handle high message volumes or need quick response times.

To set up webhooks, you need a web application that can receive HTTP requests.
For aiogram, there are [built-in features](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html) that work with aiohttp and other async frameworks.
Your webhook server also needs an HTTPS/SSL certificate.

::: tabs key:libraries
== aiogram
See the guide on [aiogram webhooks](https://docs.aiogram.dev/en/latest/dispatcher/webhook.html)
== Other libraries
<HelpNeeded/>
::: 
