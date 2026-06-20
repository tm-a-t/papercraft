# Bot Automation

Telegram has several newer ways to let bots act outside the traditional “user sends a message, bot replies” flow.
These features are powerful, but they are also permission-sensitive.
Do not treat them as a way to bypass user consent or chat privacy.

## Business and profile automation

Users can connect a bot to their account and grant it specific permissions.
Depending on those permissions, a bot may help manage messages, profile information, stories, gifts, Stars, and other account features.

This is useful for:

- Customer support inboxes.
- AI assistants that answer selected chats.
- Creator and business automation.
- Story, profile, gift, and transaction workflows.

The bot receives a business connection and must use the corresponding business connection ID when acting on behalf of the account.
The user controls what the bot can access.

## Managed bots

Bots can help users create and manage other bots.
For example, an AI assistant or no-code tool can guide a user through creating a new bot, receive updates when a managed bot is created,
and request or replace that bot's token when allowed.

This does not mean any bot can take over arbitrary bots.
The flow requires explicit user action and Bot API support for managed bot access.

## Guest bots { #guest-bots }

Guest mode lets users mention a bot in chats where the bot is not a member.
The bot receives a dedicated guest update with the message that mentioned it and can send one reply back to that chat.

Guest bots are useful for temporary tools:

- AI assistants.
- Translators and summarizers.
- Fact-checking or lookup helpers.
- Tools that should answer once without joining the group.

Guest mode is limited by design.
The bot does not get the chat history, does not see the participant list, and does not keep receiving future messages unless it is mentioned
or replied to again.

## Bot-to-bot communication

Bots can communicate with other bots when the relevant mode is enabled.
This can be useful for agent workflows or for using another bot as a specialized tool.

Add loop protection before enabling this.
At minimum, store processed message IDs, rate-limit replies, and stop conversations after a maximum depth or timeout.
Telegram may restrict bots that create unstable loops.

## Relationship to Mini Apps

[Mini Apps](./mini-apps) often provide the interface for automation features.
For example, a bot may use a Mini App to request a chat, request a managed bot, configure access, or screen a join request.

## To fill later

- End-to-end example of connecting a bot for business/profile automation.
- Managed bot flow with library examples.
- Guest mode handler examples and safe loop-prevention patterns for bot-to-bot chats.

## Related links

- [Telegram docs. Bot Features](https://core.telegram.org/bots/features)
- [Telegram docs. Bot API changelog](https://core.telegram.org/bots/api-changelog)
- [Telegram blog. Automated Business Accounts](https://telegram.org/blog/group-calls-made-easy#automated-business-accounts)
- [Telegram blog. Guest Bots and Bot-to-Bot Communication](https://telegram.org/blog/ai-bot-revolution-11-new-features)
