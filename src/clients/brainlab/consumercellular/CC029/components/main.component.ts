import { Initializer } from "../../../../../utilities/initializer";
import { imageInfos, selectors, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";

export class MainComponent {
  isPromoSectionFound: boolean = false;
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.isPromoSectionFound = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const body: null | HTMLBodyElement = document.querySelector("body");

        if (
          !this.isPromoSectionFound &&
          body &&
          body.innerHTML.length > 200000
        ) {
          console.log("Modification apply started....!");
          this.applyModification();
          this.isPromoSectionFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  getPromoTitleHtml = (imageUrl: string, link: string) => {
    const htmlString: string = `
      <div class="promo-title-component" >
        <a href="${link}" >
          <img src="${imageUrl}" alt="promo-image" >
        </a>
      </div>
    `;

    return htmlString.trim();
  };

  applyModification = () => {
    const promoSection: null | HTMLBodyElement = document.querySelector(
      selectors.promoSection
    );

    var chosen: number = new Date().getTime() % 2;

    const imageInfo: any = imageInfos.find(
      (image: any) => image.variation === this.variation
    );

    const img = imageInfo.images[chosen];

    promoSection &&
      promoSection.insertAdjacentHTML(
        "beforeend",
        this.getPromoTitleHtml(img.imageUrl, img.link)
      );

    promoSection && this.addGoals();
  };

  addGoals = () => {
    const tile: null | HTMLAnchorElement = document.querySelector(
      "div.promo-title-component>a"
    );

    if (!tile) {
      return;
    }

    tile.addEventListener("click", () => {
      triggerMetrics("shopping-tile-click");
    });
  };
}
