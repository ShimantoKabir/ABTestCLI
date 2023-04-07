import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    selectors.hiddenSelectors.forEach((selector) => {
      document.querySelector(selector)?.classList.add(TestInfo.ID + "__hide");
    });
  };
}
