import { Initializer } from "../../../../../utilities/initializer";
import { espanolLink, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";

export class MainComponent {
  isElementFound: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.5");
  }

  init = (): void => {
    const rightHeader: HTMLAnchorElement | null = document.querySelector(
      selectors.rightHeader
    );

    if (rightHeader) {
      console.log("No observer needed, found on page load....!");
      this.applyModification(rightHeader, false);
      return;
    }

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (
          target.getAttribute("data-component-name") &&
          target.getAttribute("data-component-name") === "RTE" &&
          !this.isElementFound
        ) {
          const homeRightHeader: HTMLAnchorElement | null =
            document.querySelector(selectors.homeRightHeader);
          console.log("home-right-header=", homeRightHeader);

          this.applyModification(homeRightHeader, true);
          console.log("Modification applied.....!");

          this.isElementFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  applyModification = (rightHeader: Element | null, isHome: boolean) => {
    if (!rightHeader) {
      return;
    }

    const className: string = isHome ? "espanol-link home" : "espanol-link";

    rightHeader.insertAdjacentHTML(
      "afterbegin",
      `<a class="${className}" href="${espanolLink}" >Español</a>`
    );
  };
}
