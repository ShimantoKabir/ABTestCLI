import { adnIndicators } from "../common/adn.data";
import { openOrCloseSvg } from "../common/asset";
import { lpnIndicators } from "../common/lpn.data";
import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";

export class AccordionItemComponent {
  static getSignMeaning = (
    credit: string,
    type: string
  ): Indicator | undefined => {
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

  static getHtml = (course: Course, type: string): string => {
    const signMeaning: Indicator | undefined = this.getSignMeaning(
      course.credit,
      type
    );

    const htmlString: string = `
      <div class="accordion-item-component" >
        <table>
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
          <tbody>
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
            <tr class="${signMeaning ? "" : "hide"}" >
              <td colspan="3" >
                ${signMeaning ? signMeaning.meaning : "N/A"};
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `;
    return htmlString.trim();
  };
}
