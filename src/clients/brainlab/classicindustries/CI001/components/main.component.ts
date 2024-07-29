import { Initializer } from "../../../../../utilities/initializer";
import { selectors, shopNowLink, triggerEvent } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const promoBanner: null | HTMLDivElement = document.querySelector(
      selectors.promoBanner
    );

    if (!promoBanner) {
      return;
    }

    promoBanner.insertAdjacentHTML(
      "beforeend",
      `<a class="shop-now-link" href="${shopNowLink}" >SHOP NOW</a>`
    );

    this.addGoals();
  };

  addGoals = () => {
    const shopNowLink: null | HTMLAnchorElement =
      document.querySelector("a.shop-now-link");

    if (!shopNowLink) {
      return;
    }

    shopNowLink.addEventListener("click", () => {
      triggerEvent("shop-now-link-click");
    });
  };
}
