# Авторизация на сайте через Telegram Login Widget

Вы можете добавить на свой сайт кнопку «Войти через Telegram».

В процессе авторизации будет использоваться ваш бот. Можно настроить авторизацию так, что, авторизуясь, пользователи
будут разрешать боту отправлять сообщения в личном чате.

В качестве альтернативы Telegram Login Widget можете рассмотреть [Login URL button](../messages/buttons): это способ 
авторизоваться на сайте из Телеграм-чата.

## Как проходит авторизация

Шаги с точки зрения пользователя следующие:

1. Пользователь сайта нажимает на кнопку «Войти через Telegram» и вводит номер телефона.
2. Приложение Telegram просит подтвердить вход.
3. Пользователь подтверждает вход, нажимает «Принять» и попадает на сайт.

![скриншот входа](https://core.telegram.org/file/811140314/17c1/xf4ULBL5tmE.58438/07ff5b2958ed0e7e36)

## Как получить данные авторизации

Когда пользователь подтверждает вход, виджет перенаправляет его на URL входа с ID пользователя, именем и другие данными в GET-параметрах (либо вызывает Джаваскрипт-функцию).

Чтобы проверить, что эти данные пришли от Телеграма, используйте параметр hash. Процесс хеширования описан в документации к Login Widget, но вот пример проверки для Питона:

```python
from dataclasses import dataclass

from loguru import logger

@dataclass
class TelegramLoginData:
    id: int
    auth_date: int
    first_name: str
    hash: str
    last_name: str | None
    username: str | None
    photo_url: str | None

def verify_telegram_login_hash(data: TelegramLoginData, token: str) -> bool:
    """
    Verify the Telegram login data by hash.
    """

    import hashlib
    import hmac

    data_check_string = "\n".join(
        f"{k}={v}" for k, v in sorted(data.__dict__.items()) if k != "hash" and v is not None
    )
    secret_key = hashlib.sha256(token.encode()).digest()
    hmac_hash = hmac.new(secret_key, data_check_string.encode(), hashlib.sha256).hexdigest()

    return hmac.compare_digest(hmac_hash, data.hash)
```

## Ссылки по теме

- [Страница Login Widget на сайте Телеграма](https://core.telegram.org/widgets/login)
