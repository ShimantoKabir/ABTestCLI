import { TestInfo } from "../common/test.info";

export class CartInputComponent {
  ccInputId: string = "cc-input";
  regex: RegExp = /^[0-9- ]+$/;
  variation: string = TestInfo.VARIATION.toString();
  separator: string = "-";

  constructor() {
    if (this.variation === "2") {
      this.separator = " ";
    }
  }

  private getHtml = () => {
    const htmlString: string = `
      <input type="text" class="" maxlength="19" id="${this.ccInputId}" >
    `;
    return htmlString.trim();
  };

  render = (cardInput: HTMLInputElement) => {
    cardInput.insertAdjacentHTML("afterend", this.getHtml());
    this.reactive(cardInput);
  };

  reactive = (cardInput: HTMLInputElement) => {
    const ccInput: null | HTMLElement = document.getElementById(this.ccInputId);

    if (!ccInput) {
      return;
    }

    const ccInputText = ccInput as HTMLInputElement;

    ccInput.addEventListener("keyup", () => {
      if (ccInputText.value && !this.regex.test(ccInputText.value)) {
        ccInputText.value = ccInputText.value.slice(0, -1);
      }

      if (ccInputText.value && ccInputText.value.charAt(0) === this.separator) {
        ccInputText.value = "";
      }

      if (ccInputText.value.length === 4) {
        ccInputText.value = ccInputText.value + this.separator;
      }

      if (ccInputText.value.length === 9) {
        ccInputText.value = ccInputText.value + this.separator;
      }

      if (ccInputText.value.length === 14) {
        ccInputText.value = ccInputText.value + this.separator;
      }

      if (ccInputText.value) {
        cardInput.value = ccInputText.value.split(this.separator).join("");
      }
    });
  };
}
