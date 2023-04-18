import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const newsletter = document.querySelector(selectors.newsletter);
    const newsletterCloned = newsletter?.cloneNode(true);
    newsletter?.remove();

    document
      .querySelector(selectors.activeSection)
      ?.insertAdjacentElement("afterend", newsletterCloned as Element);
  };
}
