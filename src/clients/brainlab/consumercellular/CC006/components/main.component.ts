import { Initializer } from "../../../../../utilities/initializer";
import { modalStatusKey, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";
import { ModalComponent } from "./modal.component";

export class MainComponent {
  isReviewOrderBeforeEventAdded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.4");
  }

  addListenerForShoppingPage = () => {
    const reviewOrder: null | Element = document.querySelector(
      selectors.reviewOrder
    );

    if (!reviewOrder) {
      return;
    }

    reviewOrder.addEventListener("touchstart", () => {
      if (reviewOrder.getAttribute("disabled") !== "disabled") {
        console.log("review-order");
        // @ts-ignore
        adobe.target.trackEvent({
          mbox: "review-order",
        });
      }
    });
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
        const mutationRecord: MutationRecord = mutationList[index];

        const target = mutationRecord.target as Element;
        const previousSibling: Element =
          mutationRecord.previousSibling as Element;

        if (
          target &&
          target.classList &&
          target.classList.contains("plan-summary-component") &&
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

        // shopping page - review order - before
        if (
          target &&
          target.classList &&
          target.classList.contains("main-content") &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains("input-component-frame")
        ) {
          this.addListenerForShoppingPage();
          break;
        }

        // shopping page - review order - after
        if (
          target &&
          target.id &&
          target.id === "save-cart-zip-code" &&
          mutationRecord.attributeName &&
          mutationRecord.attributeName === "data-previous-value"
        ) {
          if (!this.isReviewOrderBeforeEventAdded) {
            this.addListenerForShoppingPage();
            this.isReviewOrderBeforeEventAdded = true;
          }
          break;
        }

        // overview page - add to cart
        // mobile
        if (
          target &&
          target.classList &&
          target.classList.contains("device-details") &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains("reserve-device-modal")
        ) {
          this.addListenerForOverviewPage();
        }

        // bring your device configure - add to cart
        // mobile
        if (
          target &&
          target.classList &&
          target.classList.contains("accessory-grid-wrapper") &&
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
