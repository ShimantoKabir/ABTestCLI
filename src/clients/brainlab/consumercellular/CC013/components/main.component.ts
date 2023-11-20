import { Initializer } from "../../../../../utilities/initializer";
import {
  mBoxNames,
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
      this.location === pathnames.plan &&
        triggerMetrics(mBoxNames.planPageVisit);
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        console.log("target-length=", target.innerHTML.length);

        if (
          target.innerHTML.length > 206000 &&
          !this.isLineSectionFound &&
          !this.isComboPlanFound &&
          !this.isPlanSectionFound &&
          this.location === pathnames.plan
        ) {
          window.innerWidth > this.mobileBreakPoint &&
            this.state.activeListener();

          this.lineService.addListener((line: number) => {
            this.state.selectedLine = line;
            triggerMetrics(mBoxNames.lineClick);
            setTimeout(() => {
              this.variation === "1" && this.planService.changePlanPrice(false);
            }, 50);
          });
          this.isLineSectionFound = true;

          // ======

          window.innerWidth > this.mobileBreakPoint &&
            this.state.activeListener();

          window.innerWidth > this.mobileBreakPoint &&
            this.aarpService.addListener((isChecked: boolean) => {
              this.state.isAarpChecked = isChecked;
              triggerMetrics(mBoxNames.aarpClick);
              setTimeout(() => {
                this.variation === "1" &&
                  this.planService.changePlanPrice(true);
              }, 50);
            }, selectors.desktopAarpCheckbox);

          window.innerWidth < this.mobileBreakPoint &&
            this.aarpService.addListener((isChecked: boolean) => {
              this.state.isAarpChecked = isChecked;
              triggerMetrics(mBoxNames.aarpClick);
              setTimeout(() => {
                this.variation === "1" &&
                  this.planService.changePlanPrice(true);
              }, 50);
            }, selectors.mobileAarpCheckbox);

          this.isComboPlanFound = true;

          // ======

          if (window.innerWidth < this.mobileBreakPoint) {
            this.planService.getMobilePlanElements();
          } else {
            this.planService.getPlanElements(selectors.desktopPlans);
            this.planService.changeUnitText(
              selectors.desktopMonthlyChargeUnits
            );
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
}
