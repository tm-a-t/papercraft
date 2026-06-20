# How to Forward and Copy Telegram Bot Messages

Use this page when your bot needs to forward a message, or copy it into another chat without the forwarded label.

## Keep or remove the forwarded label

::: tabs key:libraries
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

## Expect music forwarding quirks

When a user or a bot forwards a music file, it doesn't receive the “Forwarded” label. Strange Telegram rules ¯\_(ツ)_/¯

## Respect protected content

Do not forward messages from groups and channels with the “protected content” setting turned on.
