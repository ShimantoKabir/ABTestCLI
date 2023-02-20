const { join } = require("path");
const base = join(__dirname, "src/clients/brainlab/baliblinds/BL027");
module.exports = {
  js: join(base, "index.ts"),
  css: join(base, "styles/main.scss"),
};
module.exports.getRunningTestInfo = () => {
  console.log(
    "Running test info: ",
    JSON.stringify({
      id: "BL027",
      site: "baliblinds",
      client: "brainlab",
      variation: "1",
    })
  );
};
