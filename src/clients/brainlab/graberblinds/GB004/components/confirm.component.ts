import { buttons, headlineText, selectors } from "../common/asset";
import { ButtonComponent } from "./button.component";

export class ConfirmComponent {
  getHtmlForButtons = () => {
    const html: string = `
        <div class="thank-you-buttons" >
        ${buttons
          .map((button) => new ButtonComponent().render(button))
          .join("\n")}
        </div>
    `;

    return html.trim();
  };

  renderButtons = () => {
    const headline: null | HTMLDivElement = document.querySelector(
      selectors.formConfirmation + ">div.body--lg"
    );

    if (!headline) {
      return;
    }

    headline.textContent = headlineText;
    headline.insertAdjacentHTML("afterend", this.getHtmlForButtons());
  };
}
