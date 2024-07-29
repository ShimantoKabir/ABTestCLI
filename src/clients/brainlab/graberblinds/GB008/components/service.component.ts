import { selectors } from "../common/asset";
import { BlindCard } from "../models/blind-card";

export class ServiceComponent {
  collectBlindCardData = (): BlindCard[] => {
    const blindCards: BlindCard[] = [];

    const blindCardElements: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.blindCards);

    if (blindCardElements === null || blindCardElements.length === 0) {
      return blindCards;
    }

    blindCardElements.forEach((card: HTMLAnchorElement, index: number) => {
      let imgSrc: string | null = null;
      let headingText: string | null = null;
      let descriptionText: string | null = null;

      const blindCard: BlindCard = new BlindCard();

      const href: string | null = card.getAttribute("href");

      const img: null | HTMLImageElement = card.querySelector("img");
      const heading: null | HTMLHeadingElement = card.querySelector("h2");
      const description: null | HTMLParagraphElement = card.querySelector("p");

      if (img && heading && description) {
        imgSrc = img.getAttribute("src");
        headingText = heading.textContent;
        descriptionText = description.textContent;
      }

      if (href && imgSrc && headingText && descriptionText) {
        blindCard.href = href;
        blindCard.heading = headingText.startsWith("Composite")
          ? "Composite and Faux<br> Wood Blinds"
          : headingText;
        blindCard.imgSrc = imgSrc;
        blindCard.description = descriptionText;
        blindCard.id = index;
      }

      blindCards.push(blindCard);
    });

    console.log("blind-cards=", JSON.stringify(blindCards));

    return blindCards;
  };
}
