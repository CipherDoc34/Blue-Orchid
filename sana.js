const cohere = require('cohere-ai');
var express = require('express');
var fs = require('fs');
cohere.init('x1ADgcbwcLpA3DQmP9iNhCogNIZz3w5qZr6EdPBi');

var app = express();

app.get('/sentiment', function(req,res){
	const inputs = ["this is me"];
	const examples = [{"text": "this is an example", "label": "neutral"}, {"text": "I hate myself", "label": "self deprivating"}, {"text": "wtf is going on", "label": "self deprivating"}, {"text": "yessir", "label": "neutral"}];
	res.status(200).send("OK");
	sentimentGen(inputs, examples);
})

async function sentimentGen(input,examples){
	let data = await cohere.classify({
		model: 'large',
		inputs: input,
		examples: examples,
});
console.log(data.body.classifications);
}
var server = app.listen(8008, function(){
	console.log(server.address());
});