import { Initializer } from "../../../../../utilities/initializer";
import { leftHeadlineText, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    const headlineElm = document.querySelector(selectors.leftHeadlineSelector);

    if (headlineElm) {
      headlineElm.innerHTML = leftHeadlineText;
    }
  };
}
