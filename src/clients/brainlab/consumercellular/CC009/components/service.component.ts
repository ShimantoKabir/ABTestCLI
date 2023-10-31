import { selectors } from "../common/asset";
import { Accordion } from "../models/accordion";

export class ServiceComponent {
  displayNoneStyle: string = "display:-none;";
  accordions: Accordion[] = [];

  checkErrorOnPlaceOrderButtonClick = (accordions: Accordion[]) => {
    this.accordions = accordions;
    const placeOrderButtons: null | NodeListOf<HTMLButtonElement> =
      this.getPlaceOrderButton();

    if (!placeOrderButtons || placeOrderButtons.length === 0) {
      return;
    }

    placeOrderButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", this.placeOrderButtonListenerFunction);
    });
  };

  setAccordions = (accordions: Accordion[]) => {
    this.accordions = accordions;
  };

  placeOrderButtonListenerFunction = () => {
    console.log("accordions=", this.accordions);
    setTimeout(() => {
      this.accordions.length > 0 &&
        this.accordions.forEach((accordion: Accordion, index) => {
          const isErrorFound = this.findNthSectionInputError(
            accordion.accordionGroupsIndex
          );

          !isErrorFound &&
            this.setDoneOrErrorToCheckoutSection(
              index,
              this.accordions,
              "success"
            );

          isErrorFound &&
            this.setDoneOrErrorToCheckoutSection(
              index,
              this.accordions,
              "error"
            );
        });
      this.checkExtraError(this.accordions);
    }, 250);
  };

  checkInputError = (accordions: Accordion[]) => {
    accordions.forEach((accordion: Accordion, index) => {
      const isErrorFound = this.findNthSectionInputError(
        accordion.accordionGroupsIndex
      );

      isErrorFound &&
        this.setDoneOrErrorToCheckoutSection(index, accordions, "error");
    });
  };

  checkExtraError = (accordions: Accordion[]) => {
    const errors: null | NodeListOf<HTMLDivElement> = document.querySelectorAll(
      selectors.errors
    );

    errors.forEach((errorElm: HTMLDivElement, index: number) => {
      const style: string | null = errorElm.getAttribute("style");

      !style &&
        index === 0 &&
        this.setDoneOrErrorToCheckoutSection(1, accordions, "error");

      !style &&
        index === 1 &&
        this.setDoneOrErrorToCheckoutSection(4, accordions, "error");
    });
  };

  setDoneOrErrorToCheckoutSection = (
    index: number,
    accordions: Accordion[],
    type: string
  ) => {
    const groups: number[] = accordions[index].accordionGroupsIndex;

    groups.forEach((group: number) => {
      const section: null | HTMLDivElement = this.getNthCheckoutSection(group);

      if (type === "success" && section) {
        section.classList.remove("error");
        section.classList.add("success");
        section.classList.remove("active");
      }

      if (type === "error" && section) {
        section.classList.remove("success");
        section.classList.add("error");
        section.classList.add("active");
      }
    });
  };

  checkErrorAfterRender = (accordions: Accordion[]) => {
    this.checkInputError(accordions);
    this.checkExtraError(accordions);
  };

  getPlaceOrderButton = (): null | NodeListOf<HTMLButtonElement> => {
    return document.querySelectorAll(selectors.placeOrderButtons);
  };

  getCart = (checkoutSections: NodeListOf<HTMLDivElement>, index: number) => {
    return checkoutSections[index].querySelector("div.card");
  };

  manageNextBreadcrumbActive = (index: number) => {
    const selector: string = `${selectors.breadcrumbItems}:nth-child(${
      index + 1
    })`;
    const breadcrumbNthItem: null | HTMLDivElement =
      document.querySelector(selector);

    if (!breadcrumbNthItem || !breadcrumbNthItem.nextElementSibling) {
      return;
    }

    breadcrumbNthItem.classList.remove("breadcrumb-item-active");
    breadcrumbNthItem.nextElementSibling.classList.add(
      "breadcrumb-item-active"
    );
  };

  findNthSectionInputError = (accordionGroupsIndex: number[]): boolean => {
    let isErrorFound: boolean = false;

    accordionGroupsIndex.forEach((index: number) => {
      const checkoutSection: null | HTMLDivElement =
        this.getNthCheckoutSection(index);

      checkoutSection &&
        checkoutSection
          .querySelectorAll("input")
          .forEach((input: HTMLInputElement) => {
            if (input.classList.contains("error-border") && !isErrorFound) {
              isErrorFound = true;
            }
          });
    });

    return isErrorFound;
  };

  isNextSiblingHasHeading = (
    checkoutSection: HTMLDivElement
  ): Element | null => {
    if (
      checkoutSection.nextElementSibling &&
      checkoutSection.nextElementSibling.firstElementChild &&
      checkoutSection.nextElementSibling.firstElementChild.classList.contains(
        "no-border-top"
      )
    ) {
      return checkoutSection.nextElementSibling;
    } else {
      return null;
    }
  };

  getAccordionData = (
    checkoutSections: NodeListOf<HTMLDivElement>
  ): Accordion[] => {
    const serviceComponent = new ServiceComponent();
    const accordions: Accordion[] = [];
    const sectionStartAt: number = 2;
    let accordionGroupIndex: number = 0;
    let accordionGroupsIndex: number[] = [];

    checkoutSections.forEach(
      (checkoutSection: HTMLDivElement, index: number) => {
        const isNextSiblingHasHeading: null | Element =
          serviceComponent.isNextSiblingHasHeading(checkoutSection);

        if (isNextSiblingHasHeading) {
          accordionGroupsIndex.push(index + sectionStartAt);
        } else {
          accordionGroupsIndex.push(index + sectionStartAt);

          if (accordionGroupsIndex.length !== 0) {
            accordions.push({
              accordionGroupIndex: accordionGroupIndex,
              accordionGroupsIndex: accordionGroupsIndex,
            });
          }
          accordionGroupIndex = accordionGroupIndex + 1;
          accordionGroupsIndex = [];
        }
      }
    );

    return accordions;
  };

  getNthCheckoutSection = (nth: number): null | HTMLDivElement => {
    return document.querySelector(selectors.checkoutNthSection + `(${nth})`);
  };

  manageCurrentBreadcrumbActive = (
    breadcrumbItems: NodeListOf<HTMLDivElement>,
    index: number
  ) => {
    breadcrumbItems.forEach((item: HTMLDivElement, bIndex: number) => {
      if (bIndex === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  switchActiveToAccordions = (groups: number[], action: string) => {
    groups.forEach((group: number) => {
      const selector: string = selectors.checkoutNthSection + `(${group})`;
      const section: null | HTMLDivElement = document.querySelector(selector);
      action === "add" && section && section.classList.add("active");
      action === "remove" && section && section.classList.remove("active");
    });
  };

  clickNthCheckoutHeader = (index: number, accordions: Accordion[]) => {
    const checkoutIndex = accordions[index].accordionGroupsIndex[0];
    const selector: string = `${selectors.checkoutNthSection}(${checkoutIndex})>div.card>div.card-title`;
    const cardTitle: null | HTMLDivElement = document.querySelector(selector);
    // cardTitle && cardTitle.click();
  };

  setErrorIconToCheckoutHeader = (index: number, accordions: Accordion[]) => {
    const checkoutIndex = accordions[index].accordionGroupsIndex[0];
    const selector: string = `${selectors.checkoutNthSection}(${checkoutIndex})>div.card>div.card-title`;
    const cardTitle: null | HTMLDivElement = document.querySelector(selector);
    cardTitle &&
      cardTitle.insertAdjacentHTML(
        "afterbegin",
        `<i class="fa fa-times-circle red error-icon" ></i>`
      );
  };
}
