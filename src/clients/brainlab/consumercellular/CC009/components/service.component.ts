import { selectors } from "../common/asset";
import { Accordion } from "../models/accordion";

export class ServiceComponent {
  checkErrorOnPlaceOrderButtonClick = (accordions: Accordion[]) => {
    const placeOrderButtons: null | NodeListOf<HTMLButtonElement> =
      this.getPlaceOrderButton();

    if (!placeOrderButtons || placeOrderButtons.length === 0) {
      return;
    }

    placeOrderButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        setTimeout(() => {
          accordions.forEach((accordion: Accordion, index) => {
            const isErrorFound = this.findNthSectionInputError(
              accordion.accordionGroupsIndex
            );

            !isErrorFound &&
              this.setDoneOrErrorToCheckoutSection(
                index,
                accordions,
                "add",
                "success"
              );

            isErrorFound &&
              this.setDoneOrErrorToCheckoutSection(
                index,
                accordions,
                "remove",
                "success"
              );

            !isErrorFound &&
              this.setDoneOrErrorToCheckoutSection(
                index,
                accordions,
                "remove",
                "error"
              );

            isErrorFound &&
              this.setDoneOrErrorToCheckoutSection(
                index,
                accordions,
                "add",
                "error"
              );
          });
        }, 250);
      });
    });
  };

  setDoneOrErrorToCheckoutSection = (
    index: number,
    accordions: Accordion[],
    action: string,
    type: string
  ) => {
    const section: null | HTMLDivElement = this.getNthCheckoutSection(
      accordions[index].accordionGroupsIndex[0]
    );
    type === "success" &&
      action === "add" &&
      section &&
      section.classList.add("done");

    type === "success" &&
      action === "remove" &&
      section &&
      section.classList.remove("done");

    type === "error" &&
      action === "add" &&
      section &&
      section.classList.add("error");

    type === "error" &&
      action === "remove" &&
      section &&
      section.classList.remove("error");
  };

  checkErrorAfterRender = (accordions: Accordion[]) => {
    const errors: null | NodeListOf<HTMLDivElement> = document.querySelectorAll(
      selectors.errors
    );

    errors.forEach((errorElm: HTMLDivElement, index: number) => {
      const style = errorElm.getAttribute("style");
      style &&
        index === 0 &&
        this.setDoneOrErrorToCheckoutSection(1, accordions, "add", "error");

      style &&
        index === 1 &&
        this.setDoneOrErrorToCheckoutSection(2, accordions, "add", "error");

      style &&
        index === 2 &&
        this.setDoneOrErrorToCheckoutSection(4, accordions, "add", "error");
    });
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
    cardTitle && cardTitle.click();
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
