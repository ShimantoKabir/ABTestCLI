import { Initializer } from "../../../../../utilities/initializer";
import { selectors, triggerEvent } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { CardService } from "./card.service";
import { FeatureComponent } from "./feature.component";

export class MainComponent {
  cardService: CardService = new CardService();
  featureComponent: FeatureComponent = new FeatureComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.cardService.config();

    const featureSection: null | HTMLDivElement = document.querySelector(
      selectors.featureSection
    );

    featureSection &&
      featureSection.insertAdjacentHTML(
        "beforeend",
        this.featureComponent.getHtml()
      );

    this.addGoals();
  };

  addGoals = () => {
    const learMoreLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("a.learn-more-link");

    if (!learMoreLinks || learMoreLinks.length === 0) {
      return;
    }

    learMoreLinks.forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", () => {
        triggerEvent("learn-more-link-click");
      });
    });

    const featureLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("div.feature-link>a");

    if (!featureLinks || featureLinks.length === 0) {
      return;
    }

    featureLinks.forEach((link: HTMLAnchorElement) => {
      const eventName: string | null = link.getAttribute("event-name");

      link.addEventListener("click", () => {
        eventName && triggerEvent(eventName);
      });
    });
  };
}
