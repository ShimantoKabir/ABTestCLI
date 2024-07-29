import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { triggerMetrics } from "../common/utils";
import { CourseScheduleComponent } from "./course-schedule.component";
import { SuccessStoryComponent } from "./success-story.component";

export class MainComponent {
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.11");
  }

  init = (): void => {
    const courseScheduleComponent = new CourseScheduleComponent();
    const unbounceTitle = courseScheduleComponent.render();

    if (!unbounceTitle) {
      return;
    }

    const successStoryComponent = new SuccessStoryComponent();
    successStoryComponent.render(unbounceTitle);

    this.addGoals();
  };

  addGoals = () => {
    const submitButton: null | HTMLDivElement = document.querySelector(
      selectors.submitButton
    );

    submitButton &&
      submitButton.addEventListener("click", () => {
        triggerMetrics(mboxNames.formSubmitButton);
      });

    const applyCtas: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.applyCta);

    applyCtas &&
      applyCtas.length !== 0 &&
      applyCtas.forEach((applyCta: HTMLAnchorElement, index: number) => {
        applyCta.addEventListener("click", () => {
          triggerMetrics(mboxNames.applyClick);
        });
      });

    const interactionSelector: string =
      this.variation === "hvac" || this.variation === "surgical"
        ? selectors.planOfStudy
        : selectors.courseSchedule;

    const courseSchedule = document.querySelector(interactionSelector);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          triggerMetrics(mboxNames.scrollToSndOfWhatToLear);
        }
      });
    });

    courseSchedule && observer.observe(courseSchedule);
  };
}
