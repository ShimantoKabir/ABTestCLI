import { Initializer } from "../../../../../utilities/initializer";
import { pageData, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  addListener = (selector: string, eventName: string, mBoxName: string) => {
    const cta: null | Element = document.querySelector(selector);

    if (!cta) {
      return;
    }

    cta.addEventListener(eventName, () => {
      if (!cta.classList.contains("disabled")) {
        console.log("mBoxName=", mBoxName);
        // @ts-ignore
        adobe.target.trackEvent({
          mbox: mBoxName,
        });
      }
    });
  };

  mangeHeader = () => {
    const isCheckoutPage: boolean =
      window.location.pathname === "/shopping/checkout" ? true : false;

    const navHeader: null | HTMLDivElement = document.querySelector(
      selectors.navHeader
    );

    if (!navHeader) {
      return;
    }

    const isNewHeaderDesignAdded: boolean = navHeader.classList.contains(
      "checkout-new-header"
    );

    if (isCheckoutPage && !isNewHeaderDesignAdded) {
      console.log(
        "isCheckoutPage=" +
          isCheckoutPage +
          ", isNewHeaderDesignAdded=" +
          isNewHeaderDesignAdded
      );
      navHeader.classList.add("checkout-new-header");
    } else if (!isCheckoutPage && isNewHeaderDesignAdded) {
      console.log(
        "isCheckoutPage=" +
          isCheckoutPage +
          ", isNewHeaderDesignAdded=" +
          isNewHeaderDesignAdded
      );
      navHeader.classList.remove("checkout-new-header");
    }
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      if (TestInfo.VARIATION.toString() === "1") {
        this.mangeHeader();
      }

      for (let index = 0; index < mutationList.length; index++) {
        const element = mutationList[index].target as Element;
        const previousSibling: Element = mutationList[index]
          .previousSibling as Element;

        const lastChild: Element = element.lastChild as Element;

        if (
          element &&
          lastChild &&
          lastChild.classList &&
          lastChild.classList.contains(
            pageData.checkoutPage.desktopTargetLastChildClass
          ) &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains(
            pageData.checkoutPage.desktopPreviousSiblingClass
          )
        ) {
          this.addListener(
            pageData.checkoutPage.desktopPlaceOrderButtonSelector,
            "click",
            pageData.checkoutPage.mBoxName
          );
        }
      }
    };

    testObserver.observe(callback);
  };
}