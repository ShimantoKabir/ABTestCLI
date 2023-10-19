import { Indicator } from "../models/indicator.model";

export class IndicatorComponent {
  static getIndicationItem = (indicator: Indicator): string => {
    const htmlString: string = `
      <div class="indicator-item">
        <div class="sign" >
          <p>${indicator.sign}</p>
        </div>
        <div class="meaning" >
          <p>${indicator.meaning}</p>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  static getHtml = (indicators: Indicator[]): string => {
    const htmlString: string = `
      <div class="indicator-component" >
      ${indicators
        .map((indicator) => this.getIndicationItem(indicator))
        .join("\n")}
      </div>
    `;

    return htmlString.trim();
  };
}
