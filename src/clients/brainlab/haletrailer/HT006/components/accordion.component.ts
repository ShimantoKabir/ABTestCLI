import { arrowIcon, selectors } from "../common/asset";
import { Link } from "../models/link";
import { Trailer } from "../models/trailer";

export class AccordionComponent {
  getLinkItemHtml = (link: Link) => {
    const linkItemHtml: string = `
      <div class="link-item">
        <div class="round"></div>
        <div class="link">
          <a class="accordion-link" href="${link.href}" >${link.text}</a>
        </div>
      </div>
    `;
    return linkItemHtml.trim();
  };

  getAccordionItemHtml = (trailer: Trailer, index: number) => {
    const accordionItemHtml: string = `
      <div class="accordion-item ${index === 0 ? "active" : ""}" >
        <div class="heading" >
          <div class="text" >
            <h2>${trailer.headline}</h2>
          </div>
          <div class="icon" >
            ${arrowIcon}
          </div>
        </div>
        <div class="body" >
          <div class="description accordion-description" >
            ${trailer.description}
          </div>
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
        .map((trailer: Trailer, index: number) =>
          this.getAccordionItemHtml(trailer, index)
        )
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
    this.reactive();
  };

  reactive = () => {
    const headings: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(
        "div.accordion-container>div.accordion-item>div.heading"
      );
    if (!headings || headings.length === 0) {
      return;
    }

    headings.forEach((heading: HTMLDivElement) => {
      heading.addEventListener("click", () => {
        heading.parentElement &&
          heading.parentElement.classList.toggle("active");
      });
    });
  };
}
