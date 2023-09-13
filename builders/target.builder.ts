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

        const location = `src/clients/${client}/${site}/${id}`;
        const entryFilePath = path.resolve(__dirname, `../entry.js`);
        const testInfoFilePath = path.resolve(
          __dirname,
          "../" + location + "/common/test.info.ts"
        );

        const testInfo = require(testInfoFilePath);
        const target = testInfo.TestInfo.TARGET;
        const title = testInfo.TestInfo.TITLE;

        fse
          .ensureFile(entryFilePath)
          .then(() => {
            fs.writeFile(
              entryFilePath,
              this.getEntryContent(
                location,
                id,
                site,
                title,
                client,
                target,
                variation
              ),
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

        fse
          .ensureFile(testInfoFilePath)
          .then(() => {
            fs.writeFile(
              testInfoFilePath,
              this.getTestInfoContent(
                id,
                site,
                title,
                client,
                target,
                variation
              ),
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

  getEntryContent = (
    location: string,
    id: string,
    site: string,
    title: string,
    client: string,
    target: string,
    variation: string
  ): string => {
    const entryContentStr = `const {join} = require("path");const base = join(__dirname, "${location}");const testInfo={id:'${id}',site:'${site}',title:'${title}',client:'${client}',target:'${target}',variation:'${variation}'};module.exports={js:join(base,"index.ts"),css:join(base,"styles/main.scss"),testInfo: testInfo};module.exports.logActiveTestInfo=()=>{console.log("Running test info: ",JSON.stringify(testInfo))};`;
    return entryContentStr;
  };

  getTestInfoContent = (
    id: string,
    site: string,
    title: string,
    client: string,
    target: string,
    variation: string
  ): string => {
    return `export enum TestInfo {ID = '${id}', SITE = '${site}', TITLE = '${title}', CLIENT = '${client}', TARGET = '${target}', VARIATION = '${variation}'}`;
  };
}

const builder = new TargetBuilder();
const res = builder.build();
console.log(res);
