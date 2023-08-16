import { Initializer } from "../../../../../utilities/initializer";
import { formHeadlineText, selectors, submitButtonText } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { StarComponent } from "./star.component";

export class MainComponent {
  init = (): void => {
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

    setTimeout(() => {
      const crocodileImage: null | HTMLImageElement = document.querySelector(
        selectors.crocodileImage
      );
      if (
        crocodileImage &&
        window.location.pathname ===
          "/go/ebook/mastering-api-architecture-oreilly"
      ) {
        const imageSource = crocodileImage.getAttribute("src");
        const starComponent = new StarComponent();
        starComponent.render(imageSource ?? "");
      }
    }, 25);
  };
}
