import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class ButtonComponent {
  getHtml = (): string => {
    const htmlString = `
            <div class="${TestInfo.ID}__request-info" >
                <button class="request-info-button" >Request Information</button>
            </div>
        `;

    return htmlString.trim();
  };

  render = () => {
    const learnSection: null | HTMLDivElement = document.querySelector(
      selectors.learnSection
    );

    if (learnSection) {
      learnSection.insertAdjacentHTML("beforeend", this.getHtml());
    }
  };

  addEventListener = () => {
    const button: null | HTMLDivElement = document.querySelector(
      `div.${TestInfo.ID}__request-info>button`
    );
    if (button) {
      button.addEventListener("click", () => {
        const modal: null | HTMLDivElement = document.querySelector(
          selectors.modal
        );

        if (modal) {
          modal.setAttribute("style", "display: block;");
          modal.classList.add("show");
        }
      });
    }

    const close: null | HTMLSpanElement = document.querySelector(
      selectors.modalClose
    );
    if (close) {
      close.addEventListener("click", () => {
        const modal: null | HTMLDivElement = document.querySelector(
          selectors.modal
        );

        if (modal) {
          modal.setAttribute("style", "display: none;");
          modal.classList.remove("show");
        }
      });
    }
  };
}
