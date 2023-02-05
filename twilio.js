const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: '+16474584963', // Text this number
    from: '+12898142583', // From a valid Twilio number
    body: 'Hello from Blue Orchid',
  })
  .then((message) => console.log(message.sid));


//   const accountSid = 'AC0ef164de321e13f9e94f299b9206a1a3'; 
//   const authToken = 'bb51242a4489a4e47634b2c22631ea39]'; 
//   const client = require('twilio')(accountSid, authToken); 
   
//   client.messages 
//         .create({ 
//            body: 'First message from blue orchid!',  
//            messagingServiceSid: 'MGbffd7717ba38782aeb62691253c98b80',      
//            to: '+16474584963' 
//          }) 
//         .then(message => console.log(message.sid)) 
//         .done();



