# Управление наборами стикеров и эмодзи через Телеграм-бота

Боты — и только боты — могут создавать наборы стикеров и кастомных эмодзи.
При этом каждый набор должен принадлежать какому-то пользователю.

Обычно пользователи Телеграма создают наборы и управляют ими через бота [@Stickers](https://t.me/stickers),
но для этого можно использовать и других ботов.

Боты могут создавать, переименовывать, редактировать и удалять наборы.

::: info Эмодзи
Использовать кастомные эмодзи могут только премиум-пользователи. Тем не менее создавать наборы кастомных эмодзи могут
любые боты, и они могут принадлежать любым пользователям.
:::

## Форматы

Наборы стикеров и эмодзи могут быть статичными (PNG или WEBP), 
анимированными (на основе формата Lottie) и в формате видео (webm). 
Помимо этого, набор одноцветных эмодзи может быть адаптивным: это значит, что у пользователей с тёмной темой
эмодзи будут выглядеть светлыми, а у пользователей со светлой — тёмными.

## Ссылки по теме

- [Стикеры и эмодзи: требования и ограничения](https://core.telegram.org/stickers)
- [О стикерах в документации API](https://core.telegram.org/bots/features#stickers-and-custom-emoji)
