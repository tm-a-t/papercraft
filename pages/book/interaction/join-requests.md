# Managing Join Requests as a Telegram Bot

Join requests are useful when your bot controls access to a group or channel.
They also give the bot a narrow chance to contact a user before the user has started a regular personal dialog.

## Use join requests before adding users

Require join requests when you need to approve people before they enter a group or channel.
When a user joins with a link and admin approval is required,
the user doesn't become a member immediately but leaves a join request.
Admins may approve or decline join requests from the list. Bots with admin rights may do this as well.

A join request is left in two cases:

- **When the group requires admin approval.**
  Admins can turn on this setting in groups with usernames or groups linked to channels.

- **When the invite link requires approval.**
  A group or a channel may have multiple invite links created by admins. Besides the usage limit and the duration limit, 
  such links may have an approval requirement.
  (Bots with admin rights can create invite links, too.)

## Approve, decline, or contact applicants

Make the bot an admin if it should process join requests automatically.
The bot receives updates every time a user leaves a join request.
The admin right to add members allows the bot to approve or decline the requests.

Moreover, the bot can PM those who left join requests.

## Screen applicants with guardian flows

Telegram now supports richer join request flows for bots that screen new members.
A guard bot can receive a join request query, open a Mini App for the applicant, and answer the query based on the result.

This is useful for:

- Anti-spam checks.
- Community applications.
- Paid or invite-only communities.
- AI-assisted moderation.

Do not assume that the bot can inspect the whole user profile or chat history.
Design screening around the data Telegram provides, the answers the applicant gives, and any rules your community owns.

## Related links

- [Telegram blog. How join requests look](https://telegram.org/blog/shared-media-scrolling-calendar-join-requests-and-more#join-requests-for-groups-and-channels)
- [Telegram blog. Guardian Bots for Group Chats](https://telegram.org/blog/watch-apps-and-more#guardian-bots-for-group-chats)
