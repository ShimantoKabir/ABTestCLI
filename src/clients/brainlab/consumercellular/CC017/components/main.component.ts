import { Initializer } from "../../../../../utilities/initializer";
import { mBoxNames, pathnames, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { DesktopSignalComponent } from "./desktop-signal.component";
import { MobileSignalComponent } from "./mobile-signal.component";

export class MainComponent {
  location: string = "";
  variation: string = TestInfo.VARIATION.toString();
  isComboPlanDivisionFound: boolean = false;
  isAarpDivisionFound: boolean = false;
  desktopSignalComponent: DesktopSignalComponent = new DesktopSignalComponent();
  mobileSignalComponent: MobileSignalComponent = new MobileSignalComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;

      this.isComboPlanDivisionFound = false;
      this.isAarpDivisionFound = false;

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

        const isComboPlanClassFound =
          target.innerHTML.includes(`class="combo-plans"`);
        if (!this.isComboPlanDivisionFound && isComboPlanClassFound) {
          this.desktopSignalComponent.render((isRendered: boolean) => {
            this.isComboPlanDivisionFound = isRendered;
          });
        }

        const isAarpClassFound = target.innerHTML.includes(`class="aarp-info"`);
        if (!this.isAarpDivisionFound && isAarpClassFound) {
          this.mobileSignalComponent.render((isRendered: boolean) => {
            this.isAarpDivisionFound = isRendered;
          });
        }
      }
    };
    testObserver.observe(callback);
  };
}
