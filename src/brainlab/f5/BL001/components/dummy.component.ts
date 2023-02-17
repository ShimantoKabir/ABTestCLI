import { dummyContent } from "../common/asset";

export class DummyComponent {
  render = (): string => {
    return `<div><p>${dummyContent}</p></div>`;
  };
  addClickListener = (): void => {};
}
