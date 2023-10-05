import { Initializer } from "../../../../../utilities/initializer";
import { modalStatusKey, selectors, triggerMboxName } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  isAddToCartEventAdded: boolean = false;
  isContinueEventAdded: boolean = false;
  isUpdateEventAdded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.4");
  }

  addShopButtonsListener = (selector: string, eventName: string) => {
    const cta: null | Element = document.querySelector(selector);

    if (!cta) {
      return;
    }

    cta.addEventListener(eventName, () => {
      console.log(triggerMboxName + "-triggered");
      localStorage.setItem(modalStatusKey, "true");
      // @ts-ignore
      adobe.target.getOffer({
        mbox: triggerMboxName,
        // @ts-ignore
        success: function (offers) {
          // @ts-ignore
          adobe.target.applyOffer({
            mbox: triggerMboxName,
            offer: offers,
          });
        },
        // @ts-ignore
        error: function (status, error) {
          if (console && console.log) {
            console.log("status=" + status + ", error=", error);
          }
        },
        timeout: 5000,
      });
    });
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const mutationRecord: MutationRecord = mutationList[index];
        const target = mutationRecord.target as Element;

        // add to cart
        if (
          target &&
          target.classList &&
          target.classList.contains("slide-enter-to") &&
          target.classList.contains("hide-phone-up") &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping/choose/plan"
        ) {
          if (!this.isAddToCartEventAdded) {
            this.addShopButtonsListener(
              selectors.addToCartButton,
              "touchstart"
            );
            this.isAddToCartEventAdded = true;
          }
          break;
        }

        // continue - 1
        if (
          target &&
          target.classList &&
          target.classList.contains("base-dollar-display-component") &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping/choose/plan"
        ) {
          if (!this.isContinueEventAdded) {
            this.addShopButtonsListener(selectors.continueButton, "touchstart");
            this.isContinueEventAdded = true;
          }
          break;
        }

        // continue - 2
        const lastChild: null | Element = target.lastChild as Element;
        if (
          target &&
          target.id &&
          target.id === "mobile-bill-breakdown" &&
          lastChild &&
          lastChild.classList &&
          lastChild.classList.contains("disclaimer") &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping/choose/plan"
        ) {
          if (!this.isContinueEventAdded) {
            this.addShopButtonsListener(selectors.continueButton, "touchstart");
            this.isContinueEventAdded = true;
          }
          break;
        }

        // update - 1
        if (
          (mutationRecord.attributeName === "aria-hidden" ||
            mutationRecord.attributeName === "data-slick-index") &&
          mutationRecord.type === "attributes" &&
          target &&
          target.classList &&
          target.classList.contains("slick-active") &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping/choose/plan"
        ) {
          if (!this.isUpdateEventAdded) {
            this.addShopButtonsListener(selectors.updateButton, "touchstart");
            this.isUpdateEventAdded = true;
          }
          break;
        }

        // update - 2
        const nextElementSibling: null | Element =
          target.nextElementSibling as Element;
        if (
          target &&
          target.classList &&
          target.classList.contains("base-dollar-display-component") &&
          nextElementSibling &&
          nextElementSibling.classList &&
          nextElementSibling.classList.contains("monthly-total-time") &&
          window.innerWidth < 720 &&
          window.location.pathname === "/shopping/choose/plan"
        ) {
          if (!this.isUpdateEventAdded) {
            this.addShopButtonsListener(selectors.updateButton, "touchstart");
            this.isUpdateEventAdded = true;
          }
          break;
        }
      }
    };

    testObserver.observe(callback);
  };
}
