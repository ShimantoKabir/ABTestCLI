import { mBoxNames, selectors, triggerMetrics } from "../common/asset";
import { State } from "../common/state";

export class PlanService {
  state!: State;
  plans!: NodeListOf<HTMLSpanElement>;
  lastCircleIndex: number = 3;

  constructor(state: State) {
    this.state = state;
  }

  getHtml = (numberPart: string, decimalPart: null | string) => {
    if (decimalPart) {
      return `<span class="base-dollar-display-component">${numberPart}<small>.${decimalPart}</small></span>`;
    } else {
      return `<span class="base-dollar-display-component">${numberPart}<small style="display: none;">.0</small></span>`;
    }
  };

  getPlanElements = (planSelected: string) => {
    const plans: null | NodeListOf<HTMLSpanElement> =
      document.querySelectorAll(planSelected);
    if (!plans || plans.length === 0) {
      return;
    }
    this.plans = plans;
  };

  getMobilePlanElements = () => {
    const circles: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.circles);

    if (!circles || circles.length === 0) {
      return;
    }

    for (let index = 0; index < circles.length; index++) {
      const circle: HTMLDivElement = circles.item(index);

      if (
        circle.classList.contains("circle-selected") &&
        index !== this.lastCircleIndex
      ) {
        circles.item(index + 1).click();
        setTimeout(() => {
          circle.click();
        }, 250);
        break;
      } else {
        circles.item(index - 1).click();
        setTimeout(() => {
          circle.click();
        }, 250);
        break;
      }
    }

    setTimeout(() => {
      this.state.activeListener();
      this.getPlanElements(selectors.mobilePlans);
      this.changeUnitText(selectors.mobileMonthlyChargeUnits);
      this.addPlanButtonsListener(selectors.mobilePlanButtons);
    }, 250);
  };

  changePlanPrice = (isAarp: boolean) => {
    this.state.selectedLine === 2 &&
      this.plans &&
      this.plans.length > 0 &&
      this.plans.forEach((plan: HTMLSpanElement) => {
        this.calculatePriceAndShow(plan, 2);
      });

    this.state.selectedLine === 3 &&
      this.plans &&
      this.plans.length > 0 &&
      this.plans.forEach((plan: HTMLSpanElement) => {
        this.calculatePriceAndShow(plan, 3);
      });

    this.state.selectedLine === 1 &&
      this.plans &&
      this.plans.length > 0 &&
      this.plans.forEach((plan: HTMLSpanElement) => {
        plan.lastElementChild && plan.lastElementChild.classList.add("hide");
      });
  };

  calculatePriceAndShow = (plan: HTMLSpanElement, dividedBy: number) => {
    if (!plan.firstElementChild) {
      return;
    }

    const price: number = Number(plan.firstElementChild.textContent);
    const dividedPrice: number = price / dividedBy;

    const splittedPrice: string[] = dividedPrice
      .toFixed(2)
      .toString()
      .split(".");

    plan.childNodes.forEach((childNode: ChildNode) => {
      const childElm: Element = childNode as Element;
      childElm.classList.add("hide");
    });

    if (splittedPrice.length == 2 && splittedPrice[1] !== "00") {
      plan.insertAdjacentHTML(
        "beforeend",
        this.getHtml(splittedPrice[0], splittedPrice[1])
      );
    } else if (splittedPrice.length == 2 && splittedPrice[1] == "00") {
      plan.insertAdjacentHTML(
        "beforeend",
        this.getHtml(splittedPrice[0], null)
      );
    } else {
      plan.insertAdjacentHTML(
        "beforeend",
        this.getHtml(splittedPrice[0], null)
      );
    }
  };

  changeUnitText = (planSelected: string) => {
    const units: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(planSelected);
    if (!units || units.length === 0) {
      return;
    }

    units.forEach((unit: HTMLDivElement) => {
      unit.textContent = "A MONTH PER LINE";
    });
  };

  addPlanButtonsListener = (planButtonsSelected: string) => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(planButtonsSelected);
    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        triggerMetrics(mBoxNames.planClick);
      });
    });
  };
}
