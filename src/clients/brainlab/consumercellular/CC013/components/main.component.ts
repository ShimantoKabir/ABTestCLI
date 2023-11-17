import { Initializer } from "../../../../../utilities/initializer";
import { pathnames } from "../common/asset";
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

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isLineSectionFound = false;
      this.isPlanSectionFound = false;
      this.isComboPlanFound = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        //console.log("target=", target);

        if (
          target &&
          target.classList &&
          target.classList.contains("line-selection-component") &&
          this.location === pathnames.plan &&
          !this.isLineSectionFound
        ) {
          this.lineService.addListener((line: number) => {
            this.state.selectedLine = line;

            setTimeout(() => {
              this.planService.changePlanPrice(false);
            }, 50);
          });
          this.isLineSectionFound = true;
        }

        if (
          target &&
          target.classList &&
          target.classList.contains("choose-plan-combo") &&
          this.location === pathnames.plan &&
          !this.isComboPlanFound
        ) {
          this.aarpService.addListener((isChecked: boolean) => {
            this.state.isAarpChecked = isChecked;
            setTimeout(() => {
              this.planService.changePlanPrice(true);
            }, 500);
          });
          this.isComboPlanFound = true;
        }

        if (
          target &&
          target.classList &&
          target.classList.contains("monthly-charge") &&
          this.location === pathnames.plan &&
          !this.isPlanSectionFound
        ) {
          if (window.innerWidth < 720) {
            this.planService.getMobilePlanElements();
          } else {
            this.planService.getPlanElements();
          }

          this.isPlanSectionFound = true;
        }
      }
    };
    testObserver.observe(callback);
  };
}
