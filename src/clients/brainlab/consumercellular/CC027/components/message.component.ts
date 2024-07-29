import { tradeMessage } from "../common/asset";

export class MessageComponent {
  private getHtml = (telInfo: any): string => {
    const htmlString: string = `
      <div class="message-component" >
        <div class="component-wrap" >
          <p class="free" >${tradeMessage.free}</p>
          <p class="term" >${tradeMessage.term}</p>
          <p class="redeem" >${tradeMessage.redeem(telInfo)}</p>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = (target: Element, telInfo: any) => {
    const mc: null | HTMLDivElement = document.querySelector(
      "div.message-component"
    );

    if (mc) {
      return;
    }

    target.insertAdjacentHTML("afterend", this.getHtml(telInfo));
  };
}
