import { Initializer } from "../../../../../utilities/initializer";
import {
  mboxNames,
  pathnames,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  location: string = "";
  isViewDetailsButtonFound: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  addListenerToViewDetails = () => {
    const viewDetailButtons: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.viewDetails);

    if (!viewDetailButtons || viewDetailButtons.length === 0) {
      return;
    }

    viewDetailButtons.forEach((button: HTMLAnchorElement) => {
      button.addEventListener("click", () => {
        triggerMetrics(mboxNames.viewDetailsClick);
      });
    });
  };

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;

      this.location === pathnames.device &&
        triggerMetrics(mboxNames.devicePageVisit);
      this.location === pathnames.checkout &&
        triggerMetrics(mboxNames.checkoutPageVisit);
      this.location === pathnames.thankyou &&
        triggerMetrics(mboxNames.thankYouPageVisit);

      this.isViewDetailsButtonFound = false;
    });

    const testObserver = new TestObserver("body");

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        const viewDetailButton = target.querySelector(selectors.viewDetails);

        if (target && viewDetailButton && !this.isViewDetailsButtonFound) {
          this.addListenerToViewDetails();
          this.isViewDetailsButtonFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };
}
