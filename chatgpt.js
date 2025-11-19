const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc
let AIUrl = "https://api.openai.com/v1/responses";
let input1 = prompt("What you need Bro ");
async function basicText() {
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            "Content-Type": 'application/json'

        },
        body: JSON.stringify({
            model: "gpt-4.1",
            input: input1
        })
    };
    const response = await fetch(AIUrl, options);

    const data = await response.json();
    console.log(data.output[0].content[0].text);
    return data;
};
basicText()