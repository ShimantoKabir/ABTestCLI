import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MsgComponent {
  private msg: string = "";
  private icon: string = "";

  constructor(msg: string, icon: string) {
    this.msg = msg;
    this.icon = icon;
  }

  getHtml = (): string => {
    const html = `
        <div class="${TestInfo.ID}__message-component" >
            <div class="message-container" >
                <div class="icon" >
                    ${this.icon}
                </div>
                <div class="text" >
                    <p>${this.msg}</p>
                </div>
            </div>
        </div>
    `;
    return html.trim();
  };

  render = () => {
    document
      .querySelector(selectors.availableSelector)
      ?.insertAdjacentHTML("beforebegin", this.getHtml());
  };
}
