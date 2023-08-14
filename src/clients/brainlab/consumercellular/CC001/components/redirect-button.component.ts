import { selectors } from "../common/asset";

export class RedirectButtonComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <button href="https://www.consumercellular.com/shopping/details/sim" class="redirect-button">
        Add To Cart
      </button>
    `;

    return htmlString;
  };

  render = () => {
    const viewPlanLink: null | Element = document.querySelector(
      selectors.viewPlanLink
    );

    if (viewPlanLink) {
      viewPlanLink.insertAdjacentHTML("afterend", this.getHtml());
    }
  };

  addRedirectEvent = () => {
    const redirectButton: null | Element = document.querySelector(
      "button.redirect-button"
    );

    if (redirectButton) {
      redirectButton.addEventListener("click", () => {
        const selectedPlanNumber = this.getSelectedPlanNumber();
        const selectedBulletNumber = this.getSelectedBulletNumber();
        this.redirectToPlanPage(selectedPlanNumber, selectedBulletNumber);
      });
    }
  };

  redirectToPlanPage = (planNumber: number, bulletNumber: number) => {
    window.location.href = `https://www.consumercellular.com/shopping/choose/plan?line=${bulletNumber}&plan=${planNumber}`;
  };

  getSelectedPlanNumber = (): number => {
    let selectedPlanNumber: number = 0;

    const plans: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.plan
    );

    if (plans && plans.length > 0) {
      plans.forEach((plan, index) => {
        if (plans[index].classList.contains("plan-selected")) {
          selectedPlanNumber = index;
        }
      });
    }

    return selectedPlanNumber;
  };

  getSelectedBulletNumber = () => {
    let selectedBulletNumber: number = 0;

    const bullets: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.bullet
    );

    if (bullets && bullets.length > 0) {
      bullets.forEach((bullet, index) => {
        if (bullets[index].classList.contains("circle-selected")) {
          selectedBulletNumber = selectedBulletNumber + index;
        }
      });
    }

    selectedBulletNumber =
      selectedBulletNumber === 3 ? 2 : selectedBulletNumber;

    return selectedBulletNumber;
  };
}
