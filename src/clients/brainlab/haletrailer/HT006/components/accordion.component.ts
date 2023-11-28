import { arrowIcon, selectors } from "../common/asset";
import { Link } from "../models/link";
import { Trailer } from "../models/trailer";

export class AccordionComponent {
  getLinkItemHtml = (link: Link) => {
    const linkItemHtml: string = `
      <div class="link-item">
        <div class="round"></div>
        <div class="link"><a href="${link.href}" >${link.text}</a></div>
      </div>
    `;
    return linkItemHtml.trim();
  };

  getAccordionItemHtml = (trailer: Trailer) => {
    const accordionItemHtml: string = `
      <div class="accordion-item" >
        <div class="heading" >
          <div class="text" >
            <h2>${trailer.headline}</h2>
          </div>
          <div class="icon" >
            ${arrowIcon}
          </div>
        </div>
        <div class="body" >
          <div class="description" >${trailer.description}</div>
          <div class="link-container" >
            ${trailer.links
              .map((link: Link) => this.getLinkItemHtml(link))
              .join("\n")}
          </div>
        </div>
      </div>
    `;
    return accordionItemHtml.trim();
  };

  getHtml = (trailers: Trailer[]) => {
    const htmlString: string = `
      <div class="accordion-container" >
      ${trailers
        .map((trailer: Trailer) => this.getAccordionItemHtml(trailer))
        .join("\n")}
      </div>
    `;
    return htmlString.trim();
  };

  render = (trailers: Trailer[]) => {
    const spacer: null | HTMLDivElement = document.querySelector(
      selectors.spacer
    );
    if (!spacer) {
      return;
    }

    spacer.insertAdjacentHTML("afterend", this.getHtml(trailers));
  };
}
