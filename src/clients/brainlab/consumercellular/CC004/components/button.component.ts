import { selectors } from "../common/asset";

export class ButtonComponent {
  getHtml = (): string => {
    const htmlString: string = `
            <a 
                href="https://www.consumercellular.com/shopping/details/sim" 
                class="bring-button"
            >
                BRING YOUR OWN DEVICE
            </a>
        `;

    return htmlString;
  };

  render = () => {
    const modelFooter: null | Element = document.querySelector(
      selectors.modelFooter
    );
    if (modelFooter) {
      modelFooter.insertAdjacentHTML("beforeend", this.getHtml());
    }
  };

  addNewCartButton = () => {
    const existMobileCartButton: null | HTMLButtonElement =
      document.querySelector(selectors.existMobileCartButton);

    if (existMobileCartButton) {
      existMobileCartButton.classList.add("old-btn-shop");
      const cloneMobileCartButton = existMobileCartButton.cloneNode(
        true
      ) as HTMLButtonElement;
      cloneMobileCartButton.classList.add("new-cart-button");
      cloneMobileCartButton.classList.remove("btn-shop");
      cloneMobileCartButton.classList.remove("old-btn-shop");

      existMobileCartButton.insertAdjacentElement(
        "beforebegin",
        cloneMobileCartButton
      );
    }

    const newMobileCartButton: null | HTMLButtonElement =
      document.querySelector("button.new-cart-button");

    if (existMobileCartButton && newMobileCartButton) {
      newMobileCartButton.addEventListener("click", () => {
        this.openModal();
      });
    }
  };

  openModal = () => {
    const modal: null | HTMLDivElement = document.querySelector(
      selectors.modal
    );

    if (modal) {
      modal.removeAttribute("style");
    }
  };

  closeModal = () => {
    const existMobileCartButton: null | HTMLButtonElement =
      document.querySelector(selectors.existMobileCartButton);

    console.log("existMobileCartButton=", existMobileCartButton);

    const modalCloseButton: null | HTMLButtonElement = document.querySelector(
      selectors.modalCloseButton
    );
    if (modalCloseButton && existMobileCartButton) {
      modalCloseButton.addEventListener("click", () => {
        existMobileCartButton.click();
      });
    }

    const links: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(`${selectors.modelFooter}>a`);

    if (links && links.length > 0 && existMobileCartButton) {
      links.forEach((link) => {
        link.addEventListener("click", () => {
          existMobileCartButton.click();
        });
      });
    }
  };
}
