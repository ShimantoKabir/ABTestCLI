import { mboxNames, selectors, triggerMetrics } from "../common/asset";

export class ServiceComponent {
  manageModalClose = (
    modalCloseSelector: string
  ): null | HTMLDivElement | undefined => {
    const modalCloseIcon: null | Element =
      document.querySelector(modalCloseSelector);

    const formComponentContainer: null | HTMLDivElement =
      document.querySelector(selectors.formComponentContainer);

    if (!modalCloseIcon || !formComponentContainer) {
      return;
    }

    modalCloseIcon.addEventListener("click", () => {
      if (
        modalCloseSelector === selectors.modalCloseIcon ||
        modalCloseSelector === selectors.signupButton
      ) {
        formComponentContainer.classList.toggle("show");
      } else {
        formComponentContainer.remove();
      }

      if (modalCloseSelector === selectors.signupButton) {
        triggerMetrics(mboxNames.bottomSignupClick);
      }
    });

    return formComponentContainer;
  };
}
