import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { FaqComponent } from "./faq.component";

export class MainComponent {
  variation: string = TestInfo.VARIATION.toString();
  faqComponent: FaqComponent = new FaqComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.variation === "1" && this.faqComponent.render();
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

    const courseSchedule = document.querySelector(selectors.unbounceTitle);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          triggerMetrics(mboxNames.scrollToFaq);
        }
      });
    });

    courseSchedule && observer.observe(courseSchedule);
  };
}
