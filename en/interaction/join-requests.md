# Managing Join Requests as a Telegram Bot

When a user joins a group or a channel with a link, admin approval may be required. In this case,
the user doesn't become a member immediately but leaves a join request. 

Admins may approve or decline join requests from the list. Bots with admin rights may do this as well.

## When a join request is left

- **When the group requires admin approval.**

  Admins can turn on this setting in groups with usernames or groups linked to channels.

- **When the invite link requires approval.**

  A group or a channel may have multiple invite links created by admins. Besides the usage limit and the duration limit, 
  such links may have an approval requirement.

  Bots with admin rights can create invite links, too.

## Bots and join requests

If bot is a group admin, it receives updates every time a user leaves a join request.
The admin right to add members allows the bot to approve or decline the requests.

Moreover, the bot can PM those who left join requests.

## Related links

- [Telegram blog. How join requests look](https://telegram.org/blog/shared-media-scrolling-calendar-join-requests-and-more#join-requests-for-groups-and-channels)
