# Processing Payments Through Telegram Bots

Bots can receive payments from users with a built-in Telegram feature.

Payments are processed with a [provider](https://core.telegram.org/bots/payments#supported-payment-providers) like Stripe.
The providers work in different countries and have different requirements; 
your bot may use different providers depending on users.

![Example of a message with payment](https://core.telegram.org/file/464001393/101fc/SB_bFCLR0tg.130549/7ecf91aaa44737e8cb)

## User interface

You can try the payment interface in [the Demo Store channel](https://t.me/TestStore).

A bot can send invoice messages to any chats, even from [inline-mode](../interaction/inline). 
The first [button](../messages/buttons#inline) under the message must be a “Buy” button.

## Related links

- [Telegram docs. Payments](https://core.telegram.org/bots/payments)
