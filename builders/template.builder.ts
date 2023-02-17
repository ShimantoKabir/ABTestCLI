import prompt, { RevalidatorSchema } from "prompt";
import path from "path";
import fse from "fs-extra";
import fs from "fs";

class TemplateBuilder {
  build = (): void => {
    prompt.start();
    prompt.get(["id", "site", "client", "variation"], (error, result) => {
      if (error) {
        this.onError(error);
        return 1;
      }

      const { id, site, client, variation } = result;

      const dir = path.resolve(__dirname, `../src/${client}/${site}/${id}/`);

      fse
        .ensureDir(dir)
        .then(() => fse.pathExists(`${dir}`))
        .then((exists) => {
          if (!exists) return;
          return fse.copy("./template/", dir);
        })
        .then((exists) => {
          fs.writeFile(
            `${dir}/common/test.info.ts`,
            this.getTestInfo(id, site, client, variation),
            (err) => {
              if (err) {
                if (err) this.onError(err);
              }
            }
          );
        })
        .then(() => {
          fs.writeFile(`${dir}/styles/common.scss`, `$id: '${id}';`, (err) => {
            if (err) this.onError(err);
          });
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  onError = (err: any): void => {
    console.error("ERROR", err);
  };

  getTestInfo = (
    id: string | RevalidatorSchema,
    site: string | RevalidatorSchema,
    client: string | RevalidatorSchema,
    variation: string | RevalidatorSchema
  ): string => {
    const testInfoStr = `export enum TestInfo {ID = '${id}', SITE = '${site}', CLIENT = '${client}', VARIATION = '${variation}'}
    `;
    return testInfoStr;
  };
}

const builder = new TemplateBuilder();
builder.build();
