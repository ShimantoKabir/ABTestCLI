import { TestInfo } from "../common/test.info";

export class SwatchOrderActionComponent {
  private readonly tabContainerSelector: string = "div.tabs-container";

  getHtml = (): string => {
    const htmlStr = `<div class="${TestInfo.ID}__order-action">
        <a href="/my-account/my-favorites/" >Go to My Favorites</a>
        <a href="/swatch-cart/" >Place Order</a>
    </div>`;
    return htmlStr.trim();
  };

  render = (): boolean => {
    document
      .querySelector(this.tabContainerSelector)
      ?.insertAdjacentHTML("beforeend", this.getHtml());
    return true;
  };
}
