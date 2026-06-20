# How to Manage Telegram Join Requests with a Bot

Join requests are useful when your bot controls access to a group or channel.
They also give the bot a chance to contact a user before the user has started a regular personal dialog.

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

## Approve, decline, or contact

If your bot should process join requests, ask for the admin right to add members.
The bot receives updates every time a user leaves a join request.

Your bot can PM users who left join requests.

## Show UI to process joining

Telegram now supports richer join request flows for bots that screen new members.
Upon receiving a join request query, your bot can open [a Mini App](../interaction/mini-apps) and approve or decline based on the result.

This is mainly useful for anti-spam checks.

## Related links

- [Telegram blog. How join requests look](https://telegram.org/blog/shared-media-scrolling-calendar-join-requests-and-more#join-requests-for-groups-and-channels)
- [Telegram blog. Guardian Bots for Group Chats](https://telegram.org/blog/watch-apps-and-more#guardian-bots-for-group-chats)
