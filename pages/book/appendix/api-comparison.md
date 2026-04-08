# Limitations of Bot API in Comparison to Telegram API

This table, kindly provided by @vanutp, shows how Bot API and Telegram API differ in terms of developing bots.

| Feature                                     | Bot API                                   | Telegram API                                                                                      | Read more                                                                                          |
|---------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Fetch messages**                          | From updates only                         | From updates or by message IDs                                                                    | [Updates](../dev/updates#limitations)                                                              |
| **Fetch users**                             | From updates only                         | - From updates<br>- By message IDs (if the bot “saw” the user)<br>- By username (200 times a day) | [Seen users](../chats/pm#seen-users)                                                               |
| **Send and receive files**                  | ↓ 20 MB, ↑ 50 MB (without a local server) | Like regular users                                                                                | [Bot API docs: Local&nbsp;server](https://core.telegram.org/bots/api#using-a-local-bot-api-server) |
| **Fetch group members**                     | No                                        | Yes                                                                                               |                                                                                                    |
| **Get old updates**                         | No                                        | Yes                                                                                               |                                                                                                    |
| **Run multiple programs with the same bot** | Only if other programs use Telegram API   | Yes                                                                                               | [Receiving updates multiple times](../dev/updates#receiving-updates-multiple-times)                |

See the pages on [what is Bot API and Telegram API](../dev/api) and [API libraries](../dev/libraries.md),

<style module>
table {
    width: 100%;
    table-layout: fixed;
}

td {
    min-width: 160px;  /* For small screens */
}
</style>
