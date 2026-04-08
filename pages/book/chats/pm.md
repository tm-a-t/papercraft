# How Personal Dialogs with Telegram Bots Work

You want your bot to answer users in personal dialogs.

Even if your bot is designed to work in groups or channels, it's a good idea to implement a greeting message in PM.
This way, people who get interested in the bot and open its profile will receive a response rather than encountering no interaction.
You can include an “Add to your group” link using [deep links for groups.](../interaction/links#deep-links-for-groups)


## Starting a personal dialog

A bot cannot send messages to a user until the user has initiated the dialog. 
Once the dialog is started, the bot can send messages at any time.
Note that bots cannot send messages to other bots.

### The `/start` command

Here is how a personal dialog usually starts:

A user opens the bot with a link or by searching in the app. 
They then see [the intro text](../dev/botfather#customization) and the “Start” button.

When the user clicks the button, the `/start` command is sent,
which signals that the private chat has begun.
The bot should respond to this command with a greeting or usage instructions.

::: tabs key:libraries
== aiogram
```python
@dp.message(CommandStart())
async def handle_start(message: Message):
    await message.answer('Hi!')
```
== Folds
```python
@bot.private_commands.start()
async def handle_start():
    return 'Hi!'
```
== Telethon
```python
@client.on(events.NewMessage(pattern='^/start( .+)?$'))
async def handle_start(event: Message):
    await event.respond('Hi!')
```

The regexp in this example accepts `/start` with some text after it in case a deep link is used.
Deep links are explained [in the “Interaction” chapter.](../interaction/links)
== Other libraries
<HelpNeeded/>
:::

![](/pictures/ru/start.gif)

Just like any other chat, the dialog with the bot appears in the user's recent chat list.

::: warning
The `/start` command doesn't necessarily mean this is the user's first interaction with the bot.
Make sure your bot handles situations where a user sends `/start`
after they've already initiated a dialog previously.
:::

::: tip Extra input
You can use [deep links](../interaction/links) so that the `/start` message contains additional information.
:::

### Alternative ways to start a dialog

Sometimes a bot may send messages to a user even if they haven't started the dialog explicitly. 
This happens in one of the following cases:

- The user [requested to join](../interaction/join-requests) a group or channel where the bot manages join requests.
- The user [authorized on a site with Telegram Login Widget](../interaction/login-widget) through the bot.

When this occurs, the Telegram app shows the user an explanation of why the bot is contacting them.

## Stopping the dialog { #block }

A user can stop the dialog by blocking the bot. The bot won't be able to send personal messages to the user
until they unblock it.

## How to check if the bot may text a user

If you need to determine whether a user has blocked your bot, you can use the following method.

Attempt to show a “Bot is typing...” status in the dialog.
If Telegram servers return an error, it means the bot can't
send messages to the user—so either the user has blocked the bot or the dialog has never started.

This action has minimal rate limiting, so you can do it frequently.

::: tabs key:libraries
== aiogram
```python
try:
    await bot.send_chat_action(chat, 'typing')
except TelegramForbiddenError:
    print("Can't send messages")
```
== Telethon & Folds
```python
try:
    async with client.action(user, 'typing'):
        pass
except UserIsBlockedError:
    print("Can't send messages")
```
== Other libraries
<HelpNeeded/>
:::
