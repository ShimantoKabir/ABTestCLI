import { mBoxNames, selectors, triggerMetrics } from "../common/asset";

export class LineService {
  clickNthLine = (nth: number, callback: Function) => {
    const circles: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.circles);

    if (!circles || circles.length === 0) {
      return;
    }

    circles.item(nth).click();

    setTimeout(() => {
      callback();
    }, 250);
  };

  addListener = () => {
    const circles: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.circles);

    if (!circles || circles.length === 0) {
      return;
    }

    circles.forEach((circle: HTMLDivElement) => {
      circle.addEventListener("click", () => {
        triggerMetrics(mBoxNames.lineClick);
      });
    });
  };
}
