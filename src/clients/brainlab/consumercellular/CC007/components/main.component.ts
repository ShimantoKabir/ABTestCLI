import { Initializer } from "../../../../../utilities/initializer";
import { mBoxNames, pageData, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  visitedPath: string = "";

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  trackEvent = (mbox: string) => {
    console.log("mBoxName=", mbox);
    // @ts-ignore
    adobe.target.trackEvent({
      mbox: mbox,
    });
  };

  addListener = (selector: string, eventName: string, mBoxName: string) => {
    const cta: null | Element = document.querySelector(selector);

    if (!cta) {
      return;
    }

    cta.addEventListener(eventName, () => {
      if (!cta.classList.contains("disabled")) {
        this.trackEvent(mBoxName);
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
      if (this.visitedPath !== window.location.pathname) {
        this.visitedPath = window.location.pathname;
        this.visitedPath === "/shopping/checkout" &&
          this.trackEvent(mBoxNames.checkoutPageVisit);
        this.visitedPath === "/shopping/thankyou" &&
          this.trackEvent(mBoxNames.thankYouPageVisit);

        this.visitedPath === "/shopping/checkout/processing" &&
          this.trackEvent(mBoxNames.processingPageVisit);
      }

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
