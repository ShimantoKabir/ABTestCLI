import { dcns } from "../common/asset";
import { Benefit } from "../model/benefit";

export class DcnComponent {
  getDcnItemHtml = (dcn: Benefit): string => {
    const htmlString: string = `
      <div class="item" >
        <div class="icon" >
          ${dcn.icon}
        </div>
        <div class="text" >
          <p>${dcn.text}</p>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="dcn-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h2>Why Choose DCN</h2>
          </div>
          <div class="dcn-items" >
          ${dcns.map((dcn) => this.getDcnItemHtml(dcn)).join("\n")}
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
