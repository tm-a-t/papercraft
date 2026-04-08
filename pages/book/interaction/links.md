# Creating Links to Bots

Links are a common entry point to using a bot. 
_Deep links_ can be used for starting bot dialogs with some extra input.

## Regular links

The same way as with users, groups, and channels, 
the link `t.me/examplebot` opens the bot with the username `@examplebot`.

## Deep links

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

## Deep links for groups

There is a variant of deep links for groups as well.

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

## Using `tg://` links

Just FIY, all links that we considered above also have `tg://` equivalents. These are direct links that can be opened within the app:

- Regular link: `tg://resolve?domain=examplebot`
- Deep link: `tg://resolve?domain=examplebot&start=YOUR_TEXT`
- Group deep link: `tg://resolve?domain=examplebot&startgroup=true`

There are more direct links that may replace `t.me` links or do special actions.
For example, the link to [tg://settings](tg://settings) opens settings in some Telegram apps.
Such links are listed [in API documentation](https://core.telegram.org/api/links) and
in the unofficial [@DeepLink](https://t.me/deeplink) channel.


## Related links (but not to bots)

- [Telegram docs on deep links](https://core.telegram.org/bots/features#deep-linking)
