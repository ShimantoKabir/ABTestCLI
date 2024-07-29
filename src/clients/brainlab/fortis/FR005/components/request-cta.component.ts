import { courseScheduleData, mboxNames } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { triggerMetrics } from "../common/utils";

export class RequestCtaComponent {
  variation: string = TestInfo.VARIATION.toString();
  className: string = "request-cta-component";

  getHtml = (): string => {
    const htmlString: string = `
      <div class="${this.className} ${this.variation}" >
        <button data-toggle="modal" data-target="#rfiModal" >
          ${courseScheduleData.requestInformationCtaText}
        </button>
      </div>
    `;

    return this.variation === "hvac" || this.variation === "surgical"
      ? htmlString.trim()
      : "";
  };

  addListener = () => {
    const requestButtons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(`div.${this.className}>button`);

    if (requestButtons === null || requestButtons.length === 0) {
      return;
    }

    requestButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        triggerMetrics(mboxNames.applyClick);
      });
    });
  };
}
