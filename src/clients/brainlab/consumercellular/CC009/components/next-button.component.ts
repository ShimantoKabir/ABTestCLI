import { selectors } from "../common/asset";
import { ServiceComponent } from "./service.component";

export class NextButtonComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="next-button-component" ><button>Next <i class="fa fa-angle-right"></i></button></div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const checkoutSections: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.checkoutSections);

    if (!checkoutSections || checkoutSections.length === 0) {
      return;
    }

    checkoutSections.forEach((checkoutSection: HTMLDivElement, index) => {
      if (index === 0) {
        checkoutSection.firstElementChild &&
          checkoutSection.firstElementChild.classList.add("card-active");
      }
      checkoutSection.insertAdjacentHTML("beforeend", this.getHtml());
    });

    const serviceComponent = new ServiceComponent();
    serviceComponent.addNextButtonListener(checkoutSections);
    serviceComponent.addListenerToBreadcrumb(checkoutSections);
    serviceComponent.checkExtraError(checkoutSections);
    serviceComponent.addPlaceOrderButtonListener();
  };
}
