import { Initializer } from "../../../../../utilities/initializer";
import {
  mobileMaxWidth,
  modalStatusKey,
  pageData,
  selectors,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";
import { ModalComponent } from "./modal.component";

export class MainComponent {
  isReviewOrderEventAdded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.15");
    localStorage.setItem(modalStatusKey, "true");
  }

  trackEvent = (mboxName: string) => {
    console.log("mboxName=", mboxName);
    // @ts-ignore
    adobe.target.trackEvent({
      mbox: mboxName,
    });
  };

  addListener = (page: any) => {
    const cta: null | Element = document.querySelector(page.selector);

    if (!cta) {
      return;
    }

    cta.addEventListener("touchstart", () => {
      const disabledAttribute: null | string = cta.getAttribute("disabled");
      const isContainDisabledClass = cta.classList.contains("disabled");

      if (
        page.pathName === pageData.shoppingPage.pathName &&
        !disabledAttribute
      ) {
        this.trackEvent(page.mboxName);
        return;
      }

      if (
        !isContainDisabledClass &&
        page.pathName === pageData.overviewPage.pathName
      ) {
        this.trackEvent(page.mboxName);
        return;
      }

      if (
        !isContainDisabledClass &&
        page.pathName === pageData.configurePage.pathName
      ) {
        this.trackEvent(page.mboxName);
        return;
      }
    });
  };

  init = (): void => {
    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      this.isReviewOrderEventAdded = false;

      for (let index = 0; index < mutationList.length; index++) {
        const mutationRecord: MutationRecord = mutationList[index];

        const target = mutationRecord.target as Element;
        const previousSibling: Element =
          mutationRecord.previousSibling as Element;

        if (
          target &&
          target.classList &&
          target.classList.contains(pageData.shoppingPage.targetClassName) &&
          localStorage.getItem(modalStatusKey) === "true" &&
          window.innerWidth < mobileMaxWidth &&
          window.location.pathname === pageData.shoppingPage.pathName
        ) {
          if (TestInfo.VARIATION.toString() === "1") {
            const modalComponent = new ModalComponent();
            modalComponent.render();
            break;
          }
        }

        if (
          target &&
          target.classList &&
          target.classList.contains(
            pageData.shoppingPage.preReviewOrderTargetClassName
          ) &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains(
            pageData.shoppingPage.preReviewOrderSiblingClassName
          )
        ) {
          if (!this.isReviewOrderEventAdded) {
            this.addListener(pageData.shoppingPage);
            this.isReviewOrderEventAdded = true;
          }
          break;
        }

        if (
          target &&
          target.id &&
          target.id === pageData.shoppingPage.postReviewOrderId &&
          mutationRecord.attributeName &&
          mutationRecord.attributeName ===
            pageData.shoppingPage.postReviewOrderAttribute
        ) {
          if (!this.isReviewOrderEventAdded) {
            this.addListener(pageData.shoppingPage);
            this.isReviewOrderEventAdded = true;
          }
          break;
        }

        if (
          target &&
          target.classList &&
          target.classList.contains(pageData.overviewPage.targetClassName) &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains(
            pageData.overviewPage.siblingClassName
          ) &&
          window.location.pathname !== "/shopping/details/sim/details"
        ) {
          this.addListener(pageData.overviewPage);
        }

        if (
          target &&
          target.classList &&
          target.classList.contains(pageData.configurePage.targetClassName) &&
          previousSibling &&
          previousSibling.classList &&
          previousSibling.classList.contains(
            pageData.configurePage.siblingClassName
          ) &&
          window.location.pathname.indexOf("configure") !== -1
        ) {
          this.addListener(pageData.configurePage);
        }
      }
    };

    testObserver.observe(callback);
  };
}
