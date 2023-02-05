const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+16474584963', // Text this number
    from: '+12898142583', // From a valid Twilio number
    body: 'Hello from Blue Orchid',
  })
  .then((message) => console.log(message.sid));


