import { Initializer } from "../../../../../utilities/initializer";
import { quotes, swiperLibrary } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { CarouselComponent } from "./carousel.component";

export class MainComponent {
  carouselComponent: CarouselComponent = new CarouselComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const cssLoader = new Loader<HTMLLinkElement>();
    const jsLoader = new Loader<HTMLScriptElement>();

    cssLoader
      .load(swiperLibrary.css, "swiper-css", "link")
      .then((cssElm: HTMLLinkElement) => {
        cssElm &&
          jsLoader
            .load(swiperLibrary.js, "swiper-js", "script")
            .then((jsElm) => {
              cssElm && jsElm && console.log("Swiper library loaded ......!");
              cssElm && jsElm && this.carouselComponent.render(quotes);
            });
      });
  };
}
