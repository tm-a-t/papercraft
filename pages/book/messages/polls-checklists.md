# How to Use Polls and Checklists in Telegram Bots

Use polls and checklists when a message should help people make decisions, collect answers, or track tasks.
Polls are available to ordinary bots.
Checklists are newer and currently matter most for bots connected to user or business accounts.

Use polls when users choose between options.
Use checklists when items have a completion state.
For complex workflows with validation, permissions, filters, and custom fields, consider a
[Mini App](../interaction/mini-apps) instead.

## Use polls for choices

Use regular polls and quizzes when users should choose or answer inside Telegram.
They cannot vote in polls themselves, but they can receive poll updates and use the results in the bot logic.

Recent Telegram updates made polls much more flexible:

- Polls may have up to 12 options.
- Questions, explanations, and options can include media.
- Poll options can include links.
- Polls can have descriptions, time limits, shuffled options, and hidden results until closing.
- Quizzes can have multiple correct answers.
- Active polls can allow users to suggest new options.
- Polls can be limited to channel subscribers or to users from specific countries.
- Visible-vote polls can show when users voted.

Some poll features are mostly client-side or admin-facing.
For example, poll statistics graphs are shown in Telegram apps, but you should not assume every graph detail is available
through Bot API updates.

## Use checklists for task state

Checklists are collaborative task lists inside Telegram chats.
They can be useful for teams, shopping lists, moderation workflows, launch checklists, and support handoffs.

In the Bot API, bots can see checklist messages and service messages about changed tasks.
Reply to a specific checklist task when the answer belongs to one item, not the whole message.

Sending or editing checklists is currently tied to business-account style flows:
a bot sends or edits the checklist on behalf of a connected account, not as a plain standalone bot in every chat.

## Related links

- [Telegram docs. Polls in Bot API](https://core.telegram.org/bots/api#poll)
- [Telegram docs. Checklists in Bot API changelog](https://core.telegram.org/bots/api-changelog#july-3-2025)
- [Telegram blog. Checklists and suggested posts](https://telegram.org/blog/checklists-suggested-posts#checklists)
- [Telegram blog. Mighty Polls](https://telegram.org/blog/ai-editor-mighty-polls-and-more#10-new-features-for-polls)
