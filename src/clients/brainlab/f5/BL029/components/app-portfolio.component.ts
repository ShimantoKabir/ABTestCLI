import { distribution } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class AppPortfolioComponent {
  static render = () => {
    console.log("data=", distribution.imgSrc);
    const html: string = `
            <div class="${TestInfo.ID}__app-portfolio" >
                <div class="distribution-img" >
                    <img alt="distribution-img" src="${distribution.imgSrc}" >
                </div>
                <div class="distribution-text" >
                    <p>${distribution.text}</p>
                </div>
            </div>
        `;
    return html.trim();
  };
}
