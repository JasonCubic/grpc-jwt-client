const jwt = require('jsonwebtoken');
const client = require('./client');

const jwtSecretKey = 'superSecretKeyW5MAIc6gBKvD7Pn9fLFWDnCulpSYeElw22mAkzwktwZ8gdzpAXx2xskSSLlAa6';

const requestData = { testKey: 'blah blah blah' };
const jwtToken = jwt.sign(requestData, jwtSecretKey);

client.testSomething({ payload: jwtToken }, (err, response) => {
  if (err) {
    console.log('err: ', err);
    return;
  }
  try {
    const responsePayload = jwt.verify(response.payload, jwtSecretKey);
    console.log('grpc response.payload:', responsePayload);
  } catch (error) {
    console.log('error: ', error);
  }
});
