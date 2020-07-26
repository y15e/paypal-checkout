const paypal = require('@paypal/checkout-server-sdk');
const payPalClient = require('./paypal-client');
const orderParameter = require('./order');

exports.handler = async (event) => {
  
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody(orderParameter);

  let order;
  try {
    order = await payPalClient.client().execute(request);
  } catch (err) {
    console.error(err);
    //return res.send(500);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      orderID: order.result.id
    }),
  };
  
  return response;
};
