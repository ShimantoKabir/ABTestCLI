import { TestInfo } from "../common/test.info";
import { OptionModel } from "../modes/option.model";
import { TabComponent } from "./tab.component";

export class SwappableMobileTabComponent {
  private readonly tabSectionSelector: string = "section.tabs-section";

  getHtml = (optionModes: OptionModel[]): string => {
    return `<div class="${TestInfo.ID}__swappable-mobile-tab container" >
      ${optionModes
        .map((optionModel) => TabComponent.render(optionModel))
        .join("\n")}
    </div>`;
  };

  render = (optionModes: OptionModel[]): void => {
    document
      .querySelector(this.tabSectionSelector)
      ?.insertAdjacentHTML("beforeend", this.getHtml(optionModes));
  };
}
