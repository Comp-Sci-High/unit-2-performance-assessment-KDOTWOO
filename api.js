const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
let APIurl="https://openapi-test01.sheincorp.cn/open-api/openapi-business-backend/product";
let input2=prompt("Brokie what you want:");
async function isEditable() {
    const options = {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + apiKey,
            "Content-Type": 'application/json'

        },
        body: JSON.stringify({
            pageNum: 1,
            pageSize: 50,
            input:input2

        })
    };
    const response = await fetch(APIurl, options);

    const data = await response.json();
    console.log(info.data[2]);
    return data;
};