import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { BannerComponent } from "./banner.component";

export class MainComponent {
  hiddenBannerSelector: string =
    "div.uk-overlay.uk-position-cover.uk-light.vid-text";

  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    document
      .querySelector(this.hiddenBannerSelector)
      ?.classList.add(TestInfo.ID + "__banner");

    const bannerComponent = new BannerComponent();
    bannerComponent.render();
  };
}
