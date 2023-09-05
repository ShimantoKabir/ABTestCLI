import { ButtonModel } from "../models/button.model";

export class ButtonComponent {
  render = (button: ButtonModel): string => {
    return `<a class="thank-you-link" href="${button.href}" >${button.text}</a>`;
  };
}
