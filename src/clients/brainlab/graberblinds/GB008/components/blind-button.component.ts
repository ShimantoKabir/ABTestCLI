import { BlindCard } from "../models/blind-card";

export class BlindButtonComponent {
  getButtonHtml = (blindCard: BlindCard): string => {
    const htmlString: string = `
      <button class="blind-button" id="${blindCard.id}" >${blindCard.heading}</button>
    `;

    return htmlString.trim();
  };

  getHtml = (blindCards: BlindCard[]): string => {
    const htmlString: string = `
      <div class="blind-button-component container-xl">
        <div class="button-wrap" >
        ${blindCards
          .map((card: BlindCard) => this.getButtonHtml(card))
          .join("\n")}
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  onClick = (callback: Function) => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("button.blind-button");

    if (buttons === null || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        callback(button.id);
        this.removeActive(buttons);
        button.classList.add("active");
      });
    });
  };

  removeActive = (buttons: NodeListOf<HTMLButtonElement>) => {
    buttons.forEach((button: HTMLButtonElement) => {
      button.classList.remove("active");
    });
  };
}
