import { infos } from "../common/asset";
import { BlindCard } from "../models/blind-card";

export class InfoComponent {
  getInfoItemHtml = (blindCard: BlindCard, index: number): string => {
    const direction: string = index % 2 ? "reverse" : "forward";

    const htmlString: string = `
      <div class="info-item ${direction}">
        <div class="info-img" >
          <img src="${blindCard.imgSrc}" alt="${blindCard.heading}" />
        </div>
        <div class="info-gap" ></div>
        <div class="info-content" >
          <div class="heading" >
            <h2>${blindCard.heading}</h2>
          </div>
          <div class="description" >
            <p>${blindCard.description}</p>
          </div>
          <div class="info-link" >
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
        <div class="info-component" >
        ${infos
          .map((card: BlindCard, index: number) =>
            this.getInfoItemHtml(card, index)
          )
          .join("\n")}
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
