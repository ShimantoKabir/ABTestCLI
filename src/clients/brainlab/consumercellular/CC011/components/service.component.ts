import { sliderMoveRange } from "../common/asset";
import { PlanService } from "../services/plan.service";

export class ServiceComponent {
  prevRangeValue: number = 1;
  planService!: PlanService;
  isCtaClicked: boolean = false;

  constructor(planService: PlanService) {
    this.planService = planService;
  }

  evaluateMovement = (currentRangeValue: number) => {
    if (this.prevRangeValue === currentRangeValue) {
      this.isCtaClicked = true;
    } else {
      this.isCtaClicked = false;
    }

    if (currentRangeValue > this.prevRangeValue) {
      const isRangeFound = sliderMoveRange.find(
        (range: number) => range === currentRangeValue
      );

      isRangeFound && !this.isCtaClicked && this.planService.clickArrow("next");
    } else {
      const isRangeFound = sliderMoveRange.find(
        (range: number) => range === currentRangeValue
      );

      isRangeFound && !this.isCtaClicked && this.planService.clickArrow("prev");
    }

    this.prevRangeValue = currentRangeValue;
  };

  setPerviousRangeValue = (value: number) => {
    this.prevRangeValue = value;
  };

  static triggerMetrics = (mboxName: string) => {
    console.log("mbox=", mboxName);
    // @ts-ignore
    adobe.target.trackEvent({ mbox: mboxName });
  };
}
