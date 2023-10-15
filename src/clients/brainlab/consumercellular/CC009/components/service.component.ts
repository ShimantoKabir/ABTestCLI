import { mboxNames, selectors } from "../common/asset";

export class ServiceComponent {
  submitPlaceOrder = () => {
    return new Promise((resolve, reject) => {
      const placeOrderButtons: null | NodeListOf<HTMLButtonElement> =
        this.getPlaceOrderButton();

      if (!placeOrderButtons || placeOrderButtons.length === 0) {
        return;
      }

      placeOrderButtons.forEach((button: HTMLButtonElement) => {
        button.click();
        setTimeout(() => {
          resolve(true);
        }, 10);
      });
    });
  };

  getPlaceOrderButton = (): null | NodeListOf<HTMLButtonElement> => {
    return document.querySelectorAll(selectors.placeOrderButtons);
  };

  getCart = (checkoutSections: NodeListOf<HTMLDivElement>, index: number) => {
    return checkoutSections[index].querySelector("div.card");
  };

  addNextButtonListener = (checkoutSections: NodeListOf<HTMLDivElement>) => {
    const nextButtons: null | NodeListOf<Element> = document.querySelectorAll(
      selectors.nextButtons
    );

    if (!nextButtons || nextButtons.length === 0) {
      return;
    }

    nextButtons.forEach((nextButton: Element, index) => {
      nextButton.addEventListener("click", () => {
        this.submitPlaceOrder().then((isDone) => {
          console.log("nex-mbox-click=", mboxNames.nextClick);
          // @ts-ignore
          adobe.target.trackEvent({ mbox: mboxNames.nextClick });

          this.checkExtraError(checkoutSections);

          const isErrorFound = this.findNthSectionInputError(
            checkoutSections[index]
          );

          if (isErrorFound !== null) {
            return;
          }

          const cart = this.getCart(checkoutSections, index);

          cart && cart.classList && cart.classList.add("card-done");
          cart && cart.classList && cart.classList.remove("card-active");

          const nextCart = this.getCart(checkoutSections, index + 1);

          nextCart && nextCart.classList.add("card-active");

          this.manageNextBreadcrumbActive(index);
        });
      });
    });
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

  findNthSectionInputError = (checkoutSection: Element): number | null => {
    const inputs = checkoutSection.querySelectorAll("input");
    let isErrorFound: number | null = null;
    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      if (input.classList.contains("error-border")) {
        isErrorFound = index;
        break;
      }
    }
    return isErrorFound;
  };

  addListenerToBreadcrumb = (checkoutSections: NodeListOf<HTMLDivElement>) => {
    const breadcrumbItems: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.breadcrumbItems);

    if (!breadcrumbItems || breadcrumbItems.length === 0) {
      return;
    }

    breadcrumbItems.forEach((item: HTMLDivElement, index: number) => {
      item.addEventListener("click", () => {
        console.log("breadcrumb-mbox-click=", mboxNames.breadcrumbClick);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: mboxNames.breadcrumbClick });
        this.manageCurrentBreadcrumbActive(breadcrumbItems, index);
        this.manageCurrentCardActive(checkoutSections, index);
      });
    });
  };

  manageCurrentCardActive = (
    checkoutSections: NodeListOf<HTMLDivElement>,
    index: number
  ) => {
    checkoutSections.forEach(
      (checkoutSection: HTMLDivElement, cIndex: number) => {
        const cartContent = this.getCart(checkoutSections, cIndex);
        if (cIndex === index) {
          cartContent && cartContent.classList.add("card-active");
        } else {
          cartContent && cartContent.classList.remove("card-active");
        }
      }
    );
  };

  manageCurrentBreadcrumbActive = (
    breadcrumbItems: NodeListOf<HTMLDivElement>,
    index: number
  ) => {
    breadcrumbItems.forEach((item: HTMLDivElement, bIndex: number) => {
      if (bIndex === index) {
        item.classList.add("breadcrumb-item-active");
      } else {
        item.classList.remove("breadcrumb-item-active");
      }
    });
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

  checkExtraError = (checkoutSections: NodeListOf<HTMLDivElement>) => {
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

  addPlaceOrderButtonListener = () => {
    const placeOrderButtons: null | NodeListOf<HTMLButtonElement> =
      this.getPlaceOrderButton();

    if (!placeOrderButtons || placeOrderButtons.length === 0) {
      return;
    }

    placeOrderButtons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        console.log("place-order-mbox-click=", mboxNames.placeOrderClick);
        // @ts-ignore
        adobe.target.trackEvent({ mbox: mboxNames.placeOrderClick });
      });
    });
  };
}
