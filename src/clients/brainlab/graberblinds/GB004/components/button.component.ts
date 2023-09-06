import { ButtonModel } from "../models/button.model";

export class ButtonComponent {
  render = (button: ButtonModel): string => {
    return `<a class="thank-you-link ${button.className}" href="${button.href}" >${button.text}</a>`;
  };
}
