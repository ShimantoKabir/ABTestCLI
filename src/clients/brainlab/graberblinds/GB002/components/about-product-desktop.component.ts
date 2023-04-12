import { products, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ProductComponent } from "./product.component";

export class AboutProductDesktopComponent {
  private getHtml = (): string => {
    const html: string = `<div class="${
      TestInfo.ID
    }__about-product-desktop-component" >
      <div class="grid-container content-container m-b-lg m-t-none">
        <h2 class="heading--lg text-center">Learn More about Our Latest Innovative Products</h2>
      </div>
      <div class="m-b-lg m-t-none">
        <div class="container-xl card-container">
          <div class="row">
            ${products
              .map((product) => ProductComponent.render(product))
              .join("\n")}
          </div>
        </div>
      </div>
    </div>`;
    return html.trim();
  };

  render = (): void => {
    document
      .querySelector(selectors.productPromoSelector)
      ?.insertAdjacentHTML("afterend", this.getHtml());
  };
}
