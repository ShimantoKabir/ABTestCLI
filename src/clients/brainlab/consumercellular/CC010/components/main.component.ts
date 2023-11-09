import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  location: string = "";
  newPromoClassName: string = "new-promo";

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  manageNewCssClassToPormo = (needToAdd: boolean) => {
    const promoSection: Element | null = document.querySelector(
      selectors.promoSection
    );

    needToAdd &&
      promoSection &&
      promoSection.classList.add(this.newPromoClassName);

    !needToAdd &&
      promoSection &&
      promoSection.classList.remove(this.newPromoClassName);
  };

  init = (): void => {
    if (window.location.pathname === "/shopping/choose/device") {
      this.manageNewCssClassToPormo(true);
    }

    LocationObserver.listen((location: string) => {
      this.location = location;
    });

    const testObserver = new TestObserver(selectors.shoppingPageContainer);
    const callback = (mutationList: MutationRecord[]) => {
      if (this.location === "/shopping/choose/device") {
        this.manageNewCssClassToPormo(true);
      } else {
        this.manageNewCssClassToPormo(false);
      }
    };
    testObserver.observe(callback);
  };
}
