import { Initializer } from "../../../../../utilities/initializer";
import { mBoxNames, mobileBreakPoint, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { PlanService } from "../services/plan.service";
import { GbComponent } from "./gb.component";
import { RangeComponent } from "./range.component";
import { ServiceComponent } from "./service.component";

export class MainComponent {
  location: string = "";
  planPagePathname: string = "/shopping/choose/plan";
  isModificationApplied: boolean = false;
  lastCircleIndex: number = 3;
  planService: PlanService = new PlanService();
  rangComponent: RangeComponent = new RangeComponent(this.planService);
  variation: string = TestInfo.VARIATION.toString();
  gbComponent: GbComponent = new GbComponent(this.planService);

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isModificationApplied = false;
      if (
        this.location === this.planPagePathname &&
        window.innerWidth <= mobileBreakPoint
      ) {
        ServiceComponent.triggerMetrics(mBoxNames.pageVisit);
      }
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (
          target.innerHTML &&
          target.innerHTML.length > 200000 &&
          !this.isModificationApplied &&
          this.location === this.planPagePathname &&
          window.innerWidth <= mobileBreakPoint
        ) {
          this.displaySlider();
          this.variation === "1" && this.rangComponent.render();
          this.variation === "2" && this.gbComponent.render();

          this.isModificationApplied = true;
        }
      }
    };
    testObserver.observe(callback);
  };

  displaySlider = () => {
    let isFirst: boolean = true;
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

    circles.forEach((circle: HTMLDivElement, index: number) => {
      index !== 3 &&
        circle.addEventListener("click", () => {
          ServiceComponent.triggerMetrics(mBoxNames.lineClick);
          !isFirst && this.variation === "2" && this.gbComponent.activeNth(1);
          !isFirst && this.variation === "1" && this.rangComponent.activeNth(1);
          setTimeout(() => {
            this.addSwipeListener();
          }, 350);
        });
    });

    setTimeout(() => {
      isFirst = false;
      this.planService.getArrows();
    }, 350);
  };

  addSwipeListener = () => {
    this.planService.addSwipeListener((range: number) => {
      this.variation === "1" && this.rangComponent.activeNth(range);
      this.variation === "2" && this.gbComponent.activeNth(range);
    });
  };
}
