import { disclaimer } from "../common/asset";

export class DisclaimerComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="disclaimer-component" >
        <p>${disclaimer}</p>
      </div>
    `;

    return htmlString.trim();
  };

  render = (bodyContent: HTMLDivElement) => {
    const dc: null | HTMLDivElement = document.querySelector(
      "div.disclaimer-component"
    );

    if (dc) {
      return;
    }

    bodyContent.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
