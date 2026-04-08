# Разработка Телеграм-бота для групп

Боты для групп могут быть очень полезны:
они участвуют в пространстве, где люди регулярно общаются друг с другом.
Однако есть много деталей, которые следует учесть.

## Вступление в группы

Пользователи могут добавлять ботов в группы, но боты не могут вступать в группы самостоятельно.
Разработчик бота может запретить добавление в группы [через настройки BotFather](../dev/botfather).

В публичных группах — группах с юзернеймами — ботов могут добавлять только администраторы.
Администраторы могут предоставить боту права на удаление участников 
или другие административные действия.

В одной группе может быть до 20 ботов.

::: tabs key:libraries
== aiogram
```python
@dp.my_chat_member(ChatMemberUpdatedFilter(IS_NOT_MEMBER >> IS_MEMBER))
async def handle_join(event: ChatMemberUpdated):
    await event.answer('Привет ' + event.chat.title)
```
== Folds
```python
@bot.added_to_group()
async def handle_join(chat: Chat):
    return 'Привет ' + chat.title
```
== Telethon
```python
@client.on(events.NewMessage(func=lambda e: e.is_group and e.user_added and e.user.is_self))
async def handle_join(event):
    chat = await event.get_chat()
    await event.respond('Привет ' + chat.title)
```
== Other libraries
<HelpNeeded/>
:::

## Отправка сообщений участникам группы

<!-- TODO

Some examples:

::: tabs key:libraries
== Folds
```python
@bot.group_message()
async def _(chat: Chat):
    return 'Hello ' + chat.title
```
== Telethon
== Other libraries
<HelpNeeded/>
:::

-->

Сообщения в группе видны всем участникам. Бот не может отправить сообщение, которое увидит только один человек в группе.
Например, когда бот приветствует новых участников, все существующие участники также получат это приветственное сообщение.

Чтобы не засорять чат, бот может автоматически удалять вспомогательные сообщения через определенное время.
Вот пример удаления приветственных сообщений через 30 секунд (если программа не прервана):

::: tabs key:libraries
== aiogram
```python
@dp.chat_member(ChatMemberUpdatedFilter(IS_NOT_MEMBER >> IS_MEMBER))
async def handle_join(event: ChatMemberUpdated):
    user = event.new_chat_member.user
    answer = await event.answer(f'Добро пожаловать в группу, {user.first_name}')
    await asyncio.sleep(30)
    await answer.delete()
```
== Folds & Telethon
```python
@bot.on(events.ChatAction(func=event.group and event.user_added and not event.user.is_self))
async def greet(event: events.ChatAction.Event):
    answer = await event.respond(f'Добро пожаловать в группу, {event.user.first_name}')
    await asyncio.sleep(30)
    await answer.delete()
```
== Other libraries
<HelpNeeded/>
:::

Обратите внимание, что если вашему боту нужно лично связаться с новыми пользователями группы, запросы на вступление могут быть полезны для получения разрешения на личные сообщения
— мы рассмотрим [запросы на вступление](../interaction/join-requests) позже в книге.

## Privacy mode и видимые сообщения { #privacy }

Многие боты созданы для того, чтобы реагировать только [на команды](../messages/commands.md).
По этой причине Telegram по умолчанию защищает приватность групп и не уведомляет ботов о сообщениях, которые не являются командами.

Если вы хотите, чтобы ваш бот видел все сообщения в чате, вам нужно отключить режим приватности.

Privacy mode — это настройка BotFather, включённая по умолчанию.
В этом режиме бот получает обновления только о командах и других сообщениях группы, которые могут быть адресованы боту.
Это включает:
- Команды
- Ответы на сообщения бота, ответы на ответы и так далее
- Сообщения с [упоминанием](../messages/markup#mention) бота
- Системные сообщения

Когда privacy mode выключен, бот видит все сообщения в группах, кроме сообщений от других ботов.

Также, если бот является администратором группы, он видит все сообщения независимо от настройки режима приватности.

![Пример бота, который видит не все сообщения](/pictures/ru/friedrich.png)

::: tip Не получается отключить privacy mode?
Если вы отключили privacy mode, бота нужно удалить из группы и добавить обратно, чтобы изменения вступили в силу.
:::

В мобильных и десктопном приложениях Телеграма в списке участников группы видно, включён ли privacy mode:

![Пример бота](/pictures/ru/privacy.png){ style="margin: 0 auto" }

::: info Force reply {#force-reply}

Если бот с privacy mode спросил что-либо у участника группы, то сообщение участника должно быть ответом
на сообщение бота, чтобы бот его увидел.

Для того чтобы не заставлять пользователя нажимать «Ответить»,
бот может отправить сообщение с force reply. В этом случае у пользователя автоматически начнётся ответ, как если бы
он нажал «Ответить».

Но я не рекомендую использовать force reply, потому что автоматический ответ на сообщения сбивает пользователей
с толку.
:::

## Права администратора

Когда пользователь назначает бота админом чата, он может выбрать, какие права админа ему дать. В настройках BotFather
можно выбрать, какие права в таком случае предлагать включать по умолчанию.

Право админа на анонимность — способность отправлять сообщения от лица группы — не действует на ботов.

![Выбор прав](/pictures/ru/admin-rights.png)

## Сообщения от лица групп и каналов

При разработке ботов для групп учитывайте, что сообщения в группах могут приходить не только от лица пользователей, но
также:

- из привязанного к группе канала (с точки зрения API это пересланные сообщения);
- от лица группы от анонимных администраторов той же группы;
- от лица публичных каналов от премиум-пользователей.


### Примеры

Определение типа чата (например, чтобы хранить в базе данных):

::: tabs key:libraries
== aiogram
```python
@dp.message(F.chat.type == ChatType.GROUP | F.chat.type == ChatType.SUPERGROUP])
async def handle_group_message(message: Message):
    if message.sender_chat is None:
        print('Сообщение от пользователя')
    if message.sender_chat is not None and message.sender_chat.type == ChatType.SUPERGROUP:    
        print('Сообщение от супергруппы')
    elif message.sender_chat is not None and message.sender_chat.type == ChatType.CHANNEL:
        print('Сообщение от канала')

```
== Folds
```python
from folds import ThisSender
from telethon.tl.types import Chat, Channel, User

...

@bot.group_message()
async def handle_group_message(sender: ThisSender):
    if isinstance(sender, User):
        print('Сообщение от пользователя')
    if isinstance(sender, Channel) and sender.megagroup:
        print('Сообщение от супергруппы')
    if isinstance(sender, Channel) and not sender.megagroup:
        print('Сообщение от канала')
```
== Telethon
```python
from telethon.tl.types import Chat, Channel, User

...

@client.on(events.NewMessage(func=lambda e: e.is_group))
async def handle_group_message(event: Message):
    sender = await event.get_sender()
    if isinstance(sender, User):
        print('Сообщение от пользователя')
    if isinstance(sender, Channel) and sender.megagroup:
        print('Сообщение от супергруппы')
    if isinstance(sender, Channel) and not sender.megagroup:
        print('Сообщение от канала')
```
== Other libraries
<HelpNeeded/>
:::

Получение имени отправителя:

::: tabs key:libraries
== aiogram
```python
name = message.from_user.first_name if message.from_user else message.sender_chat.title 
```
== Folds & Telethon
```python
name = sender.first_name or sender.title  # одно из этих полей не None
```
== Other libraries
<HelpNeeded/>
:::

## Ссылки по теме

- [О privacy mode в документации к API](https://core.telegram.org/bots/features#privacy-mode)
