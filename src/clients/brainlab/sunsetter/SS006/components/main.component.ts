import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const formFiledDivisions: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(
        `${selectors.formFieldDivisions}, ${selectors.dealerContactBlockField}`
      );

    if (!formFiledDivisions || formFiledDivisions.length === 0) {
      return;
    }

    formFiledDivisions.forEach((div: HTMLDivElement) => {
      div.classList.contains("form-floating") &&
        div.classList.add("form-vertical");
      div.classList.contains("form-floating") &&
        div.classList.remove("form-floating");
    });

    this.addFormHeader();
  };

  addFormHeader = () => {
    const legend: null | HTMLLegendElement = document.querySelector(
      selectors.legend
    );
    if (!legend) {
      return;
    }

    legend.textContent = "Let’s save you $200 right now!";
  };
}
