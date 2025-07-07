# Telegram Login Widget

Your site may feature a "Log in with Telegram" button which must be linked to your bot.
The button may be configured in such way that authorizing users will see an "Allow the bot contact me" check box.

An alternative to Telegram Login Widget is [Login URL button,](../messages/buttons) a way to authorize on a site from the Telegram app.

## User steps

1. The user clicks "Log in with Telegram" and enters their phone number.
2. Telegram app asks to confirm.
3. The user chooses "Accept" and logs in.

![Screenshot](https://core.telegram.org/file/811140314/17c1/xf4ULBL5tmE.58438/07ff5b2958ed0e7e36)

## Example code to verify the token
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

## Related links

- [Telegram docs. Login Widget](https://core.telegram.org/widgets/login)
