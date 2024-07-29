import { Initializer } from "../../../../../utilities/initializer";
import { promoCodeInfos, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  getHtml = (uniqueClass: string, promoCodeInfo: any): string => {
    const htmlString: string = `
      <div class="promo-code-banner ${uniqueClass}" >
        <p>PROMO CODE: <strong>${promoCodeInfo.promoCode}</strong> <span>${promoCodeInfo.promoText}</span></p>
      </div>
    `;

    return htmlString.trim();
  };

  constructor() {
    Initializer.init(TestInfo, "0.0.2");
  }

  init = (): void => {
    if (window.location.pathname !== "/shoppingcart/") {
      return;
    }

    const date = new Date();
    const dateString: string = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

    // const today = new Date("2024-07-22");
    const today = new Date(dateString);

    const promoCodeInfo = promoCodeInfos.find(
      (info: any) =>
        today.getTime() >= new Date(info.startDate).getTime() &&
        today.getTime() <= new Date(info.endDate).getTime()
    );

    console.log("promoCodeInfo=", promoCodeInfo);

    const checkoutButton: null | HTMLButtonElement = document.querySelector(
      selectors.checkoutButton
    );

    checkoutButton &&
      checkoutButton.insertAdjacentHTML(
        "beforebegin",
        this.getHtml("checkout", promoCodeInfo)
      );

    const paymentForm: null | HTMLButtonElement = document.querySelector(
      selectors.paymentForm
    );

    paymentForm &&
      paymentForm.insertAdjacentHTML(
        "beforebegin",
        this.getHtml("payment", promoCodeInfo)
      );
  };
}
