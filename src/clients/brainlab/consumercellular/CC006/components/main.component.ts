import { Initializer } from "../../../../../utilities/initializer";
import { modalStatusKey, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";
import { ModalComponent } from "./modal.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const elm = mutationList[index].target as Element;
        if (
          elm.classList.contains("slide-enter-to") &&
          elm.classList.contains("hide-phone-up") &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping/choose/plan"
        ) {
          this.addShopButtonsListener();
          break;
        }

        if (
          elm.classList.contains("plan-summary-component") &&
          localStorage.getItem(modalStatusKey) === "true" &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping"
        ) {
          const modalComponent = new ModalComponent();
          modalComponent.render();
          break;
        }
      }
    };

    testObserver.observe(callback);
  };

  addShopButtonsListener = () => {
    const shopButtons: null | NodeListOf<Element> = document.querySelectorAll(
      `${selectors.addToCartButton}, ${selectors.continueButton}`
    );

    if (shopButtons && shopButtons.length > 0) {
      shopButtons.forEach((btn: Element) => {
        btn.addEventListener("touchstart", () => {
          localStorage.setItem(modalStatusKey, "true");
          console.log("m-box-triggered");
          // @ts-ignore
          adobe.target.trackEvent({ mbox: "add-to-cart-or-continue" });
        });
      });
    }
  };
}
