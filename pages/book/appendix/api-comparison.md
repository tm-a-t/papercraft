# What Telegram Bot API Can and Can't Do

Use this table when you need to check whether a bot feature requires Telegram API instead of Bot API.
It was kindly provided by @vanutp.

| Feature                                     | Bot API                                   | Telegram API                                                                                      | Read more                                                                                          |
|---------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **Fetch messages**                          | From updates only                         | From updates or by message IDs                                                                    | [Updates](../dev/updates#limitations)                                                              |
| **Fetch users**                             | From updates only                         | - From updates<br>- By message IDs (if the bot “saw” the user)<br>- By username (200 times a day) | [Seen users](../chats/users#seen-users)                                                            |
| **Send and receive files**                  | ↓ 20 MB, ↑ 50 MB (without a local server) | Like regular users                                                                                | [Bot API docs: Local&nbsp;server](https://core.telegram.org/bots/api#using-a-local-bot-api-server) |
| **Fetch group members**                     | No                                        | Yes                                                                                               |                                                                                                    |
| **Get old updates**                         | No                                        | Yes                                                                                               |                                                                                                    |
| **Run multiple programs with the same bot** | Only if other programs use Telegram API   | Yes                                                                                               | [Receiving updates multiple times](../dev/updates#receiving-updates-multiple-times)                |

For choosing a library, see the pages on [Bot API vs Telegram API](../dev/api) and [API libraries.](../dev/libraries).

<style module>
table {
    width: 100%;
    table-layout: fixed;
}

td {
    min-width: 160px;  /* For small screens */
}
</style>
