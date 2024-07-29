import { Initializer } from "../../../../../utilities/initializer";
import {
  selectors,
  swatchLinks,
  triggerEvent,
  whereToBuyLink,
} from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.renderSolarShadeCta();
    this.renderFreeSwatchButton();
    this.addGoals();
  };

  getFeeSwatchButtonHtml = (learnLink: string, swatchLink: string): string => {
    const htmlString: string = `
      <div class="free-learn-cta" >
        <a class="learn-more" href="${learnLink}">Learn More</a>
        <a class="free-swatch" href="${swatchLink}">Free Swatches</a>
      </div>
    `;
    return htmlString.trim();
  };

  getSolarShadeHtml = (): string => {
    const htmlString: string = `
      <div class="shade-cta" >
        <a class="action-link gray" href="/link/37733848985c4e38b03275f19f9bbcb0.aspx">Learn More</a>
        <a class="where-to-buy" href="${whereToBuyLink}">Where to Buy</a>
      </div>
    `;
    return htmlString.trim();
  };

  renderSolarShadeCta = () => {
    const categoryContent: HTMLDivElement | null = document.querySelector(
      selectors.categoryContent
    );

    if (!categoryContent) {
      return;
    }

    categoryContent.insertAdjacentHTML("beforeend", this.getSolarShadeHtml());
  };

  renderFreeSwatchButton = () => {
    const learnMoreLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.learnMoreLinks);

    if (!learnMoreLinks || learnMoreLinks.length === 0) {
      return;
    }

    learnMoreLinks.forEach((link: HTMLAnchorElement, index: number) => {
      const learnLink: null | string = link.getAttribute("href");
      const swatchLink: string = swatchLinks[index];

      learnLink &&
        link.insertAdjacentHTML(
          "afterend",
          this.getFeeSwatchButtonHtml(learnLink, swatchLink)
        );
    });
  };

  addGoals = () => {
    const freeSwatchLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("a.free-swatch");

    if (!freeSwatchLinks || freeSwatchLinks.length === 0) {
      return;
    }

    freeSwatchLinks.forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", () => {
        triggerEvent("free-swatch-link-click");
      });
    });
  };
}
