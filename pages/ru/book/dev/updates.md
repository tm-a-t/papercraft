# Что такое апдейты

Апдейты — это события, о которых серверы Телеграма сообщают вашей программе.
Это может быть апдейт о входящем сообщении, апдейт о вступлении участника в группу и так далее.

Дальше по книге мы будем постоянно использовать этот термин.

::: tabs key:libraries
== aiogram
Вот пример обработки апдейтов с входящими фотографиями:
```python
@dp.message(F.photo & (F.chat.type == ChatType.PRIVATE))
async def on_private_photo(message: Message):
    photo = message.photo[-1]  # highest resolution
    file_path = f"downloads/photo_{photo.file_id}.jpg"
    await bot.download(photo, file_path)
    await message.answer('Got your photo! Saved to ' + file_path)
```
== Folds
Вот пример обработки апдейтов с входящими фотографиями:
```python
@bot.private_message()
async def handle_photo(message: Message):
    if not message.photo: 
        return

    file_path = await message.download_media()
    return 'Got your photo! Saved to ' + file_path
```
== Telethon
Вот пример обработки апдейтов с входящими фотографиями:
```python
@client.on(events.NewMessage(incoming=True, func=lambda e: e.photo and e.is_private))
async def handle_photo(event: Message):
    file_path = await event.download_media()
    await event.respond('Got your photo! Saved to ' + file_path)
```
== Другие библиотеки
<HelpNeeded/>
:::

## Нужно сохранять всё { #limitations }

<mark>Апдейты — почти единственный способ для вашей программы узнать что-то о чатах и сообщениях.</mark>

Например, ваша программа не может спросить у Телеграма, каким было последнее
сообщение от пользователя или в каких чатах состоит бот. Телеграм даёт такую информацию только вместе с апдейтами:
например, когда пользователь присылает сообщение или бота добавляют в группу.

Если вам понадобится иметь список пользователей бота, полученных сообщений и так далее —
вам следует хранить эти данные. Скорее всего, для этого будет нужна база данных.

Если вы потеряете эту информацию, больше вы никак её не получите.

::: info NOTE
Некоторую информацию всё-таки можно запросить через Telegram API, а не через Bot API:
например, получить сообщение по его ID или информацию о пользователе.
Полный список есть [в таблице.](../appendix/api-comparison)
:::

## Получение апдейтов несколько раз { #receiving-updates-multiple-times }

Ограничения Bot API не позволяют получать одни и те же апдейты несколько раз. Если вы получили апдейт в Bot API, то
второй раз вы его уже не получите.

В Telegram API такого ограничения нет. Всё потому, что Telegram API в первую очередь сделан для приложений:
пользователь может пользоваться Телеграмом через несколько приложений, и каждое из них должно получать новые сообщения.
Для ботов это работает так же: если запустить несколько программ бота на Telegram API, каждая из них будет получать новые апдейты.

::: tip DEV TIP
Кроме того, в Telegram API есть способ получить старые апдейты.
Например, это может пригодиться, если список пользователей не сохранялся или база данных была потеряна.
[Документация.](https://core.telegram.org/api/updates#recovering-gaps)
:::
