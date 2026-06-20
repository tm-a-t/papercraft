# How to Accept Payments and Telegram Stars in Bots

Use Telegram payments when the purchase starts inside Telegram and should be completed without sending the user to a separate checkout page.

Payments are processed with a [provider](https://core.telegram.org/bots/payments#supported-payment-providers) like Stripe.
The providers work in different countries and have different requirements; 
your bot may use different providers depending on users.

For digital goods and services, bots and Mini Apps must use Telegram Stars by specifying `XTR` as the currency.
This restriction exists because of third-party store policies.
Use ordinary payment providers for supported physical goods and services.

![Example of a message with payment](https://core.telegram.org/file/464001393/101fc/SB_bFCLR0tg.130549/7ecf91aaa44737e8cb)

## Show the invoice in Telegram

You can try the payment interface in [the Demo Store channel](https://t.me/TestStore).

Send an invoice message when the user is ready to buy.
Invoices can appear in any chat, even from [inline-mode](../interaction/inline).
The first [button](../messages/buttons#inline) under the message must be a “Buy” button.

## Use Stars for digital goods

Telegram Stars are used across many bot and creator features:

- Digital goods and services in bots and Mini Apps.
- Paid media and paid messages.
- Bot and Mini App subscriptions.
- Gifts and Premium gifts.
- Suggested posts in channels.
- Affiliate programs for Mini Apps.

Stars may have special rules around refunds and withdrawals.
For example, some Star balances become available for withdrawal only after a waiting period.
If your bot handles paid content, design around refunds, failed payments, and delayed settlement.

## Related links

- [Telegram docs. Payments](https://core.telegram.org/bots/payments)
- [Telegram docs. Payments in Bot Features](https://core.telegram.org/bots/features#payments)
