import { Initializer } from "../../../../../utilities/initializer";
import { AdobeTarget } from "../common/trigger";
import {
  mobileMaxWidth,
  pageData,
  selectors,
  triggerMboxName,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  isTestTriggered: boolean = false;
  constructor() {
    Initializer.init(TestInfo, "0.0.20");
  }

  addCTAListener = (selector: string, eventName: string) => {
    const cta: null | Element = document.querySelector(selector);

    if (!cta) {
      return;
    }

    cta.addEventListener(eventName, () => {
      const disabledAttribute: string | null = cta.getAttribute("disabled");

      if (!disabledAttribute) {
      }

      AdobeTarget.trigger(triggerMboxName);
    });
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      this.isTestTriggered = false;

      for (let i = 0; i < mutationList.length; i++) {
        const mutationRecord: MutationRecord = mutationList[i];

        const target = mutationRecord.target as Element;
        const previousSibling = mutationRecord.previousSibling as Element;

        // plan page - add to cart - desktop
        if (
          window.innerWidth > mobileMaxWidth &&
          target &&
          target.classList &&
          target.classList.contains(pageData.planPage.targetClass) &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains(pageData.planPage.siblingClass) &&
          TestInfo.VARIATION.toString() === "plan" &&
          !this.isTestTriggered
        ) {
          this.addCTAListener(pageData.planPage.desktopCtaSelector, "click");
          this.isTestTriggered = true;
          break;
        }

        // desktop - shopping page - review order
        if (
          window.innerWidth > mobileMaxWidth &&
          target &&
          target.classList &&
          target.classList.contains(pageData.shoppingPage.desktopTargetClass) &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains(
            pageData.shoppingPage.desktopSiblingClass
          ) &&
          TestInfo.VARIATION.toString() === "shop" &&
          !this.isTestTriggered
        ) {
          this.addCTAListener(
            pageData.shoppingPage.desktopCtaSelector,
            "click"
          );
          this.isTestTriggered = true;
          break;
        }

        // desktop - shopping page - post -review order
        if (
          window.innerWidth > mobileMaxWidth &&
          target &&
          target.id &&
          target.id === pageData.shoppingPage.mobilePostTargetId &&
          mutationRecord.attributeName &&
          mutationRecord.attributeName ===
            pageData.shoppingPage.mobilePostAttributeName &&
          TestInfo.VARIATION.toString() === "shop" &&
          !this.isTestTriggered
        ) {
          this.addCTAListener(
            pageData.shoppingPage.desktopCtaSelector,
            "click"
          );
          this.isTestTriggered = true;
          break;
        }

        // overview page - add to cart
        // desktop
        if (
          window.innerWidth > mobileMaxWidth &&
          target &&
          target.classList &&
          target.classList.contains(pageData.overViewPage.desktopTargetClass) &&
          previousSibling &&
          previousSibling.classList &&
          TestInfo.VARIATION.toString() === "over" &&
          previousSibling.classList.contains(
            pageData.overViewPage.desktopSiblingClass
          ) &&
          !this.isTestTriggered
        ) {
          this.addCTAListener(
            pageData.overViewPage.desktopCtaSelector,
            "click"
          );
          this.isTestTriggered = true;
          break;
        }
      }
    };

    testObserver.observe(callback);
  };
}
