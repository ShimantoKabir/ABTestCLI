import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";

export class MainComponent {
  isFormSubmitted: boolean = false;
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.addGoals();
    this.variation === "1" && this.applyModification();
  };

  applyModification = () => {
    const carousel: null | HTMLDivElement = document.querySelector(
      selectors.nthAemGrid + "(3)"
    );

    if (!carousel) {
      return;
    }

    carousel.classList.add("carousal");

    const clonedCarousel = carousel.cloneNode(true);

    carousel.remove();

    const platter: null | HTMLDivElement = document.querySelector(
      selectors.nthAemGrid + "(4)"
    );

    platter &&
      platter.insertAdjacentElement("afterend", clonedCarousel as Element);

    const description: null | HTMLDivElement = document.querySelector(
      selectors.nthAemGrid + "(2)"
    );

    description && description.classList.add("description");
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
}
