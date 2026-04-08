# Telegram API VS Bot API. What Is the Difference?

Developing a bot means creating a program that connects to Telegram servers, receives information (such as
incoming messages) and sends instructions (like “reply to that message”).
Let's dive into how it works.

**MTProto API** (also known as **Telegram API**) is the API through which your mobile or desktop Telegram app connects
to the Telegram servers. It is open, meaning that developers can use the API to create their own Telegram apps.
The MTProto API is named after the MTProto encryption protocol which the Telegram team developed for their messenger.

**Telegram Bot API** is another official API. Bot API is built on top of MTProto API and can only be used for bots.

The Bot API was created to allow developers to write bots using plain HTTP-requests without having to learn
the complexities of MTProto.
It also has features to make development easier, such as webhooks and built-in HTML/Markdown markup.

However, you won't need the perks of Bot API :)

Most developers use wrapper libraries rather than plain HTTP-requests anyway.
These libraries are available for many programming languages and often include
even more features for convenient development.

In short, you can develop bots with either Telegram API or Bot API.

## So which API to choose?

Some libraries are built on top of Bot API and some libraries are built on top of Telegram API. 

On the one hand, you can find many more libraries for Bot API.

On the other hand, Bot API is a bit more limited.
By default, it forbids uploading large files or fetching old messages from chat history
(you can check out [the comparison table](../appendix/api-comparison)).
I prefer always using Telegram API, but honestly there is little difference.

You can read more about choosing the right library on the next page!

## A word on userbots

As Telegram API is open and has libraries that work with it, you can easily write a program that controls a user account
rather than a bot.
Such programs are called userbots. 
They are useful when you want to automate actions that users are allowed to do and bots aren't.

Userbots are used for various purposes, such as updating a user's profile picture with the current time,
collecting messages from public groups and channels, and automating repetitive tasks.

We are not covering userbots in Papercraft Book, 
but Telegram API libraries on the next page will be helpful if you want to develop one.

::: warning
Although Telegram usually doesn't ban accounts for userbots, you should be careful.
Telegram may limit or delete spammer accounts.
:::

## Related links

- [Telegram docs. Technical details of MTProto](https://core.telegram.org/mtproto)
- [Telegram docs. Authorizing bots through Telegram API](https://core.telegram.org/api/bots)
- [Telegram docs. Bot API reference](https://core.telegram.org/bots/api)
- [Telegram docs. Telegram API methods](https://core.telegram.org/methods)
- [Official Bot API channel with updates](https://t.me/BotNews)
