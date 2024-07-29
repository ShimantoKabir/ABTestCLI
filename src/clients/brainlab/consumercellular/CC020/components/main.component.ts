import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { CartInputComponent } from "./card-input.component";

export class MainComponent {
  location: string = "";
  isElementFound: boolean = false;
  cartInputComponent: CartInputComponent = new CartInputComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isElementFound = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        const cardInput: null | HTMLInputElement = target.querySelector(
          selectors.cardInput
        );
        // console.log("cardInput=", cardInput);

        if (!this.isElementFound && cardInput) {
          this.modifyCartInput(cardInput);
          this.isElementFound = true;
        }
      }
    };
    testObserver.observe(callback);
  };

  modifyCartInput = (cardInput: HTMLInputElement) => {
    this.cartInputComponent.render(cardInput);
  };
}
