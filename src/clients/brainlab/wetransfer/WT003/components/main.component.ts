import { Initializer } from "../../../../../utilities/initializer";
import { selectors, swiperLibrary } from "../common/asset";
import { Loader } from "../common/loader";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";
import { CarouselComponent } from "./carousel.component";

export class MainComponent {
  carouselComponent: CarouselComponent = new CarouselComponent();
  carouselItems: string[] = [];
  isPageLoaded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  loadSwiperLibrary = () => {
    const cssLoader = new Loader<HTMLLinkElement>();
    const jsLoader = new Loader<HTMLScriptElement>();

    cssLoader
      .load(swiperLibrary.css, "swiper-css", "link")
      .then((cssElm: HTMLLinkElement) => {
        cssElm &&
          jsLoader
            .load(swiperLibrary.js, "swiper-js", "script")
            .then((jsElm) => {
              if (cssElm && jsElm) {
                console.log("Swiper library loaded ......!");
              }
            });
      });
  };

  init = (): void => {
    const testObserver = new TestObserver("body");

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (target.innerHTML.length > 91000 && !this.isPageLoaded) {
          this.applyModification();
          console.log("Page loaded....!");
          this.isPageLoaded = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  applyModification = () => {
    this.loadSwiperLibrary();

    const animationContainers: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.animationContainers);

    animationContainers.forEach((container: HTMLDivElement) => {
      container.classList.add("swiper-slide");
      this.carouselItems.push(container.outerHTML);
    });

    this.carouselComponent.render(this.carouselItems);
  };
}
