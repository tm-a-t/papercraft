# How to Send Rich Messages from Telegram Bots

Use new-style rich messages when regular text formatting is not enough:
reports, long AI answers, documentation snippets, technical explanations, tables, formulas, and other content
that should read like a native Telegram document.

For short chat replies, confirmations, and ordinary bot flows, keep using regular messages with
[text formatting](markup).

## Use document-like blocks when plain text is too small

Rich messages support document-like blocks and inline formatting:

- Headings, paragraphs, lists, task lists, and dividers.
- Tables, captions, footnotes, anchors, and in-message links.
- Nested quotes and collapsible sections.
- Inline and block math formulas.
- Media blocks such as photos, videos, audio, maps, collages, and slideshows.
- Rich text entities such as subscript, superscript, marked text, code, custom emoji, and dynamic dates.

Telegram renders this content natively in its apps, so it does not open a web page like a
[Mini App](mini-apps).

## Stream generated answers { #streaming-rich-replies }

Rich messages are especially useful for AI bots.
Instead of waiting for a full response, a bot can stream a partial rich message draft and update it while the answer is generated.

Streaming messages basically means repeatedly editing it with a pretty animation in the app.

## Keep simple messages simple

Rich messages are a newer Bot API feature, so library support may lag behind the official API.
If your library does not support them yet, you may need to call the raw Bot API methods directly.

You can still use simple messages for basic formatting like bold text and links.

## Related links

- [Telegram docs. Advanced Formatting Options](https://core.telegram.org/bots/features#advanced-formatting-options)
- [Telegram docs. Bot API changelog](https://core.telegram.org/bots/api-changelog#june-11-2026)
- [Telegram blog. Rich Text for Bots](https://telegram.org/blog/watch-apps-and-more#obscenely-rich-text-formatting-for-bots)
