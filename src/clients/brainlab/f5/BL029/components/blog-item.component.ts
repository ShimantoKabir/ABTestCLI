import { rightArrow } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { CartModel } from "../models/cart.model";

export class BlogItemComponent {
  static render = (cardModel: CartModel, onlyLink: boolean): string => {
    const htmlStr = `
    <div class="${TestInfo.ID}__blog-item-component ${
      cardModel.href === "#dummy" && TestInfo.ID + "__hidden"
    }" >
      <div class="blog-img ${onlyLink && TestInfo.ID + "__hide"}" >
        <img src="${cardModel.imgSrc}" alt="blog-img" />
      </div>
      <div class="blog-title ${onlyLink && TestInfo.ID + "__hide"}" > 
        <a href="${cardModel.href}" >${cardModel.title}</a>
      </div>
      <div class="blog-link" >
        <a href="${cardModel.href}" >${cardModel.linkText} ${rightArrow}</a>
      </div>
    </div>
    `;
    return htmlStr.trim();
  };
}
