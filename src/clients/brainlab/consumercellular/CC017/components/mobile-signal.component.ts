import { selectors, signals } from "../common/asset";

export class MobileSignalComponent {
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
      <div class="mobile-signal-component" >
        <div class="component-wrap" >
        ${signals.map((signal: string) => this.getItemHtml(signal)).join("\n")}
        </div>
      </div>
    `;
    return htmlString;
  };

  render = (callback: Function) => {
    const aarpBox: null | HTMLDivElement = document.querySelector(
      selectors.aarpBox
    );

    if (!aarpBox) {
      return;
    }

    aarpBox.insertAdjacentHTML("beforebegin", this.getHtml());

    callback(true);
  };
}
