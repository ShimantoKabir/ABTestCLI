import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { ReviewComponent } from "./review.component";

export class MainComponent {
  location: string = "";
  isPageLoaded: boolean = false;
  reviewComponent: ReviewComponent = new ReviewComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isPageLoaded = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        const cartSummary: null | HTMLDivElement = target.querySelector(
          selectors.cartSummary
        );
        // console.log("Cart Summary=", cartSummary);

        if (!this.isPageLoaded && cartSummary) {
          console.log("Cart Summary Found...!");

          !this.reviewComponent.isComponentExist() &&
            this.reviewComponent.render(cartSummary);
          this.isPageLoaded = true;
        }
      }
    };
    testObserver.observe(callback);
  };
}
