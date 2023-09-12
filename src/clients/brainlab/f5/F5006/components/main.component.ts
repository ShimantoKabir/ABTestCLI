import { Initializer } from "../../../../../utilities/initializer";
import { formHeadlineText, selectors, submitButtonText } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    Initializer.init(TestInfo, "0.0.1");
    const formHeadline: null | HTMLDivElement = document.querySelector(
      selectors.formHeadlineSelector
    );
    const submitButton: null | HTMLButtonElement = document.querySelector(
      selectors.submitButtonSelector
    );

    if (formHeadline && submitButton) {
      formHeadline.textContent = formHeadlineText;
      submitButton.textContent = submitButtonText;
    }
  };
}
