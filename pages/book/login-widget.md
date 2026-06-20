# How to Add Log In with Telegram to Your Site

Use “Log in with Telegram” when your site or app should authenticate users through their Telegram account.
Telegram now supports a newer login flow based on OpenID Connect, including Authorization Code Flow with PKCE.

Ask only for the access you need:
users can authorize in a few taps, optionally share their verified phone number, and optionally allow your bot to send
them direct messages.

To use it, register allowed URLs in the [@BotFather](https://t.me/BotFather) Mini App and store the client ID and client
secret securely.

An alternative to Log In with Telegram is [Login URL button,](buttons) a way to authorize on a site from the Telegram app.

::: info Legacy widget
The older iframe-based JavaScript widget still exists in archived documentation.
The current Telegram Login documentation recommends the newer Telegram Login library, native SDKs, or standard OIDC integration.
:::

## Show users a short login flow

From the user perspective, the steps are the following:

1. The user clicks “Log in with Telegram” and enters their phone number.
2. Telegram app asks to confirm.
3. The user chooses “Accept” and logs in.

![Screenshot](https://core.telegram.org/file/811140314/17c1/xf4ULBL5tmE.58438/07ff5b2958ed0e7e36)

## Validate authorization on your server

In the current OIDC-based flow, your server validates the ID token:

- Verify the JWT signature using Telegram's public keys.
- Check that the issuer is Telegram.
- Check that the audience matches your bot's client ID.
- Check expiration and any nonce/state value you generated.

Telegram currently returns requested user information in the ID token and does not provide a separate UserInfo endpoint.

## Use Gateway only for phone verification

If you only need to verify a user's phone number, Telegram Gateway is a separate developer feature for sending
verification codes through Telegram at a lower cost than SMS in many cases.
Do not treat it as account login: it verifies a phone number, not a Telegram identity for your app.

## Keep legacy hash validation for old widgets

In the legacy widget flow, the widget redirects to the authorization URL, passing the user’s ID, name, and other data as
GET parameters (or, alternatively, calls a JavaScript function).

To make sure that the parameters came from Telegram, you should check the hash parameter. The encryption logic is described in the Telegram docs, but here is a Python example:

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

- [Telegram docs. Log In With Telegram](https://core.telegram.org/bots/telegram-login)
- [Telegram docs. Telegram Gateway](https://core.telegram.org/gateway)
- [Telegram docs. Legacy Login Widget](https://core.telegram.org/widgets/login)
