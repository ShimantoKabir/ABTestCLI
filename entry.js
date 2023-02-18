const { join } = require("path");
const base = join(__dirname, "src/brainlab/f5/BL001");
module.exports = {
  js: join(base, "main.ts"),
  css: join(base, "styles/main.scss"),
};
module.exports.getRunningTestInfo = () => {
  console.log(
    "Running test info: ",
    JSON.stringify({
      id: "BL001",
      site: "f5",
      client: "brainlab",
      variation: "1",
    })
  );
};
