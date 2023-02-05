const cohere = require('cohere-ai');
var express = require('express');
var fs = require('fs');
var url = require('url');
var bodyparser = require("body-parser")
fs.readFile('./secret.json', 'utf-8', (err, read)=>{cohere.init(JSON.parse(read).cohereAuth);});
var jsonparse = bodyparser.json();
var bodyparse = bodyparser.urlencoded({extended: false});
var app = express();
app.set('view engine', 'ejs');
//const inRef = useRef(null);
app.get('/sentiment', function(req,res){
	//const inputs = ["this is me"];
	//const examples = [{"text": "this is an example", "label": "neutral"}, {"text": "I hate myself", "label": "self deprivating"}, {"text": "wtf is going on", "label": "self deprivating"}, {"text": "yessir", "label": "neutral"}];
	var p = url.parse(req.url, true).query;
	var curl = p.input;
		//console.log(curl);
	fs.readFile('./examplesless.json', 'utf-8', (err, examples) =>{
		//console.log(JSON.parse(examples)[29]);
		cohere.classify({
			model: 'large',
			inputs: [curl],
			examples: JSON.parse(examples),
			}).then((data) => (res.status(200).send(data)))})
})
app.post('/sentimentpost', bodyparse,function(req,res){
	//const examples = [{"text": "this is an example", "label": "neutral"}, {"text": "I hate myself", "label": "self deprivating"}, {"text": "wtf is going on", "label": "self deprivating"}, {"text": "yessir", "label": "neutral"}];
	console.log(req.body['input']);
	fs.readFile('./examplesless.json', 'utf-8', (err, examples) =>{
		//console.log(JSON.parse(examples)[29]);
		cohere.classify({
			model: '60e26399-f5ee-4afd-8211-93046db90dc2-ft',
			inputs: [JSON.stringify(req.body['input'])],
			examples: JSON.parse(examples),
			}).then((data) => (res.status(200).send(data)))})
})
var server = app.listen(8008, function(){
	console.log(server.address());
});