import { Initializer } from "../../../../../utilities/initializer";
import { modelHeaderSelector } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ContactComponent } from "./contact.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    let modelHeaderElm = document.querySelector(modelHeaderSelector + ">p");
    if (modelHeaderElm && modelHeaderElm.textContent) {
      modelHeaderElm.textContent = modelHeaderElm.textContent
        .toUpperCase()
        .toString();
    }

    const contactComponent = new ContactComponent();
    document
      .querySelector(modelHeaderSelector)
      ?.insertAdjacentHTML("afterend", contactComponent.render());
  };
}
