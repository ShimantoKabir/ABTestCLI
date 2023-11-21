import { selectors, sliderMoveRange } from "../common/asset";
import { PlanService } from "../services/plan.service";

export class RangeComponent {
  private planService!: PlanService;

  constructor(planService: PlanService) {
    this.planService = planService;
  }

  getHtml = (): string => {
    const htmlString: string = `
      <div class="range-component" ><input type="range" min="1" max="100" value="1" step="33"></div>
    `;
    return htmlString.trim();
  };

  render = () => {
    const mostPlans: null | Element = document.querySelector(
      selectors.mostPlans
    );
    if (!mostPlans) {
      return;
    }

    mostPlans.insertAdjacentHTML("afterend", this.getHtml());
    this.makeInteractive();
  };

  makeInteractive = () => {
    const range: HTMLInputElement | null = document.querySelector(
      selectors.range
    );

    if (!range) {
      return;
    }

    let prevRangeValue: number = 0;

    range.oninput = () => {
      const currentRangeValue: number = Number(range.value);

      if (currentRangeValue > prevRangeValue) {
        const isRangeFound = sliderMoveRange.find(
          (range: number) => range === currentRangeValue
        );

        isRangeFound && this.planService.clickArrow("next");
      } else {
        const isRangeFound = sliderMoveRange.find(
          (range: number) => range === currentRangeValue
        );

        isRangeFound && this.planService.clickArrow("prev");
      }

      prevRangeValue = currentRangeValue;
    };
  };
}
