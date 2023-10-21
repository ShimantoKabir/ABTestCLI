import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ContactComponent } from "./contact.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const contactComponent = new ContactComponent();

    const submitSection: null | HTMLDivElement = document.querySelector(
      selectors.submitSection
    );
    const modelHeader: null | HTMLDivElement = document.querySelector(
      selectors.modelHeader
    );

    const submitButton: null | HTMLDivElement = document.querySelector(
      selectors.submitSection + ">button"
    );

    if (!submitSection || !modelHeader || !submitButton) {
      return;
    }

    if (TestInfo.VARIATION.toString() === "1") {
      modelHeader.insertAdjacentHTML("afterend", contactComponent.render());
    } else {
      submitSection.insertAdjacentHTML("afterend", contactComponent.render());
    }
  };
}
