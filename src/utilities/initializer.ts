export class Initializer {
  static init = (
    testInfo: {
      ID: string;
      SITE: string;
      CLIENT: string;
      VARIATION: string;
    },
    version: string
  ): void => {
    document.documentElement.classList.add(testInfo.ID);
    document.documentElement.classList.add(
      `${testInfo.ID}-${testInfo.VARIATION}`
    );
    console.info(
      `ID: ${testInfo.ID}, VARIATION: ${testInfo.VARIATION}, VERSION: ${version} is running.....!`
    );
  };
}
