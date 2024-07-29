import { selectors, title } from "../common/asset";
import { AccordionComponent } from "./accordion.component";
import { TItleComponent } from "./title.component";

export class FaqComponent {
  accordionComponent: AccordionComponent = new AccordionComponent();

  getHtml = (): string => {
    const htmlString: string = `
      <div class="faq-component" >
        <div class="component-container" >
          ${TItleComponent.render(title)}
          ${this.accordionComponent.getHtml()}
        </div>
      </div>    
    `;

    return htmlString.trim();
  };

  render = () => {
    const unbounceTitle: HTMLDivElement | null = document.querySelector(
      selectors.unbounceTitle
    );

    if (!unbounceTitle) {
      return;
    }

    unbounceTitle.insertAdjacentHTML("beforebegin", this.getHtml());

    this.accordionComponent.reactive();
  };
}
