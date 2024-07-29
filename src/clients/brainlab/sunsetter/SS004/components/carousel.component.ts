import {
  leftArrowSvg,
  quotationIcon,
  rightArrowSvg,
  selectors,
  triggerEvent,
} from "../common/asset";
import { Quote } from "../model/quote";

export class CarouselComponent {
  getSwiperSlideHtml = (quote: Quote, index: number): string => {
    const className: string = index % 2 === 0 ? "" : "card-blue";

    const htmlString: string = `
      <div class="swiper-slide carousel-item-${index}">
        <div class="quote-card ${className}" >
          <div class="quote-svg">
            ${quotationIcon}
          </div>
          <div class="quote-quotation">
            <p>${quote.quotation}</p>
          </div>
          <div class="quote-star">
            <p>${quote.startIcon}</p>
          </div>
          <div class="quote-name-location">
            <p>-${quote.name}, <strong>${quote.location}</strong></p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (quotes: Quote[]): string => {
    const htmlString: string = `
      <div class="quotation-component" >
        <div class="swiper carousel">
          <div class="swiper-wrapper">
          ${quotes
            .map((quote: Quote, index: number) =>
              this.getSwiperSlideHtml(quote, index)
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
          <div class="carousel-pagination"></div>
          <div class="carousel-next">
            <div class="svg" >
              ${rightArrowSvg}
            </div>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = (quotes: Quote[]) => {
    const offerSection: null | HTMLDivElement = document.querySelector(
      selectors.offerSection
    );

    if (!offerSection) {
      return;
    }

    offerSection.insertAdjacentHTML("afterend", this.getHtml(quotes));
    this.initSwiper();
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
    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: 1,
      spaceBetween: 10,
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
}
