import { Initializer } from "../../../../../utilities/initializer";
import { bannerHeadingText, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { VOneComponent } from "../variations/v-one.component";
import { VTwoComponent } from "../variations/v-two.component";
import { SocialComponent } from "./social.component";

export class MainComponent {
  hiddenSectionSelector = selectors.hiddenSectionSelector;
  bannerSelector = selectors.bannerSelector;

  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    document
      .querySelector(this.hiddenSectionSelector)
      ?.classList.add(TestInfo.ID + "__hide");

    const bannerHeading = document.querySelector(this.bannerSelector + " h1");
    if (bannerHeading) {
      bannerHeading.textContent = bannerHeadingText;
    }

    if (TestInfo.VARIATION.toString() === "1") {
      const v1 = new VOneComponent();
      v1.render();
    }

    if (TestInfo.VARIATION.toString() === "2") {
      const v2 = new VTwoComponent();
      v2.render();
    }

    SocialComponent.addEventListener();
  };
}
