import { Initializer } from "../../../../../utilities/initializer";
import { SignalComponent } from "./signal.component";
import { mBoxNames, pathnames, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  location: string = "";
  mobileBreakPoint: number = 720;
  variation: string = TestInfo.VARIATION.toString();
  isRiskFreeSectionFound: boolean = false;
  signalComponent: SignalComponent = new SignalComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isRiskFreeSectionFound = false;
      this.location === pathnames.plan &&
        triggerMetrics(mBoxNames.planPageVisit);
      this.location === pathnames.checkout &&
        triggerMetrics(mBoxNames.checkoutPageVisit);
      this.location === pathnames.thankyou &&
        triggerMetrics(mBoxNames.thankYouPageVisit);
    });

    const testObserver = new TestObserver("body");

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        const isFound = target.innerHTML.includes(`class="risk-free"`);
        if (!this.isRiskFreeSectionFound && isFound) {
          this.signalComponent.render(() => {
            this.isRiskFreeSectionFound = true;
          });
        }
      }
    };
    testObserver.observe(callback);
  };
}
