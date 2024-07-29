import { selectors } from "../common/asset";

export class CartSummaryComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="cart-summary-component" >
        <p><span class="highlighted" >30-day money back guarantee</span> and you’re never locked into a contract so you can cancel anytime.</p>
      </div>
    `;
    return htmlString;
  };

  render = () => {
    const planSummary: null | HTMLDivElement = document.querySelector(
      selectors.planSummary
    );

    if (!planSummary) {
      return;
    }

    !this.isAlreadyCartSummaryExist() &&
      planSummary.insertAdjacentHTML("afterend", this.getHtml());
  };

  isAlreadyCartSummaryExist = (): boolean => {
    const cartSummaryComponent: null | HTMLDivElement = document.querySelector(
      "div.cart-summary-component"
    );

    if (cartSummaryComponent) {
      return true;
    }

    return false;
  };
}
