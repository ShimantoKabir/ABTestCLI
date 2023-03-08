import { dummyContent } from "../common/asset";
import { injectable } from "tsyringe";

@injectable()
export class DummyComponent {
  private loginSelector: string = "div.login-box";

  getHtml = (): string => {
    return `<div><p>${dummyContent}</p></div>`;
  };

  render = () => {
    document
      .querySelector(this.loginSelector)
      ?.insertAdjacentHTML("afterbegin", this.getHtml());
  };
  addClickListener = (): void => {};
}
