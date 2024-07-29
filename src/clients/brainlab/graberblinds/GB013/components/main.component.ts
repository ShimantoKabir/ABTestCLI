import { Initializer } from "../../../../../utilities/initializer";
import {
  products,
  selectors,
  swiperLibrary,
  triggerEvent,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { CarouselComponent } from "./carousel.component";

export class MainComponent {
  carouselComponent: CarouselComponent = new CarouselComponent();

  constructor() {
    Initializer.init(TestInfo, "1.1.5");
  }

  loadSwiper = () => {
    const cssLoader = new Loader<HTMLLinkElement>();
    const jsLoader = new Loader<HTMLScriptElement>();

    cssLoader
      .load(swiperLibrary.css, "swiper-css", "link")
      .then((cssElm: HTMLLinkElement) => {
        cssElm &&
          jsLoader
            .load(swiperLibrary.js, "swiper-js", "script")
            .then((jsElm) => {
              jsElm && console.debug("Swiper library loaded...!");
              jsElm && this.activeCarousals();
            });
      });
  };

  activeCarousals = () => {
    console.debug("Searching swiper....!");
    // @ts-ignore
    if (typeof Swiper === "function") {
      products.forEach((product: any) => {
        this.carouselComponent.reactive(product.name);
      });
    } else {
      this.activeCarousals();
    }
  };

  getHtml = () => {
    const htmlString: string = `
      <div class="main-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h1>Explore Graber’s Wide Range of Products</h1>
          </div>
          <div class="category-buttons" >
            <div class="buttons-container" >
            ${products
              .map(
                (product: any) =>
                  `<button class="${product.name}-shade" >${product.name}s</button>`
              )
              .join("\n")}
            </div>
          </div>
          <div class="description" >
            <p>Graber shades blend form and function to increase comfort and convenience for every home. Choose from a wide selection of designs that offer privacy, precise light control, easy operation, and protection from excess heat, glare, and UV rays—in on-trend colors and materials.</p>
          </div>
          ${products
            .map((product: any, index: number) =>
              this.carouselComponent.render(product.name, product.list, index)
            )
            .join("\n")}
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  init = (): void => {
    const homePageCarousel: null | HTMLDivElement = document.querySelector(
      selectors.homePageCarousel
    );

    if (!homePageCarousel) {
      return;
    }

    homePageCarousel.insertAdjacentHTML("beforeend", this.getHtml());
    this.loadSwiper();
    this.addCategoryButtonListener();
    this.carouselComponent.addCardClickListener();
  };

  addCategoryButtonListener = () => {
    const categoryButtons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("div.buttons-container>button");

    const carousels: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.carousel-component");

    if (
      !categoryButtons ||
      categoryButtons.length === 0 ||
      !carousels ||
      carousels.length === 0
    ) {
      return;
    }

    categoryButtons[0].classList.add("active");

    categoryButtons.forEach((btn: HTMLButtonElement, index: number) => {
      btn.addEventListener("click", () => {
        this.removeActive(categoryButtons, carousels);
        btn.classList.add("active");
        carousels[index].classList.add("active");
        triggerEvent("navigation-button-click");
      });
    });
  };

  removeActive = (
    categoryButtons: NodeListOf<HTMLButtonElement>,
    carousels: NodeListOf<HTMLDivElement>
  ) => {
    categoryButtons.forEach((btn: HTMLButtonElement) => {
      btn.classList.remove("active");
    });

    carousels.forEach((carousel: HTMLDivElement) => {
      carousel.classList.remove("active");
    });
  };
}
