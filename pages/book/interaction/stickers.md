# Managing Sticker Sets and Custom Emoji Sets

Use bot-managed sticker sets when sticker or custom emoji management is part of the bot itself:
brand packs, community packs, generators, moderation tools, or a workflow around user-submitted images.

Bots (and only bots) can create sticker sets and custom emoji sets. Each pack must have a user specified as its owner.
A common way for people to create and manage sticker sets is through [@Stickers](https://t.me/stickers) bot,
but other bots can do it as well.
Telegram also provides an official [@Stickers Mini App](https://t.me/Stickers), which lets users create stickers and emoji,
manage packs, and view usage statistics in a richer interface.

Use the API when the bot should create, rename, edit, or delete sets.

::: info Custom emoji
Only premium users may use custom emoji from sets. Nevertheless, custom emoji sets can be created
by any bots and owned by any users.
:::

## Choose a set format

Choose the format before processing user files.
Sticker sets and custom emoji sets may be static (PNG or WEBP), video (WEBM), or animated (in a special format based on
Lottie).
Furthermore, a set of single color emoji may be adaptive, meaning that users will see it in the same color as the text
regardless of their color theme.

## Related links

- [Telegram site. Sticker requirements](https://core.telegram.org/stickers)
- [Telegram docs. Creating stickers and custom emoji](https://core.telegram.org/bots/features#stickers-and-custom-emoji)
- [Telegram blog. Stickers Mini App](https://telegram.org/blog/profile-music-gift-themes#stickers-mini-app)
