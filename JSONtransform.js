const { json } = require("express");
const fs = require("fs");
let JSONData = [];
fs.readFile('./intents.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    JSON.parse(jsonString).forEach(element => {
        element.responses.forEach(i =>{
            let a = {};
             a['text'] = i;
             a['label'] = element.tag;
             JSONData.push({'text':i, 'label': element.tag});
        });
        
    });
    fs.writeFileSync('./responses.json', JSON.stringify(JSONData));
});
fs.readFile('./intents.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    JSON.parse(jsonString).forEach(element => {
        element.patterns.forEach(i =>{
            let a = {};
             a['text'] = i;
             a['label'] = element.tag;
             JSONData.push({'text':i, 'label': element.tag});
        });
        
    });
    fs.writeFileSync('./inputs.json', JSON.stringify(JSONData));
});
