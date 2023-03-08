import { articles } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ArticleItemComponent } from "./article-item.component";

export class ArticleComponent {
  static render = (): string => {
    const htmlStr = `
    <div class="${TestInfo.ID}__article-component" >
      ${articles.map((a) => ArticleItemComponent.render(a)).join("\n")}
    </div>
    `;
    return htmlStr.trim();
  };
}
