# How to Create Telegram Bot Links and Deep Links

Links are a common entry point to using a bot. 
Use regular links when you only need to open the bot.
Use _deep links_ when the bot should receive some extra input at the start.

## Use regular links to direct people to your bot

The same way as with users, groups, and channels, 
the link `t.me/examplebot` opens the bot with the username `@examplebot`. 
Use the link in form `examplebot.t.me` if you want to be fancy :)

## Use deep links for more input

Deep links can start a personal dialog with the bot with some initial data—
for example, for a referral program it can be an ID of the user who shared the link.
They have the following form: `t.me/examplebot?start=YOUR_TEXT`

::: tabs key:libraries
== aiogram
```python
from aiogram.utils.deep_linking import create_start_link

link = await create_start_link(bot, 'from_ad')
```
== Folds
```python
from folds.context import client

link = f'https://t.me/{client.me.username}?start=from_ad'
```
== Telethon
```python
self_user = await client.get_me()
link = f'https://t.me/{self_user.username}?start=from_ad'
```
== Other libraries
<HelpNeeded/>
:::

Once a user visits a deep link, they see a dialog with the bot and the “Start” button 
(even if they have already [started the dialog).](../chats/pm) 
The button sends `/start YOUR_TEXT`.
The user, however, sees only `/start`, like if starting the bot regularly.

<video controls loop muted preload="auto">
<source src="/pictures/ru/start.webm" type="video/mp4">
</video>

## Use group deep links for more input { #deep-links-for-groups }

If your bot is intended for groups, use deep links for groups. With them, the bot can join a group and receive initial input right away.

The link of form `t.me/examplebot?startgroup=YOUR_TEXT` opens a chat selection dialog to add the bot;
once the bot is added, the command `/start YOUR_TEXT` will immediately be sent to the group.

::: tabs key:libraries
== aiogram
```python
from aiogram.utils.deep_linking import create_start_link

link = await create_startgroup_link(bot, 'from_ad')
```
== Folds
```python
from folds.context import client

link = f'https://t.me/{client.me.username}?startgroup=from_ad'
```
== Telethon
```python
self_user = await client.get_me()
link = f'https://t.me/{self_user.username}?startgroup=from_ad'
```
== Other libraries
<HelpNeeded/>
:::

## Mind the `tg://` links

All links considered above have `tg://` equivalents (like `tg://resolve?domain=examplebot`). 
Still, prefer the regular `t.me` links: they are more readable and can be opened outside Telegram.

Some other `tg://` links lead to in-app places, 
For example, the link to [tg://settings](tg://settings) opens settings in some Telegram apps.
Such links are listed [in API documentation](https://core.telegram.org/api/links) and
in the unofficial [@DeepLink](https://t.me/deeplink) channel.


## Related links

- [Telegram docs on deep links](https://core.telegram.org/bots/features#deep-linking)
