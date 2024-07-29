import {
  leftArrowSvg,
  products,
  rightArrowSvg,
  triggerEvent,
} from "../common/asset";
import { Card } from "../models/card";

export class CarouselComponent {
  static getSwiperSlideHtml = (card: Card, index: number): string => {
    const htmlString: string = `
      <div class="swiper-slide carousel-item-${index}" slide-link="${card.href}" >
        <div class="blind-card" >
          <div class="card-img">
            <img src="${card.imgSrc}" alt="">
          </div>
          <div class="card-content">
            <h2>${card.heading}</h2>
            <p>${card.description}</p>
            <a class="link" href="${card.href}" >Take a look</a>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (category: string, products: Card[], index: number): string => {
    const activeClassName: string = index === 0 ? "active" : "";

    const htmlString: string = `
      <div class="carousel-component ${category}-carousel ${activeClassName}" >
        <div class="component-wrap" >
          <div class="container-carousel">
          <div class="swiper carousel-${category}">
            <div class="swiper-wrapper">
            ${products
              .map((card: Card, index: number) =>
                CarouselComponent.getSwiperSlideHtml(card, index)
              )
              .join("\n")}
            </div>
          </div>
          <div class="carousel-controller" >
            <div class="${category}-carousel-prev carousel-prev">
              <div class="svg" >
                ${leftArrowSvg}
              </div>
            </div>
            <div class="${category}-carousel-pagination carousel-pagination"></div>
            <div class="${category}-carousel-next carousel-next">
              <div class="svg" >
                ${rightArrowSvg}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = (category: string, products: Card[], index: number) => {
    return this.getHtml(category, products, index);
  };

  reactive = (category: string): any => {
    console.debug(`Swiper ${category} initializing....!`);

    // @ts-ignore
    return new Swiper(".carousel-" + category, {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: `.${category}-carousel-next`,
        prevEl: `.${category}-carousel-prev`,
      },
      pagination: {
        el: `.${category}-carousel-pagination`,
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        499: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1140: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
      },
      on: {
        sliderMove: function () {
          triggerEvent("window-treatments-blinds-carousel-move");
        },
      },
    });
  };

  addCardClickListener = () => {
    const slides: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.swiper-slide");
    slides.forEach((slide: HTMLDivElement) => {
      slide.addEventListener("click", () => {
        const cardLink: string | null = slide.getAttribute("slide-link");
        triggerEvent("card-click");
        window.location.href = `${window.location.origin}${cardLink}`;
      });
    });
  };
}
