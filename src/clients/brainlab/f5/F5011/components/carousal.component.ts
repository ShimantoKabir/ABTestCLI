import {
  arrowSvg,
  emptyStar,
  fullStar,
  halfStar,
  leftArrowSvg,
  rightArrowSvg,
  triggerMetrics,
} from "../common/asset";
import { Review } from "../models/review";

export class CarouselComponent {
  private generateRatingHtml = (rating: number): string => {
    let htmlString: string = "";

    const ratingOutOfFive: number = rating / 2;
    const ratingFraction: number = rating % 2;

    if (ratingFraction === 0) {
      for (let index = 0; index < ratingOutOfFive; index++) {
        htmlString =
          htmlString +
          `<div class="star-img full-star" ><img src="${fullStar}" ></div>`;
      }

      for (let index = 0; index < 5 - ratingOutOfFive; index++) {
        htmlString =
          htmlString +
          `<div class="star-img empty-star" ><img src="${emptyStar}" ></div>`;
      }
    } else {
      const halfReduced = ratingOutOfFive - 0.5;

      for (let index = 0; index < halfReduced; index++) {
        htmlString =
          htmlString +
          `<div class="star-img full-star" ><img src="${fullStar}" ></div>`;
      }

      htmlString =
        htmlString +
        `<div class="star-img half-star" ><img src="${halfStar}" ></div>`;

      const emptyStarCount: number = 5 - (ratingOutOfFive + 0.5);

      for (let index = 0; index < emptyStarCount; index++) {
        htmlString =
          htmlString +
          `<div class="star-img empty-star" ><img src="${emptyStar}" ></div>`;
      }
    }

    return htmlString.trim();
  };

  private getSwiperSlideHtml = (review: Review): string => {
    const htmlString: string = `
      <div class="swiper-slide review-item" >
        <div class="review-item-wrap" >
          <div class="date-and-star" >
            <div class="star-incentivized" >
              <div class="start-icons" >
                ${this.generateRatingHtml(review.rating)}
              </div>
              <div class="incentivized" >
                <p>${review.incentivized}</p>
              </div>
            </div>
            <div class="date" >
              <span>${review.date}<span>
            </div>
          </div>
          <div class="title" >
            <h4>${review.title}</h4>
          </div>
          <div class="teaser" >
            <p>"${review.teaser}</p>
          </div>
          <div class="full-review-link" >
            <a href="${review.allReviewLink}" >Read full review ${arrowSvg}</a>
          </div>
          <div class="reviewer-details" >
            <div class="author" >
              <h5>${review.author}</h5>
            </div>
            <div class="job-description" >
              <p>${review.jobDescription}</p>
            </div>
            ${review.companyDescriptions
              .map((description: string) => {
                return description !== "n/a"
                  ? `<div class="company-description" ><p>${description}</p></div>`
                  : "";
              })
              .join("\n")}
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  private getHtml = (reviews: Review[]): string => {
    const htmlString: string = `
      <div class="carousal-component">
        <div class="component-wrap" >
          <div class="headline" >
            <h3>Reviews</h3>
          </div>
          <div class="swiper carousel">
            <div class="swiper-wrapper">
              ${reviews
                .map((review: Review) => this.getSwiperSlideHtml(review))
                .join("\n")}
            </div>
          </div>
        </div>
        <div class="carousel-controller" >
          <div class="controller-wrap" >
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

  render = (reviews: Review[], footer: null | HTMLDivElement) => {
    const trustradius: null | HTMLDivElement = document.querySelector(
      "div.trustradius-component"
    );

    trustradius && trustradius.classList.add("hide");

    if (!footer) {
      return;
    }

    footer.insertAdjacentHTML("beforebegin", this.getHtml(reviews));
    this.addGoals();
    this.initSwiper();
  };

  addGoals = () => {
    const fullReviewLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("div.full-review-link>a");

    if (!fullReviewLinks || fullReviewLinks.length === 0) {
      return;
    }

    fullReviewLinks.forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", () => {
        triggerMetrics("read-full-review-click");
      });
    });
  };

  initSwiper = () => {
    // @ts-ignore
    if (typeof Swiper === "function") {
      const swiper: any = this.reactive();
      console.log("Swiper object initialized......!");
    } else {
      setTimeout(() => {
        this.initSwiper();
      }, 250);
    }
  };

  reactive = (): any => {
    // @ts-ignore
    return new Swiper(".carousel", {
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
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
        slideChange: function () {
          triggerMetrics("review-slide-change");
        },
      },
    });
  };
}
