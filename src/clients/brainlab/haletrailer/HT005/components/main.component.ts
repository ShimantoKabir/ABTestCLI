import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Branch } from "../models/branch";
import { LocationComponent } from "./location.component";

export class MainComponent {
  branches: Branch[] = [];

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const pageHeader: null | HTMLDivElement = document.querySelector(
      selectors.pageHeader
    );
    const main: null | HTMLDivElement = document.querySelector(selectors.main);

    const formWrapper: null | HTMLDivElement = document.querySelector(
      selectors.formWrapper
    );
    const locationMap: null | HTMLDivElement = document.querySelector(
      selectors.locationMap
    );
    const breadcrumbBar: null | HTMLDivElement = document.querySelector(
      selectors.breadcrumbBar
    );

    const branchLocationList: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.branchLocationList);

    const ukContainerLarge: null | HTMLDivElement = document.querySelector(
      selectors.ukContainerLarge
    );

    const ukContainerLargeFirstChild: null | HTMLDivElement =
      document.querySelector(selectors.ukContainerLarge + ">div:first-child");

    if (
      !main ||
      !pageHeader ||
      !breadcrumbBar ||
      !locationMap ||
      !formWrapper ||
      !branchLocationList ||
      branchLocationList.length === 0 ||
      !ukContainerLarge ||
      !ukContainerLargeFirstChild
    ) {
      return;
    }

    main.insertAdjacentElement(
      "beforeend",
      breadcrumbBar.cloneNode(true) as Element
    );
    breadcrumbBar.remove();

    main.insertAdjacentElement(
      "beforeend",
      pageHeader.cloneNode(true) as Element
    );
    pageHeader.remove();

    formWrapper.insertAdjacentElement(
      "afterbegin",
      locationMap.cloneNode(true) as Element
    );

    branchLocationList.forEach((a: HTMLAnchorElement, index: number) => {
      const i = index + 1;

      const href: string | null = a.getAttribute("href");
      const text: string | null = a.textContent;

      const isBreakPoint: boolean = i % 4 === 0 ? true : false;

      href &&
        text &&
        this.branches.push({
          href: href,
          text: text,
          isBreakPoint: isBreakPoint,
        });
    });

    const locationComponent = new LocationComponent();
    locationComponent.render(this.branches);

    ukContainerLarge.insertAdjacentElement(
      "beforeend",
      ukContainerLargeFirstChild.cloneNode(true) as Element
    );
    ukContainerLargeFirstChild.remove();
  };
}
