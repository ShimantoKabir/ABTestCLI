import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { OptionModel } from "../modes/option.model";
import { Fixer } from "../utils/fixer";
import { SwappableMobileTabComponent } from "./swappable-mobile-tab.component";
import { SwatchOrderActionComponent } from "./swatch-order-action.component";

export class MainComponent {
  private readonly mobileTabSelector: string = "div.mobile-tabs-selector";
  private readonly swatchOrderSelector: string = "div.swatch-ordering-actions";
  private optionModes: OptionModel[] = [];

  constructor() {
    Initializer.init(TestInfo, "0.0.2");
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
      .querySelector(this.swatchOrderSelector)
      ?.classList.add(TestInfo.ID + "__hide");

    document
      .querySelector(this.mobileTabSelector)
      ?.classList.add(TestInfo.ID + "__hide");

    const swatchOrderActionComponent = new SwatchOrderActionComponent();
    swatchOrderActionComponent.render();

    const swappableMobileTabComponent = new SwappableMobileTabComponent();
    swappableMobileTabComponent.render(this.optionModes);

    swappableMobileTabComponent.showOnlyOnMobile(window.innerWidth);
    window.addEventListener(
      "resize",
      () => {
        swappableMobileTabComponent.showOnlyOnMobile(window.innerWidth);
      },
      true
    );

    Fixer.fixStickyHeaderConflictWithMenu();
  };
}
