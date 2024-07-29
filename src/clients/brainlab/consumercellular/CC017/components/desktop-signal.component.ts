import { selectors, signals } from "../common/asset";

export class DesktopSignalComponent {
  getItemHtml = (text: string): string => {
    const htmlString: string = `
      <div class="signal-item" >
        <div class="signal-item-wrap" >
          <div class="signal-icon" >
            <i class="fa fa-check-circle white-bg circle-icon green"></i>
          </div>
          <div class="signal-text" >
            <p>${text}</p>
          </div>
        </div>
      </div>
    `;
    return htmlString;
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="desktop-signal-component" >
        <div class="component-wrap" >
        ${signals.map((signal: string) => this.getItemHtml(signal)).join("\n")}
        </div>
      </div>
    `;
    return htmlString;
  };

  render = (callback: Function) => {
    const comboPlan: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.comboPlan);

    if (!comboPlan || comboPlan.length === 0) {
      return;
    }

    console.log("combo-plan=", comboPlan);

    comboPlan.forEach((text: HTMLParagraphElement, index: number) => {
      index === 0 && text.insertAdjacentHTML("afterend", this.getHtml());
    });

    callback(true);
  };
}
