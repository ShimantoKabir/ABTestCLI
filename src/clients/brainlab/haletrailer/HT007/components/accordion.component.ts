import { arrowIcon, selectors } from "../common/asset";
import { Service } from "../models/Service";

export class AccordionComponent {
  getLinkItemHtml = (itemText: string) => {
    const linkItemHtml: string = `
      <div class="link-item">
        <div class="round"></div>
        <div class="link">
          <a class="accordion-link" href="#" >${itemText}</a>
        </div>
      </div>
    `;
    return linkItemHtml.trim();
  };

  getAccordionItemHtml = (service: Service, index: number) => {
    const accordionItemHtml: string = `
      <div class="accordion-item ${index === 0 ? "active" : ""}" >
        <div class="heading" >
          <div class="text" >
            <h2>${service.headline}</h2>
          </div>
          <div class="icon" >
            ${arrowIcon}
          </div>
        </div>
        <div class="body" >
          <div class="link-container" >
            ${service.items
              .map((item: string) => this.getLinkItemHtml(item))
              .join("\n")}
          </div>
        </div>
      </div>
    `;
    return accordionItemHtml.trim();
  };

  getHtml = (services: Service[]) => {
    const htmlString: string = `
      <div class="accordion-container" >
      ${services
        .map((service: Service, index: number) =>
          this.getAccordionItemHtml(service, index)
        )
        .join("\n")}
      </div>
    `;
    return htmlString.trim();
  };

  render = (services: Service[]) => {
    const provideSection: null | HTMLDivElement = document.querySelector(
      selectors.provideSection
    );

    if (!provideSection) {
      return;
    }

    provideSection.classList.add("hide");

    provideSection.insertAdjacentHTML("afterend", this.getHtml(services));
    this.reactive();
  };

  private reactive = () => {
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
