import { Initializer } from "../../../../../utilities/initializer";
import {
  mboxNames,
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
  footer: null | HTMLDivElement = null;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  getTrustRadiusHtml = (variation: string): string => {
    const v1HtmlString: string = `
      <div class="trustradius-component hide">
        <div class="container" >
          <div class="trustradius-tqw" data-trustradius-id="65eb2c450ef0590906e780b0"></div>
        </div>
      </div>
    `;

    const v2HtmlString: string = `
      <div class="trustradius-component hide">
        <div class="container" >
          <div class="trustradius-tqw" data-trustradius-id="65c0f13fe4798abb8b45d41a"></div>
        </div>
      </div>
    `;
    return variation === "2" ? v1HtmlString.trim() : v2HtmlString.trim();
  };

  init = (): void => {
    this.variation !== "control" && this.loadTrustRadius();
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
                this.carouselComponent.render(this.reviewModels, this.footer);
              }
            });
      });
  };

  loadTrustRadius = () => {
    this.footer = document.querySelector(selectors.footer);

    if (this.footer === null) {
      return;
    }

    this.footer.insertAdjacentHTML(
      "afterend",
      this.getTrustRadiusHtml(this.variation)
    );

    const loader = new Loader<HTMLScriptElement>();

    loader
      .load(scriptLink, TestInfo.ID.toString(), "script")
      .then((element) => {
        console.log("JS loaded...!");
        this.observeReviewLoadFinish();
      });
  };

  addGoals = () => {
    const testObserver = new TestObserver(selectors.success);

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;
        if (target.classList.contains("show") && !this.isFormSubmitted) {
          triggerMetrics(mboxNames.formSubmittedSuccessfully);
          this.isFormSubmitted = true;
        }
      }
    };

    testObserver.observe(callback);

    const form: null | HTMLFormElement = document.querySelector(selectors.form);

    form &&
      form.addEventListener("click", () => {
        triggerMetrics(mboxNames.anywhereClickInForm);
      });

    const submitButton: null | HTMLButtonElement = document.querySelector(
      selectors.submitButton
    );

    submitButton &&
      submitButton.addEventListener("click", () => {
        triggerMetrics(mboxNames.submitButtonClick);
      });
  };

  observeReviewLoadFinish = () => {
    const trustradius = new TestObserver("div.trustradius-tqw");

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (target.innerHTML.length > 91150 && !this.isReviewLoaded) {
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
}
