import { helps } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LiComponent } from "./li.component";

export class ContactComponent {
  render = (): string => {
    const htmlStr = `<div class="${TestInfo.ID}__contact-container" >
      <div class="headline" >
        <h5>When we contact you we'll:</h5>
      </div>  
      <div class="text-content" >
        <ul>
          ${helps.map((help) => LiComponent.render(help.text)).join("\n")}
        </ul>
      </div>
    </div>`;
    return htmlStr.trim();
  };
}
