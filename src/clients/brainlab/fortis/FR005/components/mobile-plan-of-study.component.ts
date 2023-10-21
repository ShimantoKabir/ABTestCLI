import { planOfStudyData } from "../common/asset";
import { AccordionItemComponent } from "./accordion-item.component";

export class MobilePlanOfStudyComponent {
  getHtml = () => {
    const htmlString: string = `
      <div class="mobile-component-details" >
      ${planOfStudyData.adn.courses
        .map((course, index) => {
          return AccordionItemComponent.getHtml(course, "adn");
        })
        .join("\n")}
      </div>
    `;
    return htmlString.trim();
  };
}
