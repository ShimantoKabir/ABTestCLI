import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { OptionModel } from "../modes/option.model";
import { SwappableMobileTabComponent } from "./swappable-mobile-tab.component";

export class MainComponent {
  private readonly mobileTabSelector: string = "div.mobile-tabs-selector";
  private optionModes: OptionModel[] = [];

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const mobileTabElm = document.querySelectorAll<HTMLSelectElement>(
      this.mobileTabSelector + ">select>option"
    );

    mobileTabElm.forEach((option) => {
      this.optionModes.push({
        href: option.value,
        text: option.innerText,
      });
    });

    document
      .querySelector(this.mobileTabSelector)
      ?.classList.add(TestInfo.ID + "__hide");

    const swappableMobileTabComponent = new SwappableMobileTabComponent();
    swappableMobileTabComponent.render(this.optionModes);
  };
}
