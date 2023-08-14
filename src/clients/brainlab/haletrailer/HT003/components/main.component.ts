import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ButtonComponent } from "./button.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const untitledSection: null | HTMLDivElement = document.querySelector(
      selectors.untitledSection
    );

    const aboutSection: null | HTMLDivElement = document.querySelector(
      selectors.aboutSection
    );

    if (untitledSection && aboutSection) {
      const untitledSectionClone = untitledSection.cloneNode(true);
      untitledSection.remove();

      aboutSection.insertAdjacentElement(
        "afterend",
        untitledSectionClone as Element
      );
    }

    const buttonComponent = new ButtonComponent();
    buttonComponent.render();
  };
}
