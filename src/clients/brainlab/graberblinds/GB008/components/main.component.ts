import { constants } from "fs-extra";
import { Initializer } from "../../../../../utilities/initializer";
import { swiperLibrary } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { CarouselComponent } from "./carousel.component";
import { ServiceComponent } from "./service.component";
import { BlindCard } from "../models/blind-card";

export class MainComponent {
  carouselComponent: CarouselComponent = new CarouselComponent();
  serviceComponent: ServiceComponent = new ServiceComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const blindCards: BlindCard[] =
      this.serviceComponent.collectBlindCardData();

    if (blindCards.length === 0) {
      return;
    }

    const cssLoader = new Loader<HTMLLinkElement>();
    const jsLoader = new Loader<HTMLScriptElement>();

    cssLoader
      .load(swiperLibrary.css, "swiper-css", "link")
      .then((cssElm: HTMLLinkElement) => {
        cssElm &&
          jsLoader
            .load(swiperLibrary.js, "swiper-js", "script")
            .then((jsElm) => {
              jsElm && console.log("Swiper-loaded...!");
              jsElm && this.carouselComponent.render(blindCards);
            });
      });
  };
}
