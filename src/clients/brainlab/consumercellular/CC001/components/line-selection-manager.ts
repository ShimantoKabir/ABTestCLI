import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class LineSelectionManager {
  private plan: number = 0;
  private line: number = 0;

  constructor(plan: number, line: number) {
    this.plan = plan;
    this.line = line;
    Initializer.init(TestInfo, "0.0.1");
  }

  select = () => {
    this.selectLine();
    this.selectPlan();
    this.clickAddToCartButton();
  };

  selectLine = () => {
    const phoneSelectors: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.phoneSelector);

    if (phoneSelectors && phoneSelectors.length > 3) {
      phoneSelectors.forEach((phone, index) => {
        if (index === this.line) {
          const bullet: null | HTMLDialogElement = document.querySelector(
            `div.phone-selections>div:nth-child(${index + 1})>div.fa-circle`
          );

          if (bullet) {
            bullet.click();
          }
        }
      });
    } else {
      setTimeout(this.selectLine, 25);
    }
  };

  selectPlan = () => {
    const plans: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selectors.comboPlan);

    if (plans && plans.length > 3) {
      plans.forEach((plan, index) => {
        if (index === this.plan) {
          plan.click();
        }
      });
    } else {
      setTimeout(this.selectPlan, 25);
    }
  };

  clickAddToCartButton = () => {
    const addToCartButton: null | HTMLButtonElement = document.querySelector(
      selectors.buttonShop
    );

    if (
      addToCartButton &&
      addToCartButton.getAttribute("disabled") !== "disabled"
    ) {
      addToCartButton.click();
      this.closeModal();
    } else {
      setTimeout(this.clickAddToCartButton, 25);
    }
  };

  closeModal = () => {
    const modalCloseButton: null | HTMLButtonElement = document.querySelector(
      selectors.modalCloseButton
    );

    if (modalCloseButton) {
      localStorage.setItem("add-device-model-open", "true");
      modalCloseButton.click();
    } else {
      setTimeout(this.closeModal, 25);
    }
  };
}
