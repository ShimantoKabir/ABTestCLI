const {join} = require("path");const base = join(__dirname, "src/clients/brainlab/consumercellular/CC001");const testInfo={id:'CC001',site:'consumercellular',client:'brainlab',variation:'1'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};