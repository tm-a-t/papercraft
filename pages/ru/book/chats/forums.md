# Разработка Телеграм-бота для форумов

Форум — это особая группа, разделённая на несколько веток (тем, топиков).
Если ваш бот работает в группах, будет полезно убедиться, что он правильно обрабатывает форумы.

<br>

<figure>

![Форум](/pictures/ru/forum.png)

<figcaption>Темы форума показаны списком, а остальные чаты сжаты в узкую колонку.</figcaption>
</figure>

## С технической точки зрения

Форум — это группа с особым интерфейсом.
Вы даже можете открыть форум в классическом виде чата, используя меню форума в официальных приложениях.

Как темы устроены технически:
- Когда создается тема, появляется системное сообщение: "Создана тема".
- Все ответы на это сообщение попадают в тему.
- ID темы совпадает с ID системного сообщения.
- Общая тема (#general) — это место, куда попадают все остальные сообщения, и ее ID равен 1.

## Использование

Если ваш бот работает в группах, стоит продумать, как он будет вести себя в форуме.
Например, когда пользователь отправляет команду, бот должен отвечать в той же теме, иначе ответ появится в Общей теме.

[//]: # (todo: code for answering in the same topic)

::::: tabs key:libraries
== aiogram
```python
@dp.message()
async def handle_message(message: types.Message):
    if message.chat.type == ChatType.SUPERGROUP and message.message_thread_id:
        await message.answer('Это форум!')
    else:
        await message.answer('Это не форум')
```
== Folds
```python
@bot.group_message()
async def handle_group_message(message: Message, chat: ThisChat):
    if chat.forum:
        await message.reply('Это форум, поэтому я отвечаю на ваше сообщение')
    else:
        await message.respond('Это не форум, я просто пишу')
```
== Telethon
```python
@client.on(events.NewMessage())
async def handle_message(message: Message):
    chat = await message.get_chat()
    if chat.forum:
        await message.reply('Это форум, поэтому я отвечаю на ваше сообщение')
    else:
        await message.respond('Это не форум, я просто пишу')
```
== Other libraries
<HelpNeeded/>
:::::

## Управление ветками

Боты, как и пользователи, могут открывать, изменять и закрывать ветки.
В зависимости от настроек форума для этого может понадобиться специальное право админа.

[//]: # (todo: https://core.telegram.org/api/threads)
