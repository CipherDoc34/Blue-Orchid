const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const { json } = require('body-parser');
const fs = require('fs');
const request = require('request');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
app.post('/sms', urlencodedParser, (req, res) => {
    console.log(req.body['Body']);
    request.post("http://6.tcp.ngrok.io:16417/sentimentpost", {"form": {"input": req.body['Body']}}, (err, CohereRepsonse, body)=>{
    //fs.readFile('./responses.json', (responses)=>{
        //const twiml = new MessagingResponse();
        //twiml.message('This is some message from 18:39');
        //res.writeHead(200, {'Content-Type': 'text/xml'});
        //res.end(twiml.toString());
        
    //})
    res.end(body);
}
    )
});

http.createServer(app).listen(1337, () => {

    console.log('listening on port 1337!');

});
