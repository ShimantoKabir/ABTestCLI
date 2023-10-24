import { courseScheduleData, mboxNames, selectors } from "../common/asset";
import { triggerMetrics } from "../common/utils";
import { PlanOfStudyComponent } from "./plan-of-Study.component";
import { TItleComponent } from "./title.component";

export class CourseScheduleComponent {
  planOfStudyComponent: PlanOfStudyComponent = new PlanOfStudyComponent();

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="course-schedule-component" >
        <div class="component-container" >
          ${TItleComponent.render(courseScheduleData.title)}
          <div class="component-details" >
            <div class="nursing-programs" >
              <div class="program-item-container" >
                ${courseScheduleData.nursingPrograms
                  .map(
                    (program) =>
                      `<div class="program-item" ><p>${program}</p></div>`
                  )
                  .join("\n")}
              </div>
              <div class="program-footer" >
                <p>${courseScheduleData.footerText}</p>
              </div>
            </div>
            <div class="request-info-container" >
              <div class="request-info" >
                <p>${courseScheduleData.requestInformation}</p>
              </div>
              <div class="request-cta" >
                <button  data-toggle="modal" data-target="#rfiModal" >${
                  courseScheduleData.requestInformationCtaText
                }</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${this.planOfStudyComponent.getHtml()};
    `;

    return htmlString.trim();
  };

  render = (): HTMLDivElement | undefined => {
    const unbounceTitle: null | HTMLDivElement = document.querySelector(
      selectors.unbounceTitle
    );

    if (!unbounceTitle) {
      return;
    }

    unbounceTitle.insertAdjacentHTML("beforebegin", this.getHtml());

    const request: null | HTMLDivElement = document.querySelector(
      "div.request-cta>button"
    );

    request &&
      request.addEventListener("click", () => {
        triggerMetrics(mboxNames.applyClick);
      });

    this.planOfStudyComponent.makeReactive();

    return unbounceTitle;
  };
}
