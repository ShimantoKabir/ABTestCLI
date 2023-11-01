import { mboxNames, selectors } from "../common/asset";
import { triggerMetrics } from "../common/utils";
import { Accordion } from "../models/accordion";
import { ServiceComponent } from "./service.component";

export class NextButtonComponent {
  serviceComponent!: ServiceComponent;

  constructor(serviceComponent: ServiceComponent) {
    this.serviceComponent = serviceComponent;
  }

  getHtml = (): string => {
    const htmlString: string = `
      <div class="next-button-component" ><button>Next <i class="fa fa-angle-right"></i></button></div>
    `;

    return htmlString.trim();
  };

  render = (isFirst: boolean) => {
    const checkoutSections: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.checkoutSections);

    // const breadcrumbItems: null | NodeListOf<HTMLDivElement> =
    //   document.querySelectorAll(selectors.breadcrumbItems);

    if (
      !checkoutSections ||
      checkoutSections.length === 0
      // || !breadcrumbItems ||
      // breadcrumbItems.length === 0
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
      const groupBottomSection: null | HTMLDivElement =
        this.serviceComponent.getNthCheckoutSection(lastIndexOfGroups);

      const groupTopSection: null | HTMLDivElement =
        this.serviceComponent.getNthCheckoutSection(
          accordion.accordionGroupsIndex[0]
        );

      groupBottomSection &&
        groupBottomSection.insertAdjacentHTML("beforeend", this.getHtml());
      groupTopSection &&
        this.addListenerToCardTitle(groupTopSection, accordions, index);
    });

    // this.addNextButtonListener(accordions, breadcrumbItems);
    this.addNextButtonListener(accordions);
    this.serviceComponent.checkErrorAfterRender(accordions);
    isFirst &&
      this.serviceComponent.checkErrorOnPlaceOrderButtonClick(accordions);

    !isFirst && this.serviceComponent.setAccordions(accordions);
  };

  addListenerToCardTitle = (
    section: HTMLDivElement,
    accordions: Accordion[],
    aIndex: number
  ) => {
    const cardTitle: null | HTMLDivElement =
      section.querySelector("div.card-title");

    cardTitle &&
      cardTitle.addEventListener("click", () => {
        triggerMetrics(mboxNames.tabClick);

        accordions.forEach((accordion: Accordion, index: number) => {
          this.serviceComponent.switchActiveToAccordions(
            accordion.accordionGroupsIndex,
            "remove"
          );

          aIndex === index &&
            this.serviceComponent.switchActiveToAccordions(
              accordion.accordionGroupsIndex,
              "add"
            );
        });
      });
  };

  addNextButtonListener = (
    accordions: Accordion[]
    // breadcrumbItems: NodeListOf<HTMLDivElement>
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

        // this.serviceComponent.manageCurrentBreadcrumbActive(
        //   breadcrumbItems,
        //   index + 1
        // );

        this.serviceComponent.switchActiveToAccordions(
          accordions[index].accordionGroupsIndex,
          "remove"
        );

        this.serviceComponent.switchActiveToAccordions(
          accordions[index + 1].accordionGroupsIndex,
          "add"
        );

        window.scroll({
          top: 150,
          left: 0,
          behavior: "smooth",
        });
      });

      this.serviceComponent.setErrorIconToCheckoutHeader(index, accordions);
    });
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

    const errorIcons: null | NodeListOf<Element> =
      document.querySelectorAll("i.error-icon");

    buttons &&
      buttons.length > 0 &&
      buttons.forEach((button: HTMLDivElement) => {
        button.remove();
      });

    errorIcons &&
      errorIcons.length > 0 &&
      errorIcons.forEach((errorIcon: Element) => {
        errorIcon.remove();
      });
  };
}
