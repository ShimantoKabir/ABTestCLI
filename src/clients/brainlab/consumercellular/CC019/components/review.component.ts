import { reviewLibrary } from "../common/asset";
import { Loader } from "../loaders/loader";

export class ReviewComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="review-component" >
        <div id="SA_wrapper_default" class="SA__wrapper"></div>
      </div>
    `;
    return htmlString;
  };

  render = (cartSummary: HTMLDivElement) => {
    cartSummary.insertAdjacentHTML("afterend", this.getHtml());

    const jsLoader = new Loader<HTMLScriptElement>();

    jsLoader.load(reviewLibrary, "review-js", "script").then((jsElm) => {
      jsElm && console.log("review-library-loaded...!");
    });
  };

  isComponentExist = (): boolean => {
    const cartSummaryComponent: null | HTMLDivElement = document.querySelector(
      "div#SA_wrapper_default"
    );

    if (cartSummaryComponent) {
      return true;
    }

    return false;
  };
}
