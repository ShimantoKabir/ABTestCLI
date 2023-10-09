import { Initializer } from "../../../../../utilities/initializer";
import { redirectLink, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const nextStep: null | HTMLAnchorElement = document.querySelector(
      selectors.nextStep
    );

    if (!nextStep) {
      return;
    }

    nextStep.setAttribute("href", redirectLink);
    if (nextStep.firstElementChild) {
      nextStep.firstElementChild.textContent = "Contact Us";
    }

    nextStep.addEventListener("click", () => {
      location.href = redirectLink;
    });
  };
}
