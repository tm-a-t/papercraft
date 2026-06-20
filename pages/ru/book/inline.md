# Как реализовать инлайн-режим в боте

Инлайн-режим (inline mode) — это возможность отправлять сообщения «через бота». Если бот поддерживает инлайн-режим,
пользователь может обратиться к боту в любом чате, чтобы отправить сообщение, сгенерированное ботом. Инлайн-режим
работает даже в чатах, где нет этого бота.

Например, таким образом с помощью бота пользователь может найти видео или музыку и сразу отправить в чат.

Чтобы запустить инлайн-режим, пользователь вводит в чате юзернейм бота и пробел. Если
требуется, после юзернейма он может добавить текстовый запрос: текст до 256 символов.
Появляется меню результатов. Пользователь выбирает результат и таким образом отправляет сообщение.

<video controls loop muted preload="auto">
<source src="/pictures/ru/inline.webm" type="video/mp4">
</video>

Вот простой пример реализации — два текстовых результата:

::: tabs key:libraries
== aiogram
```python
@dp.inline_query()
async def handle_inline(query: InlineQuery):
    input_text = query.query
    
    result1 = InlineQueryResultArticle(
        id='1',
        title='Option 1',
        description='This is the first option',
        input_message_content=InputTextMessageContent(
            message_text='If chosen, this text will be sent'
        )
    )
    result2 = InlineQueryResultArticle(
        id='2',
        title='Option 2',
        description='This is the second option',
        input_message_content=InputTextMessageContent(
            message_text='If the second option is chosen, this text will be sent'
        )
    )
    await query.answer(results=[result1, result2], cache_time=1)

```
== Folds
```python
@bot.inline_query()
async def handle_inline(query: InlineQuery):
    input_text = query.text
    
    result1 = query.builder.article(
        title='Option 1',
        description='This is the first option',
        text='If chosen, this text will be sent',
    )
    result2 = query.builder.article(
        title='Option 2',
        description='This is the second option',
        text='If the second option is chosen, this text will be sent',
    )
    await query.answer([result1, result2])
```
== Telethon
```python
@client.on(events.InlineQuery())
async def handle_inline(event):
    input_text = event.text

    result1 = event.builder.article(
        title='Option 1',
        description='This is the first option',
        text='If chosen, this text will be sent',
    )
    result2 = event.builder.article(
        title='Option 2',
        description='This is the second option',
        text='If the second option is chosen, this text will be sent',
    )
    await event.answer([result1, result2])
```
== Other libraries
<HelpNeeded/>
:::

Инлайн-режим можно включить в BotFather; там же можно задать плейсхолдер вместо стандартного «Search...»

В группе админы могут запретить использовать инлайн всем или некоторым участникам. В официальных приложениях Телеграма это
ограничение объединено с ограничением на отправку стикеров и GIF.

## Отображение результатов

Результаты можно отображать вертикальным списком (удобно для выдачи текста) или сеткой (удобно для выдачи картинок).

![Списком](/pictures/ru/inline-type-2.png)

![Сеткой](/pictures/ru/inline-type-1.png)

Можно показать вместе результаты двух видов, но, кажется, такой вариант отображается корректно только на Telegram
Desktop.
Остальные приложения покажут такие результаты одним списком.

::: details Скриншот результатов двух видов на Telegram Desktop
![Совмещение двух видов](/pictures/ru/inline-both-types.png){style="max-width: 400px"}
:::

## Inline feedback

Inline feedback — это апдейты о том, что юзер выбрал инлайн-результат и отправил сообщение. Чтобы получать эти
апдейты, вы должны включить inline feedback в BotFather.

Inline feedback предназначается для сбора статистики; но разработчики ботов часто используют его для того, чтобы
отредактировать сообщение после отправки. Это полезно, когда нужно подгружать не все результаты сразу, а только
выбранный. Например, если бот используется для поиска музыки, то он может не загружать сразу все песни во время поиска,
а [добавить песню в сообщение](sending#edit-media) только после отправки.

Важный момент: если вы получили апдейт об отправке инлайн-сообщения, то вы можете его редактировать, только если к нему
прикреплены инлайн-кнопки. (Если кнопок нет, то в апдейте не указывается ID инлайн-сообщения, так что вы не сможете его
отредактировать.)

![Настройка в BotFather. Можно выбрать процент приходящих апдейтов](/pictures/ru/inline-feedback.png)

## Ссылки по теме

- [Об инлайн-запросах на сайте Телеграма](https://core.telegram.org/bots/features#inline-requests)
