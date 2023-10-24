import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerTestIds } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { AdobeTarget } from "../common/trigger";

export class MainComponent {
  isTriggered: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.2");
  }

  init = (): void => {
    const applyCtas: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.applyCta);

    applyCtas &&
      applyCtas.length !== 0 &&
      applyCtas.forEach((applyCta: HTMLAnchorElement, index: number) => {
        applyCta.addEventListener("click", () => {
          if (!this.isTriggered) {
            AdobeTarget.trigger(triggerTestIds.BLTEST012);
            this.isTriggered = true;
          }
        });
      });
  };
}
