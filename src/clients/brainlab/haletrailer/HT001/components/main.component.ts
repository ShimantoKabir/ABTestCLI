import { Initializer } from "../../../../../utilities/initializer";
import { Poller } from "../../../../../utilities/poller";
import { selectors, swiperCss, swiperJs } from "../common/asset";
import { TestInfo } from "../common/test.info";
import initSwiper from "../swiper/init.swiper";
import { addCssToPage, addJsToPage } from "../swiper/swiper.config";
import { ManufacturerComponent } from "./manufacturer.component";

export class MainComponent {
  private poller: Poller | null = null;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
    this.poller = new Poller();
  }

  init = (): void => {
    addCssToPage(swiperCss, TestInfo.ID.toString() + "__swiper-css");
    addJsToPage(swiperJs, TestInfo.ID.toString() + "__swiper-js");

    // @ts-ignore
    this.poller?.poll([() => typeof window.Swiper === "function"], () => {
      const manufacturer = new ManufacturerComponent();
      document
        .querySelector(selectors.clients)
        ?.insertAdjacentHTML("afterend", manufacturer.render());
      initSwiper(`.${TestInfo.ID.toString()}__swiper`);
    });
  };
}
