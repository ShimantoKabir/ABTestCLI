import { TestInfo } from "../common/test.info";

export class ArticleItemComponent {
  static render = (text: string): string => {
    const htmlStr = `<p class="${TestInfo.ID}__article-item-component" >${text}</p>`;
    return htmlStr.trim();
  };
}
