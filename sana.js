const cohere = require('cohere-ai');
var express = require('express');
var fs = require('fs');
var url = require('url');
fs.readFile('./secret.json', 'utf-8', (err, read)=>{cohere.init(JSON.parse(read).cohereAuth);});

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
app.post('/sentimentpost', function(req,res){
	const examples = [{"text": "this is an example", "label": "neutral"}, {"text": "I hate myself", "label": "self deprivating"}, {"text": "wtf is going on", "label": "self deprivating"}, {"text": "yessir", "label": "neutral"}];
	//console.log(req.headers.input);
	cohere.classify({
		model: 'large',
		inputs: [JSON.stringify(req.headers.input)],
		examples: examples,
		}).then((data) => (res.status(200).send(data)));
})
var server = app.listen(8008, function(){
	console.log(server.address());
});