import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  location: string = "";
  isDesiredElementFound: boolean = false;
  planPagePathname: string = "/shopping/choose/plan";

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isDesiredElementFound = false;
    });

    const testObserver = new TestObserver(selectors.shoppingPageContainer);
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const mutationRecord = mutationList[index];

        const target: Element = mutationRecord.target as Element;

        if (
          this.location === this.planPagePathname &&
          !this.isDesiredElementFound &&
          target.classList.contains("combo-plan")
        ) {
          this.displaySlider();
          this.isDesiredElementFound = true;
          break;
        }
      }
    };
    testObserver.observe(callback);
  };

  displaySlider = () => {
    const slickSlider: Element | null = document.querySelector(
      selectors.slickSlider
    );
    console.log("slickSlider=", slickSlider);
    if (!slickSlider) {
      return;
    }

    console.log("first-button=", slickSlider.childNodes[1]);
    console.log("first-button=", slickSlider.childNodes[2]);
  };
}
