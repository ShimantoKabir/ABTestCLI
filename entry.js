const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/f5/F5006");const testInfo={id:'F5006',site:'f5',client:'brainlab',target:'https://www.f5.com/company/events/webinars/api-discovery-inventory-and-security-webinar',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};