import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { PlanService } from "../services/plan.service";
import { RangeComponent } from "./range.component";

export class MainComponent {
  location: string = "";
  planPagePathname: string = "/shopping/choose/plan";
  isModificationApplied: boolean = false;
  lastCircleIndex: number = 3;
  planService: PlanService = new PlanService();
  rangComponent: RangeComponent = new RangeComponent(this.planService);

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isModificationApplied = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        // console.log("target-length=", target.innerHTML.length);

        if (
          target.innerHTML &&
          target.innerHTML.length > 200000 &&
          !this.isModificationApplied &&
          this.location === this.planPagePathname
        ) {
          this.displaySlider();
          this.rangComponent.render();
          this.isModificationApplied = true;
        }
      }
    };
    testObserver.observe(callback);
  };

  displaySlider = () => {
    const circles: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.circles);

    if (!circles || circles.length === 0) {
      return;
    }

    for (let index = 0; index < circles.length; index++) {
      const circle: HTMLDivElement = circles.item(index);

      if (
        circle.classList.contains("circle-selected") &&
        index !== this.lastCircleIndex
      ) {
        circles.item(index + 1).click();
        setTimeout(() => {
          circle.click();
        }, 250);
        break;
      } else {
        circles.item(index - 1).click();
        setTimeout(() => {
          circle.click();
        }, 250);
        break;
      }
    }

    setTimeout(() => {
      this.planService.getArrows();
    }, 350);
  };
}
