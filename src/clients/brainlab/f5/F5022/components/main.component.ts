import { Initializer } from "../../../../../utilities/initializer";
import {
  mboxNames,
  missingLearnHeadlines,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { LearnStep } from "../common/learn-stem";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";
import { CarousalComponent } from "./carousal.component";
import { LearnStepComponent } from "./learn-step.component";

export class MainComponent {
  isFormSubmitted: boolean = false;
  variation: string = TestInfo.VARIATION.toString();
  carousalComponent: CarousalComponent = new CarousalComponent();
  learnSteps: LearnStep[] = [];
  learnStepComponent: LearnStepComponent = new LearnStepComponent();

  constructor() {
    Initializer.init(TestInfo, "0.1.1");
  }

  init = (): void => {
    this.addGoals();
    this.applyModification();
  };

  applyModification = () => {
    const guideSlider: null | HTMLDivElement = document.querySelector(
      selectors.guideSlider
    );

    !guideSlider && this.carousalComponent.render();

    const carousel: null | HTMLDivElement = document.querySelector(
      selectors.nthAemGrid + "(3)"
    );

    if (!carousel) {
      return;
    }

    carousel.classList.add("carousal");
    const clonedCarousel = carousel.cloneNode(true);
    carousel.remove();

    if (this.variation === "1") {
      const footer: null | HTMLDivElement = document.querySelector(
        selectors.footer
      );

      footer &&
        footer.insertAdjacentElement("beforebegin", clonedCarousel as Element);

      return;
    }

    const platter: null | HTMLDivElement = document.querySelector(
      selectors.nthAemGrid + "(4)"
    );

    platter &&
      platter.insertAdjacentElement("afterend", clonedCarousel as Element);

    const description: null | HTMLDivElement = document.querySelector(
      selectors.nthAemGrid + "(2)"
    );

    description && description.classList.add("description");

    this.collectLearnStepData();

    platter && this.learnStepComponent.render(platter, this.learnSteps);
  };

  addGoals = () => {
    const testObserver = new TestObserver(selectors.success);

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        if (target.classList.contains("show") && !this.isFormSubmitted) {
          triggerMetrics(mboxNames.formSubmittedSuccessfully);
          this.isFormSubmitted = true;
        }
      }
    };
    testObserver.observe(callback);

    const form: null | HTMLFormElement = document.querySelector(selectors.form);

    form &&
      form.addEventListener("click", () => {
        triggerMetrics(mboxNames.anywhereClickInForm);
      });

    const submitButton: null | HTMLButtonElement = document.querySelector(
      selectors.submitButton
    );

    submitButton &&
      submitButton.addEventListener("click", () => {
        triggerMetrics(mboxNames.submitButtonClick);
      });
  };

  collectLearnStepData = () => {
    const descriptions: null | NodeListOf<HTMLParagraphElement> =
      document.querySelectorAll(selectors.nthAemGrid + "(4) p");

    const titles: null | NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll(selectors.nthAemGrid + "(4) h4");

    const icons: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.nthAemGrid + "(4) svg"
    );

    descriptions.forEach((des: HTMLParagraphElement, index: number) => {
      const icon: null | Element = icons[index];
      const title: null | HTMLHeadingElement = titles[index];

      const learnStep: LearnStep = new LearnStep();

      if (des.textContent && icon.outerHTML) {
        learnStep.description = des.textContent;
        learnStep.icon = icon.outerHTML;
      }

      learnStep.title =
        title && title.textContent
          ? title.textContent.trim()
          : missingLearnHeadlines[index];

      this.learnSteps.push(learnStep);
    });

    console.log("learn-step=", this.learnSteps);
  };
}
