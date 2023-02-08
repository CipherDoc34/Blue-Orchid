const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const { json } = require('body-parser');
const fs = require('fs');
const request = require('request');
const Understand = require('twilio/lib/rest/preview/Understand');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();
app.post('/', urlencodedParser, (req, res) => {
    const twiml = new MessagingResponse();
    console.log(req.body['Body']);
    request.post("http://8.tcp.ngrok.io:10526/sentimentpost", {"form": {"input": req.body['Body']}}, (err, CohereRepsonse, body)=>{
        predictionResult = JSON.parse(body).body.classifications[0].prediction;
        console.log("Prediction: ", predictionResult);
        const resp = fs.readFileSync('./responsesindexlist.json');
            let allresp = JSON.parse(resp);
            var respindex = allresp.index[predictionResult];
            var chosenResponse;
            //console.log(allresp.responses[26]['suicide']);
            if (respindex != null){
            var arrayLength = allresp.responses[respindex][predictionResult].length;
            var chosenIndex = getRandomInt(arrayLength);
            chosenResponse = allresp.responses[respindex][predictionResult][chosenIndex];

}else{chosenResponse = "Sorry I can't help with thris right now, my training data is still very small";}
            //allresp.index.array.forEach(element => {
            twiml.message(chosenResponse);
            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        //})
    //console.log(predictionResult);
    console.log("Response: ",chosenResponse);
    //res.end(chosenResponse);
}
    )
});

http.createServer(app).listen(1337, () => {

    console.log('listening on port 1337!');

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  