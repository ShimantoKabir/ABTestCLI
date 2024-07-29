import { selectors, summary } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class CartSummaryComponent {
  variation: string = TestInfo.VARIATION.toString();

  private getHtml = (highlighted: string, normal: string): string => {
    const htmlString: string = `
      <div class="cart-summary-component" >
        <p><span class="highlighted" >${highlighted}</span><br> ${normal}</p>
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

    const summaryPosition = Number(this.variation) - 1;

    const highlighted: string = summary[summaryPosition].highlighted;
    const normal: string = summary[summaryPosition].normal;

    !this.isAlreadyCartSummaryExist() &&
      planSummary.insertAdjacentHTML(
        "afterend",
        this.getHtml(highlighted, normal)
      );
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
