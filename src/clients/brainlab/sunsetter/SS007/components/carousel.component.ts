import { leftArrowSvg, rightArrowSvg, triggerEvent } from "../common/asset";

export class CarouselComponent {
  getSwiperSlideHtml = (imgLink: any, index: number): string => {
    const activeClass: string = index === 0 ? "active" : "";

    const htmlString: string = `
      <div class="swiper-slide carousel-item-${index}">
        <div class="image-card ${activeClass}" serial="${imgLink.serial}" >
          <img src="${imgLink.link}" >
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (imgLinks: any): string => {
    const htmlString: string = `
      <div class="carousel-component" >
        <div class="component-wrap" >
          <div class="swiper carousel">
            <div class="swiper-wrapper">
            ${imgLinks
              .map((imgLink: string, index: number) =>
                this.getSwiperSlideHtml(imgLink, index)
              )
              .join("\n")}
            </div>
          </div>
          <div class="carousel-controller" >
            <div class="carousel-prev">
              <div class="svg" >
                ${leftArrowSvg}
              </div>
            </div>
            <div class="carousel-next">
              <div class="svg" >
                ${rightArrowSvg}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  initSwiper = () => {
    // @ts-ignore
    if (typeof Swiper === "function") {
      const swiper: any = this.reactive();
      console.log("Swiper initialize..!");
    } else {
      setTimeout(() => {
        this.initSwiper();
      }, 250);
    }
  };

  reactive = (): any => {
    this.addImageListener();
    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: 1,
      spaceBetween: 10,
      autoplay: false,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
      pagination: {
        el: ".carousel-pagination",
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        420: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1066: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
      on: {
        slideChange: function () {
          triggerEvent("review-slide-change");
        },
      },
    });
  };

  addImageListener = () => {
    const images: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.image-card");
    const heroImages: null | NodeListOf<HTMLImageElement> =
      document.querySelectorAll("img.hero-image");

    if (
      !images ||
      !heroImages ||
      images.length === 0 ||
      heroImages.length === 0
    ) {
      return;
    }

    images.forEach((imgCard: HTMLDivElement, index: number) => {
      imgCard.addEventListener("click", () => {
        this.removeActive(images, heroImages);
        imgCard.classList.add("active");
        const serial: null | string = imgCard.getAttribute("serial");
        serial && heroImages[Number(serial)].classList.add("active");
      });
    });
  };

  removeActive = (
    images: NodeListOf<HTMLDivElement>,
    heroImages: NodeListOf<HTMLImageElement>
  ) => {
    images.forEach((imgCard: HTMLDivElement, index: number) => {
      imgCard.classList.remove("active");
    });

    heroImages.forEach((image: HTMLImageElement, index: number) => {
      image.classList.remove("active");
    });
  };
}
