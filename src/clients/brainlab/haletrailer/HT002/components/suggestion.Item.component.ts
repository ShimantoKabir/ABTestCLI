import { TestInfo } from "../common/test.info";
import { SuggestionModel } from "../models/suggestion.model";

export class SuggestionItemComponent {
  public static render(model: SuggestionModel): string {
    const htmlStr = `
        <div class="${TestInfo.ID}__suggestion-item-container" >
            <div class="suggestion-image" >
                <a href="${model.href}" ><img src="${model.imgSrc}" alt="${model.title}" ></a>
            </div>
            <div class="suggestion-link" >
                <a href="${model.href}" >${model.title}</a>
            </div>
        </div>
    `;

    return htmlStr.trim();
  }
}
