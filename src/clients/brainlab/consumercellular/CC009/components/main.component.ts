import { Initializer } from "../../../../../utilities/initializer";
import {
  mboxNames,
  mobileMaxWidth,
  pageData,
  pathnames,
  selectors,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { triggerMetrics } from "../common/utils";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { NextButtonComponent } from "./next-button.component";
import { ServiceComponent } from "./service.component";

export class MainComponent {
  isCCIDFound: boolean = false;
  serviceComponent = new ServiceComponent();
  location: string = "";
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.5");
  }

  addCTAListener = (selector: string, eventName: string, mbox: string) => {
    const cta: null | Element = document.querySelector(selector);

    if (!cta) {
      return;
    }

    cta.addEventListener(eventName, () => {
      !cta.getAttribute("disabled") && triggerMetrics(mbox);
    });
  };

  setPageVisitMatrix = (location: string) => {
    location === pathnames.checkout &&
      triggerMetrics(mboxNames.checkoutPageVisit);
    location === pathnames.thankyou &&
      triggerMetrics(mboxNames.thankYouPageVisit);
    location === pathnames.processing &&
      triggerMetrics(mboxNames.processingPageVisit);
  };

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.isCCIDFound = false;
      this.location = location;
      this.setPageVisitMatrix(location);
    });

    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      for (let i = 0; i < mutationList.length; i++) {
        const mutationRecord: MutationRecord = mutationList[i];
        const target: Element = mutationRecord.target as Element;
        const previousSibling = mutationRecord.previousSibling as Element;

        if (
          target &&
          target.id &&
          target.id === "ccCCID" &&
          this.isCCIDFound === false
        ) {
          // const breadcrumbComponent = new BreadcrumbComponent();
          // breadcrumbComponent.render();
          // breadcrumbComponent.remove();

          if (this.variation === "1") {
            const nextButtonComponent = new NextButtonComponent(
              this.serviceComponent
            );
            nextButtonComponent.render(true);

            nextButtonComponent.handleAarpClick(() => {
              nextButtonComponent.remove();
              nextButtonComponent.render(false);
            });
          }

          if (this.variation === "control") {
            this.serviceComponent.addCardTitleListener();
            this.serviceComponent.addPlaceOrderListener();
          }

          this.serviceComponent.addSaveCartListener();
          this.isCCIDFound = true;
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
            this.addCTAListener(
              pageData.shoppingPage.desktopCtaSelector,
              "click",
              mboxNames.reviewOrderClick
            );

          window.innerWidth < mobileMaxWidth &&
            this.addCTAListener(
              pageData.shoppingPage.mobileCtaSelector,
              "click",
              mboxNames.reviewOrderClick
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
            this.addCTAListener(
              pageData.shoppingPage.desktopCtaSelector,
              "click",
              mboxNames.reviewOrderClick
            );

          window.innerWidth < mobileMaxWidth &&
            this.addCTAListener(
              pageData.shoppingPage.mobileCtaSelector,
              "click",
              mboxNames.reviewOrderClick
            );
        }
      }
    };

    testObserver.observe(callback);
  };
}
