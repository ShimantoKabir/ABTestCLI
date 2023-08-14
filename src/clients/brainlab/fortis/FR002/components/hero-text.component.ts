import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class HeroTextComponent {
  getHtml = (paragraphs: string[]): string => {
    const htmlString = `
      <div class="${TestInfo.ID}__hero-text-content" >
        <div class="wrap" >
          <div class="headline" >
            <h4>Advance Your Career with Comprehensive Dental Assisting Skills at Fortis</h4>
          </div>
          <div class="body" >
          ${paragraphs.map((p) => `<p><strong>${p}</strong></p>`).join("\n")}
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
  render = (paragraphs: string[]): void => {
    const contactBanner: null | HTMLDivElement = document.querySelector(
      selectors.contactBanner
    );
    if (contactBanner) {
      contactBanner.insertAdjacentHTML("afterend", this.getHtml(paragraphs));
    }
  };
}
