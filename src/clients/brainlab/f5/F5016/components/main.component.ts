import { Initializer } from "../../../../../utilities/initializer";
import {
  arrowSvg,
  getAllLastChildSelectors,
  getAllSubHeadingSelectors,
  getNthSubHeadingSelector,
  sectionIds,
} from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const allSubHeadingSelector: string = getAllSubHeadingSelectors();

    const allSubHeadings: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(allSubHeadingSelector);

    if (!allSubHeadings || allSubHeadings.length === 0) {
      return;
    }

    allSubHeadings.forEach((subHeading: HTMLDivElement) => {
      subHeading.addEventListener("click", () => {
        subHeading.classList.toggle("expand");

        subHeading.nextElementSibling &&
          subHeading.nextElementSibling.classList.toggle("show");
      });
    });

    const allLastChildSelectors: string = getAllLastChildSelectors();

    // const allLastChild: null | NodeListOf<HTMLDivElement> =
    //   document.querySelectorAll(allLastChildSelectors);

    // allLastChild &&
    //   allLastChild.forEach((child: HTMLDivElement) => {
    //     child.classList.add("show");

    //     child.previousElementSibling &&
    //       child.previousElementSibling.classList.add("expand");
    //   });

    const headingElms: null | NodeListOf<HTMLHeadingElement> =
      document.querySelectorAll("h3.at02__title");

    headingElms.forEach((heading: HTMLHeadingElement) => {
      heading.insertAdjacentHTML(
        "beforeend",
        `<div class="arrow-icon">${arrowSvg}</div>`
      );
    });
  };
}
