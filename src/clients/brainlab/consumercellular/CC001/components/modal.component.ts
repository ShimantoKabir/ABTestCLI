import { modalStatusKey, selectors } from "../common/asset";

export class ModalComponent {
  getHtml = (): string => {
    const htmlString: string = `
            <div class="added-to-cart-modal" style="z-index: 19002">
                <div class="cci-modal-mask" style="">
                    <div class="cci-modal-scroll-wrapper">
                        <div class="cci-modal-wrapper">
                            <div class="cci-modal-container">
                                <button type="button" aria-label="Close" class="cci-shopping-modal-close btn btn-link"></button>
                                <div class="cci-modal-header">
                                    <h3></h3>
                                </div>
                                <div class="cci-modal-body">
                                    <span aria-label="Check mark indicates selection has been made."
                                        class="fa fa-check-circle white-bg circle-icon green"></span>
                                    <span class="modal-title">Successfully Added To Cart</span>
                                    <div class="row">
                                        <a href="/shopping/choose/device" class="btn btn-default next-step-button btn-shop"> Add
                                            A Device </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

    return htmlString.trim();
  };

  render = () => {
    const placeHolderImages: null | NodeListOf<HTMLImageElement> =
      document.querySelectorAll(selectors.placeHolderImg);

    if (placeHolderImages && placeHolderImages.length > 0) {
      document
        .querySelector("body")
        ?.insertAdjacentHTML("beforeend", this.getHtml());
      localStorage.removeItem(modalStatusKey);

      const modalCloseButton: null | HTMLButtonElement = document.querySelector(
        selectors.modalCloseButton
      );

      modalCloseButton?.addEventListener("click", () => {
        document.querySelector(selectors.modal)?.remove();
      });
    }
  };
}
