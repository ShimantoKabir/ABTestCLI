import { Initializer } from "../../../../../utilities/initializer";
import {
  mBoxNames,
  mobileMaxWidth,
  pageData,
  pathnames,
  selectors,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  location: string = "";

  constructor() {
    Initializer.init(TestInfo, "0.0.5");
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
      !cta.getAttribute("disabled") && this.trackEvent(mBoxName);
    });
  };

  addPlaceOrderListener = (selector: string) => {
    const placeOrderButtons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selector);

    if (!placeOrderButtons || placeOrderButtons.length === 0) {
      return;
    }

    placeOrderButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        !button.classList.contains("disabled") &&
          this.trackEvent(mBoxNames.placeOrderSuccessClick);
        button.classList.contains("disabled") &&
          this.trackEvent(mBoxNames.placeOrderErrorClick);
      });
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
      navHeader.classList.add("checkout-new-header");
    } else if (!isCheckoutPage && isNewHeaderDesignAdded) {
      navHeader.classList.remove("checkout-new-header");
    }
  };

  setPageVisitMatrix = (location: string) => {
    location === pathnames.checkout &&
      this.trackEvent(mBoxNames.checkoutPageVisit);
    location === pathnames.thankyou &&
      this.trackEvent(mBoxNames.thankYouPageVisit);
    location === pathnames.processing &&
      this.trackEvent(mBoxNames.processingPageVisit);
  };

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.setPageVisitMatrix(location);
    });

    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      if (TestInfo.VARIATION.toString() === "1") {
        this.mangeHeader();
      }

      for (let index = 0; index < mutationList.length; index++) {
        const target = mutationList[index].target as Element;
        const previousSibling: Element = mutationList[index]
          .previousSibling as Element;

        const lastChild: Element = target.lastChild as Element;
        const mutationRecord: MutationRecord = mutationList[index];

        if (
          target &&
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
          this.addPlaceOrderListener(
            pageData.checkoutPage.placeOrderButtonSelector
          );
        }

        // desktop-shopping-page-review-order
        if (
          target &&
          target.classList &&
          target.classList.contains(pageData.shoppingPage.desktopTargetClass) &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains(
            pageData.shoppingPage.desktopSiblingClass
          ) &&
          this.location === "/shopping"
        ) {
          window.innerWidth > mobileMaxWidth &&
            this.addListener(
              pageData.shoppingPage.desktopCtaSelector,
              "click",
              mBoxNames.reviewOrderClick
            );

          window.innerWidth < mobileMaxWidth &&
            this.addListener(
              pageData.shoppingPage.mobileCtaSelector,
              "click",
              mBoxNames.reviewOrderClick
            );
        }

        // desktop-shopping-page-post-review-order
        if (
          target &&
          target.id &&
          target.id === pageData.shoppingPage.mobilePostTargetId &&
          mutationRecord.attributeName &&
          mutationRecord.attributeName ===
            pageData.shoppingPage.mobilePostAttributeName &&
          this.location === "/shopping"
        ) {
          window.innerWidth > mobileMaxWidth &&
            this.addListener(
              pageData.shoppingPage.desktopCtaSelector,
              "click",
              mBoxNames.reviewOrderClick
            );

          window.innerWidth < mobileMaxWidth &&
            this.addListener(
              pageData.shoppingPage.mobileCtaSelector,
              "click",
              mBoxNames.reviewOrderClick
            );
        }
      }
    };

    testObserver.observe(callback);
  };
}
