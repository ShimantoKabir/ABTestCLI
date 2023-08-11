import { planInfo, selectors } from "../common/asset";

export class PlanComponent {
  public static changePlanData(lineNumber: number) {
    const plans = planInfo[lineNumber];

    const prices: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.price
    );

    prices.forEach((price, index) => {
      price.textContent = plans[index].price;
    });
  }

  public static addPLanClickEvent() {
    const plans: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.plan
    );

    if (plans && plans.length > 0) {
      plans[0].classList.add("plan-selected");

      plans.forEach((plan) => {
        plan.addEventListener("click", () => {
          for (let index = 0; index < plans.length; index++) {
            if (plan === plans[index]) {
              plans[index].classList.add("plan-selected");
            } else {
              plans[index].classList.remove("plan-selected");
            }
          }
        });
      });
    }
  }
}
