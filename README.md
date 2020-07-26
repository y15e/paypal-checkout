# PayPal Checkout Example

URL: https://paypal.y15e.io/checkout.html

This example application is deployed on AWS Lambda for server-side and S3 for client-side.

![paypal y15e io_checkout html](https://user-images.githubusercontent.com/27120451/88483731-ca123b00-cfa4-11ea-888f-3657aeae32a8.png)

## Server-side

- server/create-paypal-transaction.js
- server/order.json
- server/paypal-client.js


## Client-side

- client/checkout.html
- client/complete.html

## Environment Variables

The following credentials are stored in Lambda environment variables.

- PAYPAL_CLIENT_ID
- PAYPAL_CLIENT_SECRET

## How to deploy code changes
```
$ npm run upload
```
