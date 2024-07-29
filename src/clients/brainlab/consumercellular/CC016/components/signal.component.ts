import { selectors, signals } from "../common/asset";

export class SignalComponent {
  getItemHtml = (text: string): string => {
    const htmlString: string = `
      <div class="signal-item" >
        <div class="signal-icon" >
          <i class="fa fa-check-circle white-bg circle-icon green"></i>
        </div>
        <div class="signal-text" >
          <p>${text}</p>
        </div>
      </div>
    `;
    return htmlString;
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="signal-component" >
        <div class="component-wrap" >
        ${signals.map((signal: string) => this.getItemHtml(signal)).join("\n")}
        </div>
      </div>
    `;
    return htmlString;
  };

  render = (callback: Function) => {
    const riskFreeTexts: null | NodeListOf<HTMLParagraphElement> =
      document.querySelectorAll(selectors.riskFreeText);

    if (!riskFreeTexts || riskFreeTexts.length === 2) {
      riskFreeTexts.forEach((text: HTMLParagraphElement) => {
        text.insertAdjacentHTML("afterend", this.getHtml());
      });

      callback();
    }
  };
}
