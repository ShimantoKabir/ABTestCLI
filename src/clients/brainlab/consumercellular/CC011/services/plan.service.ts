import { selectors, sliderMoveRange } from "../common/asset";

export class PlanService {
  nextArrow!: HTMLDivElement;
  prevArrow!: HTMLDivElement;
  range!: HTMLInputElement;

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
      setTimeout(() => {
        this.syncRange();
      }, 50);
    });
    prevArrow.addEventListener("click", () => {
      setTimeout(() => {
        this.syncRange();
      }, 50);
    });

    this.nextArrow = nextArrow;
    this.prevArrow = prevArrow;

    this.getRange();
  };

  clickArrow = (arrowType: string) => {
    arrowType === "next" && this.nextArrow.click();
    arrowType === "prev" && this.prevArrow.click();
  };

  syncRange = () => {
    const activePlan: null | HTMLButtonElement = document.querySelector(
      selectors.mobileActivePlan
    );

    if (!activePlan) {
      return;
    }

    const index: number = Number(activePlan.getAttribute("data-slick-index"));

    const rangeValue: string = sliderMoveRange[index].toString();
    this.setRange(rangeValue);
  };

  getRange = () => {
    const range: HTMLInputElement | null = document.querySelector(
      selectors.range
    );

    if (!range) {
      return;
    }

    this.range = range;
  };

  setRange = (value: string) => {
    this.range.value = value;
  };
}
