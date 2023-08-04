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
}
