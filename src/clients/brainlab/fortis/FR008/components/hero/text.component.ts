import { benefits } from "../../common/asset";
import { Benefit } from "../../model/benefit";

export class TextComponent {
  private getBenefitItemHtml = (item: Benefit): string => {
    const htmlString: string = `
      <div class="item" >
        <div class="icon" >
          <img src="${item.icon}" >
        </div>
        <div class="text" >
          <p>${item.text}</p>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = () => {
    const htmlString: string = `
      <div class="text-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h1>Bachelor of Science in Nursing(BSN)</h1>
          </div>
          <div class="sub-heading" >
            <h4>Study On Campus in Houston or Denver</h4>
          </div>
          <div class="color-line" >
            <div class="red" ></div>
            <div class="green" ></div>
            <div class="yellow" ></div>
            <div class="blue" ></div>
          </div>
          <div class="benefits" >
            ${benefits
              .map((benefit: Benefit) => this.getBenefitItemHtml(benefit))
              .join("\n")}
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
