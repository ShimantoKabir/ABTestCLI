import { componentHeading, suggestions } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { SuggestionItemComponent } from "./suggestion.Item.component";

export class SuggestionComponent {
  render = (): string => {
    const htmlStr: string = `
      <div class="${TestInfo.ID.toString()}__suggestion-component" >
        <div class="component-heading" >
          <h2>${componentHeading}</h2>
        </div>
        <div class="component-suggestion" >
        ${suggestions
          .map((model) => SuggestionItemComponent.render(model))
          .join("\n")}
        </div>
      </div>
    `;

    return htmlStr.trim();
  };
}
