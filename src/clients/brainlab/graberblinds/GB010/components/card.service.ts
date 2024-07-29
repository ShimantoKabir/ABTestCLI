import { selectors } from "../common/asset";

export class CardService {
  addLearnMoreButtonToCard = (link: string, cardContent: HTMLDivElement) => {
    cardContent.insertAdjacentHTML(
      "beforeend",
      `<a class="learn-more-link" href="${link}" >Learn More</a>`
    );
  };

  changeCardColumn = (cards: NodeListOf<HTMLAnchorElement>) => {
    cards.forEach((card: HTMLAnchorElement) => {
      card.classList.remove("col-lg-3");
      card.classList.add("col-lg-4");

      const link: string | null = card.getAttribute("href");

      const cardContent: null | HTMLDivElement = card.querySelector(
        "div.o-card__content"
      );

      cardContent && link && this.addLearnMoreButtonToCard(link, cardContent);
    });
  };

  config = () => {
    const cards: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.card);

    if (!cards || cards.length === 0) {
      return;
    }

    this.changeCardColumn(cards);
  };
}
