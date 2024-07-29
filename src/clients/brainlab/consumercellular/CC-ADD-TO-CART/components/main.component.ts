import { Initializer } from "../../../../../utilities/initializer";
import { pageData } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { PageData } from "../models/page-data.model";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  addListener = (pageData: PageData) => {
    const cta: null | Element = document.querySelector(pageData.selector);
    if (!cta) {
      return;
    }

    cta.addEventListener("click", () => {
      console.log("mbox=", pageData.mBoxName);
      // @ts-ignore
      adobe.target.trackEvent({ mbox: pageData.mBoxName });
    });
  };

  findGoal = (mutationRecord: MutationRecord): null | PageData => {
    const previousSibling: Element = mutationRecord.previousSibling as Element;
    const element: Element = mutationRecord.target as Element;

    // plan page - add to cart
    // desktop + mobile
    if (
      element.classList.contains(pageData.planPage.targetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(pageData.planPage.siblingClass)
    ) {
      if (window.innerWidth < 720) {
        return new PageData(
          pageData.planPage.mobileCtaSelector,
          pageData.planPage.mBoxName
        );
      } else {
        return new PageData(
          pageData.planPage.desktopCtaSelector,
          pageData.planPage.mBoxName
        );
      }
    }

    return null;
  };

  init = (): void => {
    const targetNode: null | HTMLElement = document.getElementById(
      "shopping-page-container"
    );

    if (!targetNode) {
      return;
    }

    const config = { attributes: true, childList: true, subtree: true };
    const callback = (
      mutationList: MutationRecord[],
      observer: MutationObserver
    ) => {
      for (let index = 0; index < mutationList.length; index++) {
        const mutationRecord: MutationRecord = mutationList[index];
        const pageData: PageData | null = this.findGoal(mutationRecord);

        if (pageData) {
          this.addListener(pageData);
          break;
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  };
}
