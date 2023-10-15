import { breadcrumbs, rightArrowSvg, selectors } from "../common/asset";

export class BreadcrumbComponent {
  getBreadcrumbItem = (text: string, index: number): string => {
    const activeClassName: string = index === 0 ? "breadcrumb-item-active" : "";
    const htmlString: string = `
      <div class="breadcrumb-item ${activeClassName}" >
        <div class="text" >
          <h3>${text}</h3>
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
          .map((breadcrumb, index) =>
            this.getBreadcrumbItem(breadcrumb.text, index)
          )
          .join("\n")}
        </div>
      </div>
    `;
    return htmlString;
  };

  render = () => {
    if (window.innerWidth < 960) {
      const baseComponent: null | HTMLDivElement = document.querySelector(
        selectors.baseComponent
      );
      baseComponent &&
        baseComponent.insertAdjacentHTML("afterend", this.getHtml());
      return;
    }

    const checkoutWrapper: null | HTMLDivElement = document.querySelector(
      selectors.checkoutWrapper
    );
    checkoutWrapper &&
      checkoutWrapper.insertAdjacentHTML("afterbegin", this.getHtml());

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
  };
}
