import { Initializer } from "../../../../../utilities/initializer";
import {
  scriptLink,
  selectors,
  swiperLibrary,
  triggerMetrics,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";
import { Loader } from "../loaders/loader";
import { Review } from "../models/review";
import { CarouselComponent } from "./carousal.component";

export class MainComponent {
  isFormSubmitted: boolean = false;
  variation: string = TestInfo.VARIATION.toString();
  isReviewLoaded: boolean = false;
  reviewModels: Review[] = [];
  carouselComponent: CarouselComponent = new CarouselComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getTrustRadiusHtml = (): string => {
    const htmlString: string = `
      <div class="trustradius-component hide">
        <div class="container" >
          <div class="trustradius-tqw" data-trustradius-id="65c0f13fe4798abb8b45d41a"></div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  init = (): void => {
    this.variation !== "control" && this.loadTrustRadius();
  };

  loadTrustRadius = () => {
    const footer = document.querySelector(selectors.footer);

    if (footer === null) {
      return;
    }

    footer.insertAdjacentHTML("afterend", this.getTrustRadiusHtml());

    const loader = new Loader<HTMLScriptElement>();

    loader
      .load(scriptLink, TestInfo.ID.toString(), "script")
      .then((element) => {
        console.log("JS loaded...!");
        this.observeReviewLoadFinish();
      });
  };

  observeReviewLoadFinish = () => {
    const trustradius = new TestObserver("div.trustradius-tqw");

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (target.innerHTML.length > 91000 && !this.isReviewLoaded) {
          console.log("Review loaded....!");
          this.collectData();
          this.isReviewLoaded = true;
        }
      }
    };

    trustradius.observe(callback);
  };

  collectData = () => {
    const reviews: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.tr-reviews-viewport>div");

    if (!reviews || reviews.length === 0) {
      return;
    }

    reviews.forEach((review: HTMLDivElement) => {
      const titleElm: null | HTMLAnchorElement = review.querySelector(
        "div.tr-review-title>a"
      );

      const ratingElm: null | HTMLSpanElement = review.querySelector(
        "span.tr-rating>span:first-child"
      );

      const incentivizedElm: null | HTMLSpanElement =
        review.querySelector("span.incentivized");

      const dateElm: null | HTMLDivElement =
        review.querySelector("div.tr-review-date");

      const teaserElm: null | HTMLParagraphElement = review.querySelector(
        "div.tr-review-teaser>p"
      );

      const authorElm: null | HTMLSpanElement =
        review.querySelector("span.tr-author");

      const jobDescriptionElm: null | HTMLSpanElement = review.querySelector(
        "span.tr-job-description"
      );

      const companyDescriptionElms: NodeListOf<HTMLSpanElement> =
        review.querySelectorAll("span.tr-company-description");

      const reviewModel: Review = this.assignDataToModel(
        titleElm,
        ratingElm,
        incentivizedElm,
        dateElm,
        teaserElm,
        authorElm,
        jobDescriptionElm,
        companyDescriptionElms
      );

      this.reviewModels.push(reviewModel);
    });

    this.reviewModels.length > 0 && this.loadSwiperLibrary();
  };

  assignDataToModel = (
    titleElm: null | HTMLAnchorElement,
    ratingElm: null | HTMLSpanElement,
    incentivizedElm: null | HTMLSpanElement,
    dateElm: null | HTMLDivElement,
    teaserElm: null | HTMLParagraphElement,
    authorElm: null | HTMLSpanElement,
    jobDescriptionElm: null | HTMLSpanElement,
    companyDescriptionElms: NodeListOf<HTMLSpanElement>
  ): Review => {
    const reviewModel: Review = new Review();

    if (titleElm) {
      reviewModel.title = titleElm.textContent;
      reviewModel.allReviewLink = titleElm.getAttribute("href");
    }

    if (ratingElm) {
      const content = ratingElm.getAttribute("content");

      if (content) {
        reviewModel.rating = Number(content);
      }
    }

    if (incentivizedElm) {
      reviewModel.incentivized = incentivizedElm.textContent;
    }

    if (dateElm) {
      reviewModel.date = dateElm.textContent;
    }

    if (teaserElm) {
      reviewModel.teaser = teaserElm.textContent;
    }

    if (authorElm) {
      reviewModel.author = authorElm.textContent;
    }

    if (jobDescriptionElm) {
      reviewModel.jobDescription = jobDescriptionElm.textContent;
    }

    if (companyDescriptionElms && companyDescriptionElms.length > 0) {
      companyDescriptionElms.forEach((description: HTMLSpanElement) => {
        if (description.textContent) {
          reviewModel.companyDescriptions.push(description.textContent);
        }
      });
    }

    return reviewModel;
  };

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
                this.carouselComponent.render(this.reviewModels);
                this.addReviewToSecondaryNav();
                this.addGoals();
              }
            });
      });
  };

  getReviewNavHtml = (className: string) => {
    const htmlString: string = `
      <li class="${className}">
        <a href="#reviews" class="u07__anchor review-nav">
          <span>Reviews</span>
        </a>
      </li>
    `;

    return htmlString.trim();
  };

  addReviewToSecondaryNav = () => {
    const resourceSecondaryNavs: null | NodeListOf<HTMLUListElement> =
      document.querySelectorAll(selectors.resourceSecondaryNav);

    if (!resourceSecondaryNavs || resourceSecondaryNavs.length === 0) {
      return;
    }

    resourceSecondaryNavs.forEach((nav: HTMLUListElement) => {
      nav.insertAdjacentHTML(
        "beforebegin",
        this.getReviewNavHtml(nav.className)
      );
    });
  };

  addGoals = () => {
    const reviewNavs: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("a.review-nav");

    console.log("review-navs=", reviewNavs);

    if (!reviewNavs || reviewNavs.length === 0) {
      return;
    }

    reviewNavs.forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", () => {
        triggerMetrics("review-nav-click");
      });
    });
  };
}
