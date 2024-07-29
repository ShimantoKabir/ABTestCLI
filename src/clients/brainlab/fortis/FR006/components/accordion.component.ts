import {
  faqs,
  mboxNames,
  openOrCloseSvg,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { Faq } from "../common/faq";

export class AccordionComponent {
  itemHeadingClass: string = "item-heading";

  getPointHtml = (point: string) => {
    const htmlString: string = `
      <li>${point}</li>
    `;

    return htmlString.trim();
  };

  getItemHtml = (item: Faq, index: number): string => {
    const hasPointClass = item.points.length > 0 ? "show" : "";
    const initialActive = index === 0 ? "active" : "";

    const htmlString: string = `
      <div class="accordion-item ${initialActive}" >
        <div class="${this.itemHeadingClass}" >
          <div class="heading" >
            ${item.question}
          </div>
          <div class="icon">
            ${openOrCloseSvg}
          </div>
        </div>
        <div class="item-body" >
          <div class="answer" >
            ${item.answer}
          </div>
          <div class="points ${hasPointClass}" >
            <ul>
              ${item.points.map((point) => this.getPointHtml(point)).join("\n")}
            </ul>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="accordion-component" >
        ${faqs.map((faq, index) => this.getItemHtml(faq, index)).join("\n")}
      <div>
    `;

    return htmlString.trim();
  };

  reactive = () => {
    const headings: NodeListOf<HTMLDivElement> | null =
      document.querySelectorAll("div." + this.itemHeadingClass);

    if (!headings || headings.length == 0) {
      return;
    }

    headings.forEach((heading: HTMLDivElement) => {
      heading.addEventListener("click", () => {
        heading.parentElement &&
          heading.parentElement.classList.toggle("active");

        triggerMetrics(mboxNames.accordionToggled);
      });
    });
  };
}
