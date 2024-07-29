import { Initializer } from "../../../../../utilities/initializer";
import { getImageUrl, selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const images: null | NodeListOf<HTMLImageElement> =
      document.querySelectorAll(selectors.images);

    if (images === null || images.length === 0) {
      return;
    }

    images.forEach((img: HTMLImageElement, index: number) => {
      img.setAttribute("src", "");
      img.setAttribute("src", getImageUrl(this.variation, index + 1));
    });

    this.addGoals();
  };

  addGoals = () => {
    const applyButtons: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.applyButtons);

    const formSubmitButton: null | HTMLButtonElement = document.querySelector(
      selectors.formSubmitButton
    );

    if (
      applyButtons === null ||
      applyButtons.length === 0 ||
      formSubmitButton === null
    ) {
      return;
    }

    applyButtons.forEach((a: HTMLAnchorElement) => {
      a.addEventListener("click", () => {
        triggerMetrics("how-to-apply-click");
      });
    });

    formSubmitButton.addEventListener("click", () => {
      triggerMetrics("form-submit-click");
    });
  };
}
