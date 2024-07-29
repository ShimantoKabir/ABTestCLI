import { Initializer } from "../../../../../utilities/initializer";
import {
  mBoxNames,
  maxLengthToShowModification,
  pathnames,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { LineService } from "../services/line.service";
import { PlanService } from "../services/plan.service";

export class MainComponent {
  location: string = "";
  isLineSectionFound: boolean = false;
  isPlanSectionFound: boolean = false;
  isMobileAddToCartButtonGoalAdded: boolean = false;
  isDesktopAddToCartButtonGoalAdded: boolean = false;
  mobileBreakPoint: number = 720;
  variation: string = TestInfo.VARIATION.toString();
  lineService: LineService = new LineService();
  planService: PlanService = new PlanService();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isLineSectionFound = false;
      this.isPlanSectionFound = false;
      this.isMobileAddToCartButtonGoalAdded = false;
      this.isDesktopAddToCartButtonGoalAdded = false;
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
        // console.log("target-length=", target.innerHTML.length);

        if (target.innerHTML && this.location === pathnames.plan) {
          this.addGoalForAddToCartButton(target);
        }

        if (
          target.innerHTML &&
          target.innerHTML.length > maxLengthToShowModification &&
          !this.isLineSectionFound &&
          !this.isPlanSectionFound &&
          this.location === pathnames.plan
        ) {
          window.innerWidth < this.mobileBreakPoint &&
            this.planService.showMobilePlan(() => {
              this.planService.addPlanButtonsListener(
                selectors.mobilePlanButtons
              );

              this.variation === "1" &&
                this.planService.clickNthMobilePlanButton(5);

              this.variation === "2" &&
                this.planService.clickNthMobilePlanButton(4);

              this.variation === "3" &&
                this.planService.clickNthMobilePlanButton(3);
            });

          this.variation === "1" &&
            window.innerWidth > this.mobileBreakPoint &&
            this.planService.clickNthDesktopPlanButton(3);

          this.variation === "2" &&
            window.innerWidth > this.mobileBreakPoint &&
            this.planService.clickNthDesktopPlanButton(2);

          this.variation === "3" &&
            window.innerWidth > this.mobileBreakPoint &&
            this.planService.clickNthDesktopPlanButton(1);

          this.lineService.addListener();

          window.innerWidth > this.mobileBreakPoint &&
            this.planService.addPlanButtonsListener(
              selectors.desktopPlanButtons
            );

          this.isLineSectionFound = true;
          this.isPlanSectionFound = true;
        }
      }
    };
    testObserver.observe(callback);
  };

  addGoalForAddToCartButton = (target: Element) => {
    const mobileAddToCartButton = target.querySelector(
      selectors.mobileAddToCartButton
    );

    // console.log("mobileAddToCartButton=", mobileAddToCartButton);

    const desktopAddToCartButton = target.querySelector(
      selectors.desktopAddToCartButton
    );

    // console.log("desktopAddToCartButton=", desktopAddToCartButton);

    if (mobileAddToCartButton && !this.isMobileAddToCartButtonGoalAdded) {
      mobileAddToCartButton.addEventListener("click", () => {
        triggerMetrics(mBoxNames.addToCartClick);
      });

      this.isMobileAddToCartButtonGoalAdded = true;
    }

    if (desktopAddToCartButton && !this.isDesktopAddToCartButtonGoalAdded) {
      desktopAddToCartButton.addEventListener("click", () => {
        triggerMetrics(mBoxNames.addToCartClick);
      });

      this.isDesktopAddToCartButtonGoalAdded = true;
    }
  };
}
