import { Initializer } from "../../../../../utilities/initializer";
import {
  redirectUrlMaps,
  selectors,
  triggerMetrics,
  urlId,
} from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  variation: any = TestInfo.VARIATION.toString();
  heroElm: null | HTMLElement = null;

  constructor() {
    Initializer.init(TestInfo, "0.0.5");
  }

  getLinkHtml = (href: string, text: string) => {
    const htmlString: string = `
      <a class="redirect-link" href="${href}" >${text}</a>
    `;
    return htmlString.trim();
  };

  init = (): void => {
    const currentLocation: string = window.location.pathname;

    if (!currentLocation.includes(urlId)) {
      return;
    }

    console.log("location-2", currentLocation);

    const heroText: null | HTMLElement = document.querySelector(
      selectors.heroText
    );

    const heroHeading: null | HTMLElement = document.querySelector(
      selectors.heroHeading
    );

    const jpHeroHeading: null | HTMLElement = document.querySelector(
      selectors.jpHeroHeading
    );

    this.heroElm = heroText
      ? heroText
      : heroHeading
      ? heroHeading
      : jpHeroHeading;

    const redirectInfo = redirectUrlMaps.find(
      (map) => map.variationName === this.variation
    );

    const urlSplit: string[] = currentLocation.split("/");
    const urlKey: string = urlSplit[urlSplit.length - 1];
    const urlInfo: any = this.getRedirectLink(redirectInfo, urlKey);

    redirectInfo &&
      this.heroElm &&
      this.heroElm.insertAdjacentHTML(
        "afterend",
        this.getLinkHtml(urlInfo.redirectUrl, redirectInfo.buttonText)
      );

    const link: null | HTMLLinkElement =
      document.querySelector("a.redirect-link");

    link &&
      link.addEventListener("click", () => {
        redirectInfo &&
          triggerMetrics(
            redirectInfo.buttonText.split(" ").join("-").toLowerCase() +
              "-click"
          );
      });
  };

  getRedirectLink = (redirectInfo: any, key: string): any => {
    const urlMap = redirectInfo.urlMap.find(
      (map: any) => map.redirectUrlKey === key
    );

    return urlMap;
  };
}
