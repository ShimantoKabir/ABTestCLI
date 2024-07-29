import {
  leftArrowSvg,
  rightArrowSvg,
  selectors,
  triggerEvent,
} from "../common/asset";

export class CarouselComponent {
  paginationLastChild: null | HTMLSpanElement = null;
  paginationFirstChild: null | HTMLSpanElement = null;
  carouselController: null | HTMLDivElement = null;
  isPaginationChildFound: boolean = false;

  private getHtml = (carouselItems: string[]): string => {
    const htmlString: string = `
      <div class="carousal-component">
        <div class="component-wrap" >
          <div class="swiper carousel">
            <div class="swiper-wrapper">
              ${carouselItems.map((item: string) => item).join("\n")}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="carousel-controller" >
          <div class="controller-wrap" >
            <div class="carousel-arrow carousel-next">
              <div class="svg" >
                ${rightArrowSvg}
              </div>
            </div>
            <div class="carousel-arrow carousel-prev">
              <div class="svg" >
                ${leftArrowSvg}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = (carouselItems: string[]) => {
    const mediaSection = document.querySelector(selectors.mediaSection);

    if (mediaSection === null) {
      return;
    }

    mediaSection.insertAdjacentHTML("beforebegin", this.getHtml(carouselItems));
    this.initSwiper();
    this.addGoals();
  };

  addGoals = () => {
    const learnMoreLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("div.carousal-component a");

    if (!learnMoreLinks || learnMoreLinks.length === 0) {
      return;
    }

    learnMoreLinks.forEach((link: HTMLAnchorElement, index: number) => {
      link.addEventListener("click", () => {
        triggerEvent(`learn-more-${index + 1}-cta-click`);
      });
    });
  };

  initSwiper = () => {
    // @ts-ignore
    if (typeof Swiper === "function") {
      const swiper: any = this.activeSwiper();
    } else {
      setTimeout(() => {
        this.initSwiper();
      }, 250);
    }
  };

  activeSwiper = (): any => {
    console.log("Swiper object initialized......!");

    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: "auto",
      spaceBetween: 5,
      // freeMode: true,
      parallax: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
      on: {
        slideChange: () => {
          // this.findPaginationLastChild();

          // this.isPaginationChildFound &&
          //   this.paginationLastChild &&
          //   this.paginationFirstChild &&
          //   this.carouselController &&
          //   this.hideAndShowArrow(
          //     this.paginationFirstChild,
          //     this.paginationLastChild,
          //     this.carouselController
          //   );

          triggerEvent("carousal-slide-changed");
        },
      },
    });
  };

  findPaginationLastChild = () => {
    if (this.paginationLastChild && this.carouselController) {
      return;
    }

    this.paginationLastChild = document.querySelector(
      "div.swiper-pagination>span:last-child"
    );

    this.paginationFirstChild = document.querySelector(
      "div.swiper-pagination>span:first-child"
    );

    this.carouselController = document.querySelector(
      "div.carousel-controller>div.controller-wrap"
    );

    if (
      this.paginationLastChild &&
      this.paginationFirstChild &&
      this.carouselController
    ) {
      this.isPaginationChildFound = true;
    }

    console.log("Finding pagination last child ......!");
  };

  hideAndShowArrow = (
    paginationFirstChild: HTMLSpanElement,
    paginationLastChild: HTMLSpanElement,
    carouselController: HTMLDivElement
  ) => {
    if (
      paginationLastChild.classList.contains("swiper-pagination-bullet-active")
    ) {
      carouselController.firstElementChild &&
        carouselController.firstElementChild.classList.add("hide");
      carouselController.lastElementChild &&
        carouselController.lastElementChild.classList.remove("hide");
      carouselController.lastElementChild &&
        carouselController.lastElementChild.classList.add("vanish");
    } else {
      carouselController.lastElementChild &&
        carouselController.lastElementChild.classList.remove("vanish");
    }

    if (
      paginationFirstChild.classList.contains("swiper-pagination-bullet-active")
    ) {
      carouselController.firstElementChild &&
        carouselController.firstElementChild.classList.remove("hide");
      carouselController.lastElementChild &&
        carouselController.lastElementChild.classList.add("hide");
    }
  };
}
