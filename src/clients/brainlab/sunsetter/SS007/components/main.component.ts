import { Initializer } from "../../../../../utilities/initializer";

import {
  heroImageLinks,
  imgLinks,
  selectors,
  swiperLibrary,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { CarouselComponent } from "./carousel.component";
import { FormComponent } from "./form.component";

export class MainComponent {
  carouselComponent: CarouselComponent = new CarouselComponent();
  formComponent: FormComponent = new FormComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.3");
  }

  getHeroImageHtml = (imgLink: any, index: number): string => {
    const activeClass: string = index === 0 ? "active" : "";
    const htmlString: string = `<img class="${activeClass} hero-image" src="${imgLink}" alt="hero-image" >`;
    return htmlString.trim();
  };

  getHtml = () => {
    const htmlString: string = `
      <div class="main-component" >
        <div class="component-wrap" >
          <div class="extra-wrap" >
            <div class="hero-component" >
              <div class="component-wrap" >
                <div class="img" >
                  ${heroImageLinks
                    .map((imgLink: any, index: number) =>
                      this.getHeroImageHtml(imgLink, index)
                    )
                    .join("\n")}
                </div>
                <div class="hero-overlay" >
                  <div class="overlay-wrap" >
                    <div class="overlay-text" >
                      <h2 class="step-one" >Transform Your Outdoor Space with SunSetter</h2>
                      <h2 class="step-two" >Elevate Your Outdoor Space with SunSetter Awnings</h2>
                    </div>
                    <div class="overlay-cta" >
                      <a class="price" href="" >Get Pricing</a>
                      <a class="dealer" href="" >Find a Dealer</a>
                    </div>
                  </div>
                </div>
              </div>
              ${this.carouselComponent.getHtml(imgLinks)}
            </div>
            ${this.formComponent.getHtml()}
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

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
              cssElm && jsElm && this.applyModification();
            });
      });
  };

  applyModification = () => {
    const headerSection: null | Element = document.querySelector(
      selectors.header
    );

    if (!headerSection) {
      return;
    }

    headerSection.insertAdjacentHTML("afterend", this.getHtml());
    this.carouselComponent.initSwiper();
    this.formComponent.active();
  };
}
