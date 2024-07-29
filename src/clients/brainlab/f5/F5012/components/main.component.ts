import { Initializer } from "../../../../../utilities/initializer";
import { bgStyle, getBackgroundImage, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  isChangedOnLoad: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const heroBannerBg: HTMLDivElement | null = document.querySelector(
      selectors.heroBannerBg
    );

    if (!heroBannerBg) {
      return;
    }

    heroBannerBg.setAttribute("data-bg-src-fhd", getBackgroundImage("hd"));
    heroBannerBg.setAttribute("data-bg-src-hd", getBackgroundImage("hd"));
    heroBannerBg.setAttribute("data-bg-src-lg", getBackgroundImage("lg"));
    heroBannerBg.setAttribute("data-bg-src-md", getBackgroundImage("md"));
    heroBannerBg.setAttribute("data-bg-src-sm", getBackgroundImage("sm"));
    heroBannerBg.setAttribute("data-bg-src-xs", getBackgroundImage("xs"));
    heroBannerBg.setAttribute("data-bg-src-xl", getBackgroundImage("xl"));

    document.body.clientWidth >= 1600 &&
      this.isChangedOnLoad === false &&
      this.changeBgOnLoad("hd", heroBannerBg);

    document.body.clientWidth >= 1200 &&
      this.isChangedOnLoad === false &&
      this.changeBgOnLoad("xl", heroBannerBg);

    document.body.clientWidth >= 992 &&
      this.isChangedOnLoad === false &&
      this.changeBgOnLoad("lg", heroBannerBg);

    document.body.clientWidth >= 767 &&
      this.isChangedOnLoad === false &&
      this.changeBgOnLoad("md", heroBannerBg);

    document.body.clientWidth >= 576 &&
      this.isChangedOnLoad === false &&
      this.changeBgOnLoad("sm", heroBannerBg);

    document.body.clientWidth >= 0 &&
      this.isChangedOnLoad === false &&
      this.changeBgOnLoad("xs", heroBannerBg);
  };

  changeBgOnLoad = (size: string, heroBannerBg: HTMLDivElement) => {
    heroBannerBg.setAttribute("style", bgStyle(size));
    heroBannerBg.setAttribute(
      "data-background-image",
      getBackgroundImage(size)
    );

    this.isChangedOnLoad = true;
  };
}
