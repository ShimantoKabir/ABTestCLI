import { selectors } from "../common/asset";
import { State } from "../common/state";

export class PlanService {
  state!: State;
  plans!: NodeListOf<HTMLSpanElement>;

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

  getPlanElements = () => {
    const plans: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll(
      selectors.plans
    );
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

    circles.item(0).classList.contains("circle-selected") &&
      circles.item(1).click();
    circles.item(0).classList.contains("circle") && circles.item(0).click();

    const plans: null | NodeListOf<HTMLSpanElement> = document.querySelectorAll(
      selectors.mobilePlans
    );
    if (!plans || plans.length === 0) {
      return;
    }
    this.plans = plans;
  };

  changePlanPrice = (isAarp: boolean) => {
    this.state.selectedLine === 2 &&
      this.plans.forEach((plan: HTMLSpanElement) => {
        this.calculatePriceAndShow(plan, 2);
      });

    this.state.selectedLine === 3 &&
      this.plans.forEach((plan: HTMLSpanElement) => {
        this.calculatePriceAndShow(plan, 3);
      });

    this.state.selectedLine === 1 &&
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
}
