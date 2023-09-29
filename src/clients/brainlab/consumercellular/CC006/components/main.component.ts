import { Initializer } from "../../../../../utilities/initializer";
import { modalStatusKey, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";
import { ModalComponent } from "./modal.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  addShopButtonsListener = (isReviewOrder: boolean) => {
    const shopButtons: null | NodeListOf<Element> = document.querySelectorAll(
      `${selectors.addToCartButton}, ${selectors.continueButton}, ${selectors.updateButton}, ${selectors.reviewOrder}`
    );

    if (shopButtons && shopButtons.length > 0) {
      shopButtons.forEach((btn: Element) => {
        btn.addEventListener("touchstart", () => {
          localStorage.setItem(modalStatusKey, "true");

          if (isReviewOrder) {
            console.log("review-order");
            // @ts-ignore
            adobe.target.trackEvent({
              mbox: "review-order",
            });
          } else {
            console.log("add-to-cart-or-continue-or-update");
            // @ts-ignore
            adobe.target.trackEvent({
              mbox: "add-to-cart-or-continue-or-update",
            });
          }
        });
      });
    }
  };

  addListenerForOverviewPage = () => {
    const addToCart: null | Element = document.querySelector(
      selectors.overviewAddToCart
    );

    if (!addToCart) {
      return;
    }

    addToCart.addEventListener("touchstart", () => {
      if (!addToCart.classList.contains("disabled")) {
        console.log("overview-add-to-cart");
        // @ts-ignore
        adobe.target.trackEvent({
          mbox: "overview-add-to-cart",
        });
      }
    });
  };

  addListenerForBringYourDeviceConfigure = () => {
    const addToCart: null | Element = document.querySelector(
      selectors.bringYourDeviceConfigureAddToCart
    );

    if (!addToCart) {
      return;
    }

    addToCart.addEventListener("touchstart", () => {
      if (!addToCart.classList.contains("disabled")) {
        console.log("bring-your-device-add-to-cart");
        // @ts-ignore
        adobe.target.trackEvent({
          mbox: "bring-your-device-add-to-cart",
        });
      }
    });
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const elm = mutationList[index].target as Element;
        const previousSibling: Element = mutationList[index]
          .previousSibling as Element;

        if (
          elm.classList.contains("slide-enter-to") &&
          elm.classList.contains("hide-phone-up") &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping/choose/plan"
        ) {
          this.addShopButtonsListener(false);
          break;
        }

        if (
          elm.classList.contains("plan-summary-component") &&
          localStorage.getItem(modalStatusKey) === "true" &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping"
        ) {
          if (TestInfo.VARIATION.toString() === "1") {
            const modalComponent = new ModalComponent();
            modalComponent.render();
            break;
          }
        }

        if (elm.classList.contains("base-dollar-display-component")) {
          this.addShopButtonsListener(false);
          break;
        }

        if (
          elm.classList.contains("main-content") &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains("input-component-frame")
        ) {
          this.addShopButtonsListener(true);
          break;
        }

        // overview page - add to cart
        // mobile
        if (
          elm.classList.contains("device-details") &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains("reserve-device-modal")
        ) {
          this.addListenerForOverviewPage();
        }

        // bring your device configure - add to cart
        // mobile
        if (
          elm.classList.contains("accessory-grid-wrapper") &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains("no-results")
        ) {
          this.addListenerForBringYourDeviceConfigure();
        }
      }
    };

    testObserver.observe(callback);
  };
}
