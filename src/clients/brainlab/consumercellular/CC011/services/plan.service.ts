import { mBoxNames, selectors, sliderMoveRange } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ServiceComponent } from "../components/service.component";

export class PlanService {
  nextArrow!: HTMLDivElement;
  prevArrow!: HTMLDivElement;
  range!: HTMLInputElement;
  variation: string = TestInfo.VARIATION.toString();
  sectionNumber: number =
    this.variation === "1" || this.variation === "control" ? 3 : 4;

  getArrows = () => {
    const nextArrow: null | HTMLDivElement = document.querySelector(
      selectors.nextArrow
    );
    const prevArrow: null | HTMLDivElement = document.querySelector(
      selectors.pervArrow
    );

    if (!nextArrow || !prevArrow) {
      return;
    }

    nextArrow.addEventListener("click", () => {
      this.variation === "control" &&
        ServiceComponent.triggerMetrics(mBoxNames.slideMove);
    });
    prevArrow.addEventListener("click", () => {
      this.variation === "control" &&
        ServiceComponent.triggerMetrics(mBoxNames.slideMove);
    });

    this.nextArrow = nextArrow;
    this.prevArrow = prevArrow;
  };

  clickArrow = (arrowType: string) => {
    arrowType === "next" && this.nextArrow.click();
    arrowType === "prev" && this.prevArrow.click();
    ServiceComponent.triggerMetrics(mBoxNames.slideMove);
  };

  addSwipeListener = (callback: Function) => {
    const slickList: null | HTMLDivElement = document.querySelector(
      selectors.mobileSlickList(this.sectionNumber)
    );

    if (!slickList || slickList.childNodes.length == 0) {
      setTimeout(() => {
        this.addSwipeListener(callback);
      }, 25);
    }

    slickList &&
      slickList.addEventListener("touchend", () => {
        ServiceComponent.triggerMetrics(mBoxNames.slideMove);
        this.getSliderButtons((range: number) => {
          callback(range);
        });
      });
  };

  getSliderButtons = (callback: Function) => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(
        selectors.mobileSlickList(this.sectionNumber) +
          ">div.slick-track>button"
      );

    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      if (button.classList.contains("slick-center")) {
        const index: string | null = button.getAttribute("data-slick-index");
        const numberIndex: number = Number(index);

        if (numberIndex >= 0 && numberIndex !== 4) {
          const needToActiveRange: number = sliderMoveRange[numberIndex];
          callback(needToActiveRange);
        }
      }
    });
  };
}
