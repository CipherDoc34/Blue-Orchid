const fs = require("fs");
const authTokens = fs.readFileSync("./secret.json");
const accountSid = JSON.parse(authTokens).twilioAccountSID;
const authToken = JSON.parse(authTokens).twilioAuthToken;

///////////////////////////////////////////////////////////////
// const client = require('twilio')(accountSid, authToken);

// client.messages.create({
//     to: '+16474584963', // Text this number
//     from: '+12898142583', // From a valid Twilio number
//     body: 'Hello from Blue Orchid',
//   })
//   .then((message) => console.log(message.sid));
//////////////////////////////////////////////////////////////

