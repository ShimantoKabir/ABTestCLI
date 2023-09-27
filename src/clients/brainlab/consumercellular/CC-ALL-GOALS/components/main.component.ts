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

    // plan page - update
    // desktop + mobile
    if (
      element.classList.contains(pageData.planPageUpdate.targetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(pageData.planPageUpdate.siblingClass)
    ) {
      if (window.innerWidth < 720) {
        return new PageData(
          pageData.planPageUpdate.mobileCtaSelector,
          pageData.planPageUpdate.mBoxName
        );
      } else {
        return new PageData(
          pageData.planPageUpdate.desktopCtaSelector,
          pageData.planPageUpdate.mBoxName
        );
      }
    }

    // shopping page - review order
    // desktop
    if (
      element.classList.contains(pageData.shoppingPage.desktopTargetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.shoppingPage.desktopSiblingClass
      )
    ) {
      return new PageData(
        pageData.shoppingPage.desktopCtaSelector,
        pageData.shoppingPage.mBoxName
      );
    }

    // shopping page - review order
    // mobile
    if (
      element.classList.contains(pageData.shoppingPage.mobileTargetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.shoppingPage.mobileSiblingClass
      )
    ) {
      return new PageData(
        pageData.shoppingPage.mobileCtaSelector,
        pageData.shoppingPage.mBoxName
      );
    }

    // overview page - add to cart
    // desktop
    if (
      element.classList.contains(pageData.overViewPage.desktopTargetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.overViewPage.desktopSiblingClass
      )
    ) {
      return new PageData(
        pageData.overViewPage.desktopCtaSelector,
        pageData.overViewPage.mBoxName
      );
    }

    // overview page - add to cart
    // mobile
    if (
      element.classList.contains(pageData.overViewPage.mobileTargetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.overViewPage.mobileSiblingClass
      )
    ) {
      return new PageData(
        pageData.overViewPage.mobileCtaSelector,
        pageData.overViewPage.mBoxName
      );
    }

    // bring your device - verify and add to cart
    // desktop
    if (
      element.classList.contains(
        pageData.bringYourDevicePage.desktopTargetClass
      ) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.bringYourDevicePage.desktopSiblingClass
      )
    ) {
      return new PageData(
        pageData.bringYourDevicePage.desktopCtaSelector,
        pageData.bringYourDevicePage.mBoxName
      );
    }

    // bring your device - verify and add to cart
    // mobile
    if (
      element.id === pageData.bringYourDevicePage.mobileTargetId &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.bringYourDevicePage.mobileSiblingClass
      )
    ) {
      return new PageData(
        pageData.bringYourDevicePage.mobileCtaSelector,
        pageData.bringYourDevicePage.mBoxName
      );
    }

    // configure - add to cart
    // desktop
    if (
      element.classList.contains(pageData.configurePage.desktopTargetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.configurePage.desktopSiblingClass
      )
    ) {
      return new PageData(
        pageData.configurePage.desktopCtaSelector,
        pageData.configurePage.mBoxName
      );
    }

    // configure - add to cart
    // mobile
    if (
      element.classList.contains(pageData.configurePage.mobileTargetClass) &&
      previousSibling &&
      previousSibling.classList &&
      previousSibling.classList.contains(
        pageData.configurePage.mobileSiblingClass
      )
    ) {
      return new PageData(
        pageData.configurePage.mobileCtaSelector,
        pageData.configurePage.mBoxName
      );
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
