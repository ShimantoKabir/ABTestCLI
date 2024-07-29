import { Initializer } from "../../../../../utilities/initializer";
import {
  mBoxNames,
  maxLengthToShowModification,
  pathnames,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { State } from "../common/state";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { AarpService } from "../services/aarp.service";
import { LineService } from "../services/line.service";
import { PlanService } from "../services/plan.service";

export class MainComponent {
  state: State = new State();
  location: string = "";
  lineService: LineService = new LineService(this.state);
  aarpService: AarpService = new AarpService(this.state);
  planService: PlanService = new PlanService(this.state);
  isLineSectionFound: boolean = false;
  isPlanSectionFound: boolean = false;
  isMobileAddToCartButtonGoalAdded: boolean = false;
  isDesktopAddToCartButtonGoalAdded: boolean = false;
  isComboPlanFound: boolean = false;
  mobileBreakPoint: number = 720;
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.6");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isLineSectionFound = false;
      this.isPlanSectionFound = false;
      this.isComboPlanFound = false;
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
          !this.isComboPlanFound &&
          !this.isPlanSectionFound &&
          this.location === pathnames.plan
        ) {
          window.innerWidth > this.mobileBreakPoint &&
            this.state.activeListener();

          this.lineService.addListener((line: number) => {
            triggerMetrics(mBoxNames.lineClick);
            this.state.selectedLine = line;
            setTimeout(() => {
              this.variation === "1" && this.planService.changePlanPrice(false);
            }, 50);
          });

          this.isLineSectionFound = true;

          window.innerWidth > this.mobileBreakPoint &&
            this.aarpService.addListener((isChecked: boolean) => {
              this.changePriceOnAarpClick(isChecked);
            }, selectors.desktopAarpCheckbox);

          window.innerWidth < this.mobileBreakPoint &&
            this.aarpService.addListener((isChecked: boolean) => {
              this.changePriceOnAarpClick(isChecked);
            }, selectors.mobileAarpCheckbox);

          this.isComboPlanFound = true;

          if (window.innerWidth < this.mobileBreakPoint) {
            this.planService.getMobilePlanElements();
          } else {
            if (this.variation === "1") {
              this.planService.getPlanElements(selectors.desktopPlans);
              this.planService.changeUnitText(
                selectors.desktopMonthlyChargeUnits
              );
            }

            this.planService.addPlanButtonsListener(
              selectors.desktopPlanButtons
            );
          }

          this.isPlanSectionFound = true;
        }
      }
    };
    testObserver.observe(callback);
  };

  changePriceOnAarpClick = (isChecked: boolean) => {
    this.state.isAarpChecked = isChecked;
    setTimeout(() => {
      this.variation === "1" && this.planService.changePlanPrice(true);
    }, 50);
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
