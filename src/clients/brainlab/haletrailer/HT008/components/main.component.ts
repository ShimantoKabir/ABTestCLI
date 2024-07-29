import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ArrowComponent } from "./arrow.component";
import { TrailerInfoComponent } from "./trailer-info.component";

export class MainComponent {
  arrowComponent: ArrowComponent = new ArrowComponent();
  isModificationTriggered: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.triggerModification();
    const filterButtons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(
        `${selectors.submitButton}, ${selectors.resetButton}`
      );

    if (!filterButtons || filterButtons.length === 0) {
      return;
    }

    filterButtons.forEach((button: HTMLButtonElement) => {
      button &&
        button.addEventListener("click", () => {
          setTimeout(() => {
            window.location.href = window.location.href;
          }, 250);
        });
    });
  };

  triggerModification = (): void => {
    const trailerWraps: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.trailerWrap);

    if (!trailerWraps || trailerWraps.length === 0) {
      return;
    }

    trailerWraps.forEach((trailerWrap: HTMLDivElement) => {
      trailerWrap.classList.remove("has-white-background-color");

      const trailerYearAndStock: null | HTMLDivElement =
        trailerWrap.querySelector(selectors.trailerYearAndStock);

      const trailerLengthAndWidth: null | HTMLDivElement =
        trailerWrap.querySelector(selectors.trailerLengthAndWidth);

      const trailerStatus: null | HTMLDivElement = trailerWrap.querySelector(
        selectors.trailerStatus
      );

      if (
        trailerYearAndStock &&
        trailerYearAndStock.textContent &&
        trailerLengthAndWidth &&
        trailerLengthAndWidth.textContent &&
        trailerStatus
      ) {
        const yearAndStock = this.getDataFromTextContent(
          trailerYearAndStock.textContent
        );

        const lengthAndWidth = this.getDataFromTextContent(
          trailerLengthAndWidth.textContent
        );

        const stockAndLength: string =
          TrailerInfoComponent.getHtml(
            "Stock #",
            yearAndStock[0],
            false,
            "stock-info"
          ) +
          TrailerInfoComponent.getHtml(
            "Length",
            lengthAndWidth[0],
            false,
            "length-info"
          );

        trailerYearAndStock.insertAdjacentHTML("afterend", stockAndLength);

        const yearAndWidth: string =
          TrailerInfoComponent.getHtml(
            "Year",
            yearAndStock[1],
            true,
            "year-info"
          ) +
          TrailerInfoComponent.getHtml(
            "Width",
            lengthAndWidth[1],
            true,
            "width-info"
          );

        trailerStatus.classList.add("hide");

        trailerStatus.insertAdjacentHTML("afterend", yearAndWidth);
      }

      trailerWrap.insertAdjacentHTML(
        "beforeend",
        this.arrowComponent.getHtml()
      );
    });

    this.arrowComponent.reactive();
  };

  getDataFromTextContent = (textContent: string): string[] => {
    let splits: string[] = textContent.trim().replace(/\s/g, "-").split("-");

    splits = splits.filter(
      (ys) =>
        ys &&
        ys !== "#:" &&
        ys !== "Stock" &&
        ys !== "Year:" &&
        ys !== "Length:" &&
        ys !== "Width:"
    );

    return splits;
  };
}
