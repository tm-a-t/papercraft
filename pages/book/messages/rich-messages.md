# Rich Messages

Rich messages are structured messages that bots can send when regular text formatting is not enough.
Use them for reports, long AI answers, documentation snippets, technical explanations, tables, formulas, and other content
that should read like a native Telegram document.

For short chat replies, confirmations, and ordinary bot flows, keep using regular messages with
[text formatting](./markup).

## What rich messages can include

Rich messages support document-like blocks and inline formatting:

- Headings, paragraphs, lists, task lists, and dividers.
- Tables, captions, footnotes, anchors, and in-message links.
- Nested quotes and collapsible sections.
- Inline and block math formulas.
- Media blocks such as photos, videos, audio, maps, collages, and slideshows.
- Rich text entities such as subscript, superscript, marked text, code, custom emoji, and dynamic dates.

Telegram renders this content natively in its apps, so it does not open a web page like a
[Mini App](../interaction/mini-apps).

## Streaming rich replies

Rich messages are especially useful for AI bots.
Instead of waiting for a full response, a bot can stream a partial rich message draft and update it while the answer is generated.

This is different from repeatedly editing a normal message:
Telegram has dedicated Bot API support for rich-message drafts and uses native animations for streamed output.

## Where rich messages can appear

Bots can send rich messages directly to chats.
Rich messages can also be used as content for inline, guest, and Web App query results when the bot returns an
`InputRichMessageContent`.

This makes them useful in several flows:

- A bot answers a private chat with a formatted report.
- An AI assistant is mentioned as a [guest bot](../interaction/bot-automation#guest-bots) and replies with a structured answer.
- A [Mini App](../interaction/mini-apps) returns a generated document back into the chat.
- An [inline mode](../interaction/inline) result sends a rich answer instead of plain text.

## Restrictions

Rich messages are a newer Bot API feature, so library support may lag behind the official API.
If your library does not support them yet, you may need to call the raw Bot API methods directly.

For simple messages, do not switch to rich messages just to use bold text or links.
Regular messages are easier to build, easier to localize, and support common chat interactions such as partial quotes.

## To fill later

- Library examples for aiogram, Folds, and Telethon.
- A minimal rich message example once common libraries expose stable helpers.
- Practical limits and client compatibility notes beyond the current Bot API docs.

## Related links

- [Telegram docs. Advanced Formatting Options](https://core.telegram.org/bots/features#advanced-formatting-options)
- [Telegram docs. Bot API changelog](https://core.telegram.org/bots/api-changelog#june-11-2026)
- [Telegram blog. Rich Text for Bots](https://telegram.org/blog/watch-apps-and-more#obscenely-rich-text-formatting-for-bots)
