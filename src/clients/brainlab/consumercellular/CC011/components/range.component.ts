import { selectors, step } from "../common/asset";
import { PlanService } from "../services/plan.service";
import { ServiceComponent } from "./service.component";

export class RangeComponent {
  private planService!: PlanService;
  private serviceComponent!: ServiceComponent;

  constructor(planService: PlanService) {
    this.planService = planService;
    this.serviceComponent = new ServiceComponent(this.planService);
  }

  getHtml = (): string => {
    const htmlString: string = `
      <div class="range-component" ><input type="range" min="1" max="100" value="1" step="${step}"></div>
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
      this.serviceComponent.evaluateMovement(currentRangeValue);
    };
  };

  activeNth = (nth: number) => {
    const range: HTMLInputElement | null = document.querySelector(
      selectors.range
    );

    if (!range) {
      return;
    }

    range.value = nth.toString();
    this.serviceComponent.setPerviousRangeValue(nth);
  };
}
