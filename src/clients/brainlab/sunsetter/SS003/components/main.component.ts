import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getButtonHtml = (moreLink: string, priceLink: string): string => {
    const htmlString: string = `
      <div class="more-price-button" >
        <a href="${priceLink}" class="button-light-blue-lg" >
          Get Pricing
        </a>
        <div class="gap" ></div>
        <a href="${moreLink}" class="more-details-btn" >
          More Details
        </a>
      </div>
    `;
    return htmlString.trim();
  };

  init = (): void => {
    const priceButtons: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.priceButton);

    const moreButtons: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.moreButton);

    if (
      !priceButtons ||
      priceButtons.length === 0 ||
      !moreButtons ||
      moreButtons.length === 0
    ) {
      return;
    }

    priceButtons.forEach((link: HTMLAnchorElement, index: number) => {
      const moreLink: null | string = moreButtons[index].getAttribute("href");
      const priceLink: null | string = link.getAttribute("href");

      moreLink &&
        priceLink &&
        link.insertAdjacentHTML(
          "afterend",
          this.getButtonHtml(moreLink, priceLink)
        );
    });
  };
}
