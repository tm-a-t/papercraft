# How Your Telegram Bot Should Manage User Info

Bots may work in PM, in groups, and in channels — depending on their purpose.
These kinds of chats work by different rules,
so we'll consider them all in the "Chats" chapter.

However, your bot will always interact with users in one way or another. 
On this page, we’ll discuss some general advice about managing users.

## User profile

Users may have no username or no last name — keep this in mind while storing their profile info. 
In groups, this means the bot can't always mention a user by username 
(see [mentions by ID](../messages/markup#mention)).

In addition, first name, username, and other profile data except for user ID can change over time,
so ID is probably the only reliable way to identify a user.
User IDs will be explained in more detail [later in the book.](../chats/id)

::: tabs key:libraries
== aiogram
A last name isn't always set, so `user.full_name` is a shortcut that combines the first name and last name (when it exists) into a single string.

```python
user.full_name
```
== Telethon & Folds
A correct way to get a user's display name would be:
```python
if user.last_name is None:
    full_name = user.first_name
else:
    full_name = f'{user.first_name} {user.last_name}'
```
== Other libraries
<HelpNeeded/>
:::

## User languages

Bots can access the language setting that a person has configured in their Telegram app.
This allows your bot to communicate in users' native languages.

However, the user's language is not always included in all updates. 
If your bot supports multiple languages, Telegram recommends using the last known language preference 
when this information is missing from an update.

::: tabs key:libraries
== aiogram
```python
user.language_code  # Sometimes is None
```
== Telethon & Folds
```python
user.lang_code  # Sometimes is None
```
== Other libraries
<HelpNeeded/>
:::


## Seen users

A bot must have _seen_ a user to perform actions related to them (such as mentioning them). 
The bot _sees_ a user when, for example, it receives a message from the user or retrieves their information by username.

"Seeing" users is not an official term, but rather a conceptual explanation of how Telegram's API works.
In technical terms, API requests must include not only the [user ID](./id) but also a corresponding
access hash. The API provides these access hashes along with other user information in updates. 
Both Bot API and well-designed Telegram API libraries handle access hash caching automatically, so you typically don't need to manage them directly.
