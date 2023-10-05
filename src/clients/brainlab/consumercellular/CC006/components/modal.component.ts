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
                                    <div class="row add-device">
                                        <button href="/shopping/choose/device" class="btn btn-default next-step-button btn-shop">Add A Device</button>
                                    </div>
                                    <div class="row your-device">
                                        <button href="/shopping/details/sim">Bring Your Own device</button>
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
    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    body.insertAdjacentHTML("beforeend", this.getHtml());
    localStorage.removeItem(modalStatusKey);

    const modalCloseButton: null | HTMLButtonElement = document.querySelector(
      selectors.modalCloseButton
    );

    const modal: null | HTMLButtonElement = document.querySelector(
      selectors.modal
    );

    const addDevice: null | HTMLButtonElement = document.querySelector(
      selectors.addDevice
    );

    const yourDevice: null | HTMLButtonElement = document.querySelector(
      selectors.yourDevice
    );

    const addDeviceDirect: null | HTMLButtonElement = document.querySelector(
      selectors.addDeviceDirect
    );

    const yourDeviceDirect: null | HTMLAnchorElement = document.querySelector(
      selectors.yourDeviceDirect
    );

    const shoppingBar: null | HTMLAnchorElement = document.querySelector(
      selectors.shoppingBar
    );

    if (
      modalCloseButton &&
      modal &&
      addDevice &&
      yourDevice &&
      addDeviceDirect &&
      yourDeviceDirect &&
      shoppingBar
    ) {
      modalCloseButton.addEventListener("click", () => {
        modal.remove();
      });

      addDevice.addEventListener("click", () => {
        console.log("add-a-device");
        // @ts-ignore
        adobe.target.trackEvent({
          mbox: "add-a-device",
        });

        modal.remove();
        addDeviceDirect.click();
      });

      yourDevice.addEventListener("click", () => {
        console.log("bring-your-device");
        // @ts-ignore
        adobe.target.trackEvent({
          mbox: "bring-your-device",
        });

        modal.remove();
        yourDeviceDirect.click();
        shoppingBar.click();
      });
    }
  };
}
