const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/graberblinds/GB001");const testInfo={id:'GB001',site:'graberblinds',client:'brainlab',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};