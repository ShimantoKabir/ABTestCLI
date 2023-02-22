import { Initializer } from "../../../../../utilities/initializer";
import { targetSectionSelector } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { BannerImageComponent } from "./banner-image.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    const bannerImageComponent = new BannerImageComponent();
    document
      .querySelector(targetSectionSelector + ">h1")
      ?.classList.add(TestInfo.ID + "__hide");
    document
      .querySelector(targetSectionSelector + ">p")
      ?.classList.add(TestInfo.ID + "__hide");
    document
      .querySelector(targetSectionSelector)
      ?.insertAdjacentHTML("beforeend", bannerImageComponent.render());
  };
}
