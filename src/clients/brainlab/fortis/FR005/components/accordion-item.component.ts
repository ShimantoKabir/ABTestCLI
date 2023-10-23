import { adnIndicators } from "../common/adn.data";
import { mboxNames, openOrCloseSvg } from "../common/asset";
import { lpnIndicators } from "../common/lpn.data";
import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";

export class AccordionItemComponent {
  thead: string = "table.item-table>thead";

  getSignMeaning = (credit: string, type: string): Indicator | undefined => {
    const sign: string = credit.substring(1);
    if (type === "adn") {
      const indicator: Indicator | undefined = adnIndicators.find(
        (indicator: Indicator) => indicator.sign === sign
      );

      return indicator;
    }

    if (type === "lpn") {
      const indicator: Indicator | undefined = lpnIndicators.find(
        (indicator: Indicator) => indicator.sign === sign
      );

      return indicator;
    }
  };

  getSignMeaningHtml = (meaning: string): string => {
    const htmlString: string = `
      <tr>
        <td colspan="3" >
        ${meaning}
        </td>
      </tr>
    `;

    return htmlString.trim();
  };

  getHtml = (
    course: Course,
    type: string,
    index: number,
    needToHide: boolean
  ): string => {
    const signMeaning: Indicator | undefined = this.getSignMeaning(
      course.credit,
      type
    );

    const htmlString: string = `
      <div class="accordion-item-component" >
        <table class="item-table" >
          <thead>
            <tr>
              <th colspan="3" >
                <div class="course-title" >
                  <div class="title" >
                    ${course.title}
                  </div>
                  <div class="icon" >
                    ${openOrCloseSvg}
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="${index === 0 ? "show" : ""}" >
            <tr>
              <td>Course Code</td>
              <td>Clock Hours</td>
              <td>Credit Hours</td>
            </tr>
            <tr>
              <td>${course.code}</td>
              <td>${course.hours}</td>
              <td>${course.credit}</td>
            </tr>
            ${signMeaning ? this.getSignMeaningHtml(signMeaning.meaning) : ""}
          </tbody>
        </table>
      </div>
    `;
    return htmlString.trim();
  };

  makeReactive = () => {
    const theads: NodeListOf<Element> | null = document.querySelectorAll(
      this.thead
    );

    if (!theads || theads.length === 0) {
      return;
    }

    theads.forEach((thead: Element) => {
      thead.addEventListener("click", () => {
        thead.nextElementSibling &&
          thead.nextElementSibling.classList.toggle("show");
        thead.classList.toggle("rotate");
        console.log("mbox=", mboxNames.accordionToggle);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: mboxNames.accordionToggle });
      });
    });
  };
}
