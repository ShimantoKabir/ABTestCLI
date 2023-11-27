import { gbRange, selectors, sliderMoveRange, step } from "../common/asset";
import { PlanService } from "../services/plan.service";
import { ServiceComponent } from "./service.component";

export class GbComponent {
  planService!: PlanService;
  serviceComponent!: ServiceComponent;

  constructor(planService: PlanService) {
    this.planService = planService;
    this.serviceComponent = new ServiceComponent(this.planService);
  }

  getGbCart = (gb: string, index: number) => {
    const htmlString: string = `
      <div class="gb-cart" >
        <button 
          id="${sliderMoveRange[index]}" 
          class="${index === 0 ? "active" : ""}" 
        >
        ${gb}
        </button>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="gb-component" >
      ${gbRange
        .map((gb: string, index: number) => this.getGbCart(gb, index))
        .join("\n")}
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const actionLink: HTMLDivElement | null = document.querySelector(
      selectors.actionLink
    );

    if (!actionLink) {
      return;
    }

    actionLink.insertAdjacentHTML("afterend", this.getHtml());

    this.addListener();
  };

  addListener = () => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selectors.gbButtons);

    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        const range: null | string = button.getAttribute("id");

        if (!range) {
          return;
        }

        const activeRangeValue: number = this.getActiveButtonData(buttons);
        const currentRangeValue: number = Number(range);

        let rangeDifference: number = currentRangeValue - activeRangeValue;
        rangeDifference = Math.abs(rangeDifference);

        if (rangeDifference === step) {
          setTimeout(() => {
            this.serviceComponent.evaluateMovement(currentRangeValue);
            this.removeActive(buttons);
            button.classList.add("active");
          }, 250);
        }
      });
    });
  };

  getActiveButtonData = (buttons: NodeListOf<HTMLButtonElement>): number => {
    let activeRangeValue: number = 0;
    buttons.forEach((button: HTMLButtonElement) => {
      const range: null | string = button.getAttribute("id");

      if (button.classList.contains("active") && range) {
        activeRangeValue = Number(range);
      }
    });

    return activeRangeValue;
  };

  removeActive = (buttons: NodeListOf<HTMLButtonElement>) => {
    buttons.forEach((button: HTMLButtonElement) => {
      button.classList.remove("active");
    });
  };

  activeNth = (nth: number) => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selectors.gbButtons);

    if (!buttons || buttons.length === 0) {
      return;
    }

    this.removeActive(buttons);

    const index: number = sliderMoveRange.findIndex(
      (range: number) => range === nth
    );

    buttons[index].classList.add("active");
    this.serviceComponent.setPerviousRangeValue(nth);
  };
}
