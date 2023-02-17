import path from "path";
import fs from "fs";
import fse from "fs-extra";

class TargetBuilder {
  build = (): string => {
    try {
      const commandValue = process.argv;
      let msg = "App is ready for server!";

      if (commandValue.length !== 6) {
        return "Parameter missing!";
      }

      const id = commandValue[2].split("=")[1];
      const site = commandValue[3].split("=")[1];
      const client = commandValue[4].split("=")[1];
      const variation = commandValue[5].split("=")[1];

      if (id && site && client && variation) {
        console.log(
          `id:${id}, site:${site}, client:${client}, variation:${variation}`
        );

        const location = `src/${client}/${site}/${id}`;
        const entryFilePath = path.resolve(__dirname, `../entry.js`);

        fse
          .ensureFile(entryFilePath)
          .then(() => {
            fs.writeFile(
              entryFilePath,
              this.getEntryContent(location),
              (err) => {
                if (err) {
                  console.log("ERROR=", err);
                  return "Something went wrong...!";
                }
              }
            );
          })
          .catch((err) => {
            console.log("ERROR=", err);
            return "Something went wrong...!";
          });
      } else {
        return "Parameter missing!";
      }

      return msg;
    } catch (err) {
      console.log("ERROR=", err);
      return "Something went wrong...!";
    }
  };

  getEntryContent = (location: string): string => {
    const entryContentStr = `const {join} = require("path");const base = join(__dirname, "${location}");module.exports={js:join(base,"main.ts"),css:join(base,"styles/main.scss")};`;
    return entryContentStr;
  };
}

const builder = new TargetBuilder();
const res = builder.build();
console.log(res);
