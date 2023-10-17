import { selectors } from "../common/asset";

export class ServiceComponent {
  manageModalClose = (
    modalCloseSelector: string
  ): null | HTMLDivElement | undefined => {
    const modalCloseIcon: null | HTMLDivElement =
      document.querySelector(modalCloseSelector);

    const formComponentContainer: null | HTMLDivElement =
      document.querySelector(selectors.formComponentContainer);

    if (!modalCloseIcon || !formComponentContainer) {
      return;
    }

    modalCloseIcon.addEventListener("click", () => {
      if (modalCloseSelector === selectors.modalCloseIcon) {
        formComponentContainer.classList.remove(
          "show-form-component-container"
        );
      } else {
        formComponentContainer.remove();
      }
    });

    return formComponentContainer;
  };
}
