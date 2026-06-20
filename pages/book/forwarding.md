# How to Forward and Copy Telegram Bot Messages

Use this page when your bot needs to forward a message, or copy it into another chat without the forwarded label.

Some code examples:

::: tabs key:libraries variant:code
== aiogram
```python
# With the 'Forwarded' label
await message.forward(chat_id)

# Without the 'Forwarded' label
await message.copy_to(chat_id)
```
== Telethon & Folds
```python
# With the 'Forwarded' label
await message.forward(chat_id)

# Without the 'Forwarded' label
await client.send_message(chat_id, message)
```
== Other libraries
<HelpNeeded/>
:::

## Forward music normally

Before latest updates, music files didn't receive the “Forwarded” label. Now everything is ok!

## Remember that messages can be unforwardable

Bots (and users) may not forward messages from groups and channels with the “protected content” setting turned on.
