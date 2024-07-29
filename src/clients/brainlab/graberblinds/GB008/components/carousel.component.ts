import {
  leftArrowSvg,
  rightArrowSvg,
  selectors,
  triggerEvent,
} from "../common/asset";
import { BlindCard } from "../models/blind-card";
import { BlindButtonComponent } from "./blind-button.component";
import { FooterComponent } from "./footer.component";
import { InfoComponent } from "./info.component";

export class CarouselComponent {
  blindButtonComponent: BlindButtonComponent = new BlindButtonComponent();
  infoComponent: InfoComponent = new InfoComponent();
  footerComponent: FooterComponent = new FooterComponent();

  getSwiperSlideHtml = (blindCard: BlindCard, index: number): string => {
    const htmlString: string = `
      <div class="swiper-slide carousel-item-${index}">
        <div class="blind-card" >
          <div class="card-img">
            <img src="${blindCard.imgSrc}" alt="">
          </div>
          <div class="card-content">
            <h2>${blindCard.heading}</h2>
            <p>${blindCard.description}</p>
            <a href="${blindCard.href}" >Shop Now</a>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (blindCards: BlindCard[]): string => {
    const htmlString: string = `
      <div class="product-category" >
        ${this.blindButtonComponent.getHtml(blindCards)}
        <div class="container-carousel">
          <div class="swiper carousel">
            <div class="swiper-wrapper">
            ${blindCards
              .map((card: BlindCard, index: number) =>
                this.getSwiperSlideHtml(card, index)
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
        ${this.infoComponent.getHtml()}
        ${this.footerComponent.getHtml()}
      </div>
    `;

    return htmlString.trim();
  };

  render = (blindCards: BlindCard[]) => {
    const heroBanner: null | HTMLDivElement = document.querySelector(
      selectors.heroBanner
    );

    if (!heroBanner) {
      return;
    }

    heroBanner.insertAdjacentHTML("afterend", this.getHtml(blindCards));

    const swiper: any = this.reactive(blindCards.length);

    this.blindButtonComponent.onClick((id: string) => {
      swiper.slideTo(Number(id), 0);
      this.makeSlideActive(id);
    });
  };

  reactive = (totalSlide: number): any => {
    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      centeredSlidesBounds: true,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
      on: {
        sliderMove: function () {
          triggerEvent("window-treatments-blinds-carousel-move");
        },
      },
    });
  };

  makeSlideActive = (id: string) => {
    // swiper-slide carousel-item-
    const slides: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.swiper-slide");

    slides != null &&
      slides.length > 0 &&
      slides.forEach((slide: HTMLDivElement) => {
        slide.classList.remove("active");

        if (slide.classList.contains("carousel-item-" + id)) {
          slide.classList.add("active");
        }
      });
  };
}
