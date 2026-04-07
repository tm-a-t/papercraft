# How Telegram Assigns Message IDs

When you program a bot, you'll often need to refer to messages by their IDs—so it's useful to know that these IDs work differently depending on the chat type.

## In channels and supergroups

In channels and supergroups, message IDs are unique per chat: the first message has ID = 1, the second message has ID = 2, and so on.

Supergroups are a special kind of group with enhanced features that appear like regular groups in the user interface; we'll cover them in more detail [later in the book.](../chats/supergroups)

## In PM and regular groups

In personal dialogs and regular groups, there are no common message IDs. Instead, messages are numbered separately for each participant. For a bot, this means that the first message it either received or sent in any PM or group has ID = 1, the second one has ID = 2, and so on.

## Special cases

Although service messages (such as "A user entered the chat" or "The chat title has changed") don't look like normal messages in the UI, they're still messages and have their own IDs.

::: info TELEGRAM API
A bot can retrieve a message by its ID through [Telegram API,](../dev/api) but Bot API doesn't provide such feature.
:::