# Rule Kinds

You can declare rules for handling messages, commands, or other actions.

Because Folds’ philosophy is to keep the code pure, the decorators do not take any parameters. 
If you need to filter events, simply use `if` or `match` within the functions

Note that if an event satisfies multiple rules, all of them will activate.

#### Receiving messages

::: code-group
```python [Private Message]
@bot.private_message
async def _():
    return 'I received a private message'
```
```python [Group Message]
@bot.group_message
async def _():
    return 'I received a message in a group'
```
```python [Channel Message]
@bot.channel_message
async def _():
    return 'I received a message in a channel'
```
:::

#### Receiving commands

::: code-group
```python [Command in PM]
@bot.private_commands.hello
async def _():
    return 'I received /hello in PM'
```
```python [Command in Group]
@bot.group_commands.hello
async def _():
    return 'I received /hello in a group'
```
:::

#### Handling group actions

::: code-group
```python [Added to Group]
@bot.added_to_group
async def _():
    return 'Someone added me to a group'
```
```python [Removed from Group]
@bot.removed_from_group
async def _():
    pass  # The bot was removed from a group
```
```python [Group Became Supergroup]
@bot.group_became_supergroup
async def _():
    return 'This group has just became supergroup'
```
:::

<!-- 
(See the Papercraft Book on [group bots]&#40;../../book/chats/groups&#41; and [supergroups.]&#40;../../book/chats/supergroups&#41;) 
-->

#### Supporting inline mode

```python
@bot.inline_query
async def f():
    pass  # Someone used an inline mode
```

::: details Full example for inline mode
```python
from folds import Query

@bot.inline_query
async def f(query: Query):
    await query.answer([
        query.builder.article('Option A', text='This is some text'),
        query.builder.article('Option B', text='This is another text'),
    ])
```
:::

## Combined rule kinds

You may combine the decorators to declare some common logic:

```python
@bot.group_command.help
@bot.private_command.help
async def _():
    return 'I will always help you'
```

## Custom events

In case you need a specific Telegram event not mentioned above, 
Folds supports Telethon events:

```python
from telethon import events

@bot.on(events.CallbackQuery())
async def _():
    ...
```
