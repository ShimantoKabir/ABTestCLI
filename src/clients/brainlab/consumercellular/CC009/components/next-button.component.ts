import { mboxNames, selectors } from "../common/asset";
import { triggerMetrics } from "../common/utils";
import { Accordion } from "../models/accordion";
import { ServiceComponent } from "./service.component";

export class NextButtonComponent {
  serviceComponent = new ServiceComponent();

  getHtml = (): string => {
    const htmlString: string = `
      <div class="next-button-component" ><button>Next <i class="fa fa-angle-right"></i></button></div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const checkoutSections: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.checkoutSections);

    const breadcrumbItems: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.breadcrumbItems);

    if (
      !checkoutSections ||
      checkoutSections.length === 0 ||
      !breadcrumbItems ||
      breadcrumbItems.length === 0
    ) {
      return;
    }

    const accordions: Accordion[] =
      this.serviceComponent.getAccordionData(checkoutSections);

    accordions.forEach((accordion: Accordion, index: number) => {
      if (index === 0) {
        accordion.accordionGroupsIndex.forEach((index: number) => {
          const section: null | HTMLDivElement =
            this.serviceComponent.getNthCheckoutSection(index);

          section && section.classList.add("active");
        });
      }

      const lastIndexOfGroups: number =
        accordion.accordionGroupsIndex.slice(-1)[0];
      const section: null | HTMLDivElement =
        this.serviceComponent.getNthCheckoutSection(lastIndexOfGroups);

      section && section.insertAdjacentHTML("beforeend", this.getHtml());
    });

    this.addNextButtonListener(accordions, breadcrumbItems);
  };

  addNextButtonListener = (
    accordions: Accordion[],
    breadcrumbItems: NodeListOf<HTMLDivElement>
  ) => {
    const nextButtons: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.nextButtons
    );

    if (!nextButtons || nextButtons.length === 0) {
      return;
    }

    nextButtons.forEach((nextButton: Element, index: number) => {
      nextButton.addEventListener("click", () => {
        triggerMetrics(mboxNames.nextClick);

        this.serviceComponent.manageCurrentBreadcrumbActive(
          breadcrumbItems,
          index + 1
        );

        this.serviceComponent.switchActiveToAccordions(
          accordions[index].accordionGroupsIndex,
          "remove"
        );

        this.serviceComponent.switchActiveToAccordions(
          accordions[index + 1].accordionGroupsIndex,
          "add"
        );

        this.serviceComponent.clickNthCheckoutHeader(index, accordions);
      });

      this.serviceComponent.setErrorIconToCheckoutHeader(index, accordions);
    });

    // this.serviceComponent.checkErrorAfterRender(accordions);
  };

  handleAarpClick = (callback: Function) => {
    const aarpJoinButton: null | HTMLButtonElement = document.querySelector(
      selectors.aarpJoinButton
    );

    aarpJoinButton &&
      aarpJoinButton.addEventListener("click", () => {
        setTimeout(() => {
          const aarpSection: null | HTMLDivElement =
            this.serviceComponent.getNthCheckoutSection(3);
          aarpSection && aarpSection.classList.add("active");
          callback();
        }, 250);
      });
  };

  remove = () => {
    const buttons: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.next-button-component");

    buttons &&
      buttons.length > 0 &&
      buttons.forEach((button: HTMLDivElement) => {
        button.remove();
      });
  };
}
