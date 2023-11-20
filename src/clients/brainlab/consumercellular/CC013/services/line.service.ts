import { selectors } from "../common/asset";
import { State } from "../common/state";

export class LineService {
  state!: State;

  constructor(state: State) {
    this.state = state;
  }

  addListener = (onLineClick: Function) => {
    const circles: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.circles);

    if (!circles || circles.length === 0) {
      return;
    }

    circles.forEach((circle: HTMLDivElement) => {
      circle.addEventListener("click", () => {
        if (
          circle.nextElementSibling &&
          circle.nextElementSibling.nextElementSibling &&
          circle.nextElementSibling.nextElementSibling.textContent
        ) {
          const line: number = Number(
            circle.nextElementSibling.nextElementSibling.textContent
          );
          this.state.needListener && onLineClick(line);
        }
      });
    });
  };
}
