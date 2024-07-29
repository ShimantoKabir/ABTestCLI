import { Initializer } from "../../../../../utilities/initializer";
import { selectors, telInfo } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { DisclaimerComponent } from "./disclaimer.component";
import { MessageComponent } from "./message.component";

export class MainComponent {
  isBodyContentFound: boolean = false;
  isBlueBarFound: boolean = false;
  isTradeInPromptFound: boolean = false;
  disclaimerComponent: DisclaimerComponent = new DisclaimerComponent();
  messageComponent: MessageComponent = new MessageComponent();

  constructor() {
    Initializer.init(TestInfo, "0.1.7");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.isBodyContentFound = false;
      this.isBlueBarFound = false;
      this.isTradeInPromptFound = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const bodyContent: null | HTMLDivElement = document.querySelector(
          selectors.bodyContent
        );

        if (
          bodyContent &&
          !this.isBodyContentFound &&
          this.isPathNameApplicable()
        ) {
          this.disclaimerComponent.render(bodyContent);
          this.isBodyContentFound = true;
        }

        const blueBar: null | HTMLHRElement = document.querySelector(
          selectors.blueBar
        );

        if (blueBar && !this.isBlueBarFound && this.isPathNameApplicable()) {
          this.messageComponent.render(blueBar, telInfo.byod);
          this.isBlueBarFound = true;
        }

        const tradeInPrompt: null | HTMLHRElement = document.querySelector(
          selectors.tradeInPrompt
        );

        if (
          tradeInPrompt &&
          !this.isTradeInPromptFound &&
          this.isPathNameApplicable()
        ) {
          this.messageComponent.render(tradeInPrompt, telInfo.plp);
          this.isTradeInPromptFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  isPathNameApplicable = (): boolean => {
    return window.location.pathname === "/shopping/choose/device" ||
      window.location.pathname === "/shopping/details/sim/details"
      ? true
      : false;
  };
}
