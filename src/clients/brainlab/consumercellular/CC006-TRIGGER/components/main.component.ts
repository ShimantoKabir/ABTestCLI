import { Initializer } from "../../../../../utilities/initializer";
import { mobileMaxWidth, planPage, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { AdobeTarget } from "../common/trigger";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  isAddToCartEventAdded: boolean = false;
  isContinueEventAdded: boolean = false;
  isUpdateEventAdded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.10");
  }

  addShopButtonsListener = (page: any) => {
    const cta: null | Element = document.querySelector(page.selector);

    if (!cta) {
      return;
    }

    cta.addEventListener(page.eventName, () => {
      AdobeTarget.trigger(page.mboxName);
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
          target.classList.contains(planPage.addToCart.targetClassList[0]) &&
          target.classList.contains(planPage.addToCart.targetClassList[1]) &&
          window.innerWidth < mobileMaxWidth &&
          window.location.pathname === planPage.pathName
        ) {
          if (!this.isAddToCartEventAdded) {
            this.addShopButtonsListener(planPage.addToCart);
            this.isAddToCartEventAdded = true;
          }
          break;
        }

        // continue - 1
        if (
          target &&
          target.classList &&
          target.classList.contains(planPage.continue.targetClassName) &&
          window.innerWidth < mobileMaxWidth &&
          window.location.pathname === planPage.pathName
        ) {
          if (!this.isContinueEventAdded) {
            this.addShopButtonsListener(planPage.continue);
            this.isContinueEventAdded = true;
          }
          break;
        }

        // continue - 2
        const lastChild: null | Element = target.lastChild as Element;
        if (
          target &&
          target.id &&
          target.id === planPage.continue.targetId &&
          lastChild &&
          lastChild.classList &&
          lastChild.classList.contains(planPage.continue.lastChildClassName) &&
          window.innerWidth < mobileMaxWidth &&
          window.location.pathname === planPage.pathName
        ) {
          if (!this.isContinueEventAdded) {
            this.addShopButtonsListener(planPage.continue);
            this.isContinueEventAdded = true;
          }
          break;
        }

        // update - 1
        if (
          (mutationRecord.attributeName === planPage.update.attributeNames[0] ||
            mutationRecord.attributeName ===
              planPage.update.attributeNames[1]) &&
          mutationRecord.type === planPage.update.attributeType &&
          target &&
          target.classList &&
          target.classList.contains(planPage.update.targetClassNames[0]) &&
          window.innerWidth < mobileMaxWidth &&
          window.location.pathname === planPage.pathName
        ) {
          if (!this.isUpdateEventAdded) {
            this.addShopButtonsListener(planPage.update);
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
          target.classList.contains(planPage.update.targetClassNames[1]) &&
          nextElementSibling &&
          nextElementSibling.classList &&
          nextElementSibling.classList.contains(
            planPage.update.nextSiblingClassName
          ) &&
          window.innerWidth < mobileMaxWidth &&
          window.location.pathname === planPage.pathName
        ) {
          if (!this.isUpdateEventAdded) {
            this.addShopButtonsListener(planPage.update);
            this.isUpdateEventAdded = true;
          }
          break;
        }
      }
    };

    testObserver.observe(callback);
  };
}
