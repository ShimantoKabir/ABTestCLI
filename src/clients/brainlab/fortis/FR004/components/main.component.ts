import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ContactComponent } from "./contact.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.2");
  }

  triggerMetrics = (mboxName: string) => {
    console.log("mbox=", mboxName);
    // @ts-ignore
    adobe.target.trackEvent({ mbox: mboxName });
  };

  init = (): void => {
    sessionStorage.setItem("thank-you-key", "thank-you-value");

    const submitButton: null | HTMLDivElement = document.querySelector(
      selectors.submitSection + ">button"
    );

    submitButton &&
      submitButton.addEventListener("click", () => {
        this.triggerMetrics(mboxNames.formSubmitButtonMbox);
      });

    const applyCtas: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.applyCta);

    applyCtas &&
      applyCtas.length !== 0 &&
      applyCtas.forEach((applyCta: HTMLAnchorElement, index: number) => {
        applyCta.addEventListener("click", () => {
          index === 0 && this.triggerMetrics(mboxNames.topApplyClick);
          index === 1 && this.triggerMetrics(mboxNames.bottomApplyClick);
        });
      });

    if (TestInfo.VARIATION.toString() === "control") {
      return;
    }

    const contactComponent = new ContactComponent();

    const modelHeader: null | HTMLDivElement = document.querySelector(
      selectors.modelHeader
    );

    const submitSection: null | HTMLDivElement = document.querySelector(
      selectors.submitSection
    );

    if (!submitSection || !modelHeader) {
      return;
    }

    if (TestInfo.VARIATION.toString() === "1") {
      modelHeader.insertAdjacentHTML("afterend", contactComponent.render());
    } else if (TestInfo.VARIATION.toString() === "2") {
      submitSection.insertAdjacentHTML("afterend", contactComponent.render());
    }
  };
}
