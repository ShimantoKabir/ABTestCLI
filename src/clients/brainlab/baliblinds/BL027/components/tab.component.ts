import { OptionModel } from "../modes/option.model";

export class TabComponent {
  private static readonly defaultActiveText: string = "Shades";

  static render = (optionModel: OptionModel): string => {
    const html = `<a ${
      TabComponent.isActive(optionModel) ? "class='active'" : ""
    } href="https://www.baliblinds.com${optionModel.href}" >${
      optionModel.text
    }</a>`;
    return html.trim();
  };

  static isActive(optionModel: OptionModel): boolean {
    if (
      !window.location.search &&
      optionModel.text === this.defaultActiveText
    ) {
      return true;
    }

    return window.location.href.indexOf(optionModel.href) === -1 ? false : true;
  }
}
