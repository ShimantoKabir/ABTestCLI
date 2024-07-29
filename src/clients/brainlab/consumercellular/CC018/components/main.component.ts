import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { CartSummaryComponent } from "./cart-summary.component";

export class MainComponent {
  location: string = "";
  isPageLoaded: boolean = false;
  cartSummaryComponent: CartSummaryComponent = new CartSummaryComponent();

  constructor() {
    Initializer.init(TestInfo, "0.1.10");
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

        const planSummary = target.querySelector(selectors.planSummary);
        //console.log("plan-summary-", planSummary);

        if (!this.isPageLoaded && planSummary) {
          console.log("Plan Summary Found...!");
          this.cartSummaryComponent.render();
          this.isPageLoaded = true;
        }
      }
    };
    testObserver.observe(callback);
  };
}
