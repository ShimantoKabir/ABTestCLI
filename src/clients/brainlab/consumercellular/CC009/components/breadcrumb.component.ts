import {
  breadcrumbs,
  mboxNames,
  rightArrowSvg,
  selectors,
} from "../common/asset";
import { triggerMetrics } from "../common/utils";
import { Accordion } from "../models/accordion";
import { ServiceComponent } from "./service.component";

export class BreadcrumbComponent {
  serviceComponent: ServiceComponent = new ServiceComponent();

  getBreadcrumbItem = (breadcrumb: any, index: number): string => {
    const activeClassName: string = index === 0 ? "active" : "";
    const htmlString: string = `
      <div class="breadcrumb-item ${activeClassName}" >
        <div class="text" >
          <h3 class="big-text" >${breadcrumb.bigText}</h3>
          <h3 class="short-text" >${breadcrumb.shortText}</h3>
        </div>
        <div class="icon" >
          ${rightArrowSvg}
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  getHeader = () => {
    const htmlString: string = `
      <div class="checkout-header" >
        <div class="right" >
          <h2>Checkout</h2>
        </div>
        <div class="left" >
          <h4>Save Cart</h4>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="breadcrumb-component" >
        ${this.getHeader()} 
        <div class="breadcrumb-component-wrap">
        ${breadcrumbs
          .map((breadcrumb, index) => this.getBreadcrumbItem(breadcrumb, index))
          .join("\n")}
        </div>
      </div>
    `;
    return htmlString;
  };

  render = () => {
    const checkoutSections: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.checkoutSections);

    checkoutSections.length === 6 &&
      checkoutSections[4].parentElement &&
      checkoutSections[4].parentElement.classList.add("aarp");

    // if (window.innerWidth < 960) {
    //   const baseComponent: null | HTMLDivElement = document.querySelector(
    //     selectors.baseComponent
    //   );
    //   baseComponent &&
    //     baseComponent.insertAdjacentHTML("afterend", this.getHtml());
    //   return;
    // }

    const shoppingContainer: null | HTMLDivElement = document.querySelector(
      selectors.shoppingContainer
    );
    shoppingContainer &&
      shoppingContainer.insertAdjacentHTML("afterbegin", this.getHtml());

    const newSaveCard: null | HTMLHeadElement = document.querySelector(
      selectors.newSaveCard
    );
    const oldSaveCard: null | HTMLHeadElement = document.querySelector(
      selectors.oldSaveCard
    );

    if (newSaveCard && oldSaveCard) {
      newSaveCard.addEventListener("click", () => {
        oldSaveCard.click();
      });
    }

    checkoutSections && this.addListenerToBreadcrumb(checkoutSections);
  };

  addListenerToBreadcrumb = (checkoutSections: NodeListOf<HTMLDivElement>) => {
    const breadcrumbItems: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.breadcrumbItems);

    if (!breadcrumbItems || breadcrumbItems.length === 0) {
      return;
    }

    const accordions: Accordion[] =
      this.serviceComponent.getAccordionData(checkoutSections);

    breadcrumbItems.forEach((item: HTMLDivElement, index: number) => {
      item.addEventListener("click", () => {
        triggerMetrics(mboxNames.breadcrumbClick);
        this.serviceComponent.manageCurrentBreadcrumbActive(
          breadcrumbItems,
          index
        );
        this.manageCurrentCardActive(accordions, index);
        this.serviceComponent.clickNthCheckoutHeader(index, accordions);
      });
    });
  };

  manageCurrentCardActive = (accordions: Accordion[], index: number) => {
    accordions.forEach((accordion: Accordion, aIndex: number) => {
      this.serviceComponent.switchActiveToAccordions(
        accordion.accordionGroupsIndex,
        aIndex === index ? "add" : "remove"
      );
    });
  };

  remove = () => {
    const breadcrumb: null | HTMLDivElement = document.querySelector(
      "div.breadcrumb-component"
    );
    breadcrumb && breadcrumb.remove();
  };
}
