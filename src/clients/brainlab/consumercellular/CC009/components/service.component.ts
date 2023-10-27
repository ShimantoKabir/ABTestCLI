import { mboxNames, selectors } from "../common/asset";
import { triggerMetrics } from "../common/utils";
import { Accordion } from "../models/accordion";

export class ServiceComponent {
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
            if (!input.value) {
              isErrorFound = true;
            }
          });
    });

    return isErrorFound;
  };

  manageError = (
    style: null | string,
    index: number,
    compareIndex: number,
    errorPosition: number,
    checkoutSections: NodeListOf<HTMLDivElement>
  ) => {
    if (!style && index === compareIndex) {
      const card = this.getCart(checkoutSections, errorPosition);
      card && card.classList.add("card-error");
    } else if (style && index === compareIndex) {
      const card = this.getCart(checkoutSections, errorPosition);
      card && card.classList.remove("card-error");
    }
  };

  checkErrorAfterSubmit = (checkoutSections: NodeListOf<HTMLDivElement>) => {
    const errors: null | NodeListOf<HTMLDivElement> = document.querySelectorAll(
      selectors.errors
    );

    errors.forEach((errorElm: HTMLDivElement, index: number) => {
      const style = errorElm.getAttribute("style");
      this.manageError(style, index, 0, 1, checkoutSections);
      this.manageError(style, index, 1, 2, checkoutSections);
      this.manageError(style, index, 2, 4, checkoutSections);
    });
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
}
