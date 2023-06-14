import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { VideoComponent } from "./video.component";

export class MainComponent {
  private heroBannerBtnText: string = "Watch the video";
  private modelOpenClassName: string = "f5modal--open";

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const heroBannerBtnElm: Element | null = document.querySelector<Element>(
      selectors.heroBannerBtnSelector
    );

    if (heroBannerBtnElm) {
      heroBannerBtnElm.removeAttribute("href");
      heroBannerBtnElm.textContent = this.heroBannerBtnText;

      heroBannerBtnElm.addEventListener("click", () => {
        this.openOrCloseVideo(true);

        const videoWrapperElm: Element | null = document.querySelector<Element>(
          selectors.videoWrapperSelector
        );

        const videoCloseBtnElm: Element | null =
          document.querySelector<Element>(selectors.videoCloseBtnSelector);

        if (videoWrapperElm) {
          videoWrapperElm.addEventListener("click", () => {
            this.openOrCloseVideo(false);
          });
        }

        if (videoCloseBtnElm) {
          videoCloseBtnElm.addEventListener("click", () => {
            this.openOrCloseVideo(false);
          });
        }
      });
    }
  };

  openOrCloseVideo = (needToOpen: boolean): void => {
    if (needToOpen) {
      document
        .querySelector("body")
        ?.insertAdjacentHTML("beforeend", VideoComponent.getHtml());
    } else {
      document.querySelector(selectors.videoWrapperSelector)?.remove();
    }

    document.querySelector("html")?.classList.toggle(this.modelOpenClassName);
  };
}
