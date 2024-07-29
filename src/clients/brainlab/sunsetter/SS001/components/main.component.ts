import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { HeroOverlayComponent } from "./hero-overlay.component";

export class MainComponent {
  heroOverlayComponent: HeroOverlayComponent = new HeroOverlayComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.cloneSlide();
    this.heroOverlayComponent.render();
  };

  cloneSlide = () => {
    const slideshow: null | HTMLDivElement = document.querySelector(
      selectors.slideshow
    );

    const firstSlide: null | HTMLDivElement = document.querySelector(
      selectors.slideshow + ">div:first-child"
    );

    if (!slideshow || !firstSlide) {
      return;
    }

    const clonedFirstSlide: Element = firstSlide.cloneNode(true) as Element;

    slideshow.insertAdjacentElement("afterbegin", clonedFirstSlide);
  };
}
