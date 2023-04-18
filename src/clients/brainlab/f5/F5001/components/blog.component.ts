import { TestInfo } from "../common/test.info";
import { CartModel } from "../models/cart.model";
import { BlogItemComponent } from "./blog-item.component";

export class BlogComponent {
  static render = (
    headline: string,
    blogs: CartModel[],
    onlyLink: boolean
  ): string => {
    const htmlStr = `
    <div class="${TestInfo.ID}__blog-component" >
      <div class="blog-heading" >
        <h4>${headline}</h4>
      </div>
      <div class="blogs" >
        ${blogs
          .map((blog) => BlogItemComponent.render(blog, onlyLink))
          .join("\n")}
      </div>
    </div>
    `;
    return htmlStr.trim();
  };
}
