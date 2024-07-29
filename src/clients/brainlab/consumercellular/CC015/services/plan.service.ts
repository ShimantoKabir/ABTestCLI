import { mBoxNames, selectors, triggerMetrics } from "../common/asset";

export class PlanService {
  lastCircleIndex: number = 3;

  clickNthDesktopPlanButton = (nth: number) => {
    const buttons: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.desktopPlanButtons);

    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons[nth].click();
  };

  clickNthMobilePlanButton = (nth: number) => {
    const mobilePlanButtons: NodeListOf<HTMLButtonElement> | null =
      document.querySelectorAll(selectors.mobilePlanButtons);

    if (
      !mobilePlanButtons ||
      mobilePlanButtons.length === 0 ||
      !mobilePlanButtons[nth]
    ) {
      return;
    }

    mobilePlanButtons[nth].click();

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 250);
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
        this.addDollarAndAmountGoal(button);
      });
    });
  };

  addDollarAndAmountGoal = (button: HTMLButtonElement) => {
    const dollar: null | HTMLSpanElement = button.querySelector(
      "span.base-dollar-display-component"
    );
    const amount: null | HTMLDivElement =
      button.querySelector("div.data-amount");

    if (!dollar || !dollar.textContent || !amount || !amount.textContent) {
      return;
    }

    const dollarText = dollar.textContent.replace(/\s/g, "");
    const amountText = amount.textContent.replace(/\s/g, "");

    if (dollarText === "50.0" && amountText === "Unlimited*") {
      triggerMetrics(mBoxNames.unlimited50DollarClick);
    }

    if (dollarText === "35.0" && amountText === "10GB") {
      triggerMetrics(mBoxNames.tenGb35DollarClick);
    }

    if (dollarText === "25.0" && amountText === "5GB") {
      triggerMetrics(mBoxNames.fiveGb25DollarClick);
    }

    if (dollarText === "20.0" && amountText === "1GB") {
      triggerMetrics(mBoxNames.oneGb20DollarClick);
    }
  };

  showMobilePlan = (callback: Function) => {
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
          callback();
        }, 250);
        break;
      } else {
        circles.item(index - 1).click();
        setTimeout(() => {
          circle.click();
          callback();
        }, 250);
        break;
      }
    }
  };
}
