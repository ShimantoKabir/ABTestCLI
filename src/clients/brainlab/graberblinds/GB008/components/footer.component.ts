import { footerItems } from "../common/asset";
import { BlindCard } from "../models/blind-card";

export class FooterComponent {
  getItemHtml = (blindCard: BlindCard): string => {
    const htmlString: string = `
      <div class="footer-item">
        <div class="footer-img" >
          <img src="${blindCard.imgSrc}" alt="${blindCard.heading}" />
        </div>
        <div class="footer-content" >
          <div class="heading" >
            <h2>${blindCard.heading}</h2>
          </div>
          <div class="description" >
            <p>${blindCard.description}</p>
          </div>
          <div class="footer-link" >
            <a href="${blindCard.href}" >${blindCard.hrefText}</a>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="container-xl">
        <div class="footer-component" >
        ${footerItems
          .map((card: BlindCard) => this.getItemHtml(card))
          .join("\n")}
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
