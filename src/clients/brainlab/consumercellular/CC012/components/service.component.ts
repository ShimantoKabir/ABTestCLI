import {
  controlQuickFilters,
  getSpecificFilterMenuHierarchy,
  mboxNames,
  selectors,
  triggerMetrics,
  trimText,
  v1QuickFilters,
  v2QuickFilters,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { QuickFilterModel } from "../models/quick-filter-model";

export class ServiceComponent {
  variation: string = TestInfo.VARIATION.toString();
  quickFilters: QuickFilterModel[] = [];
  clearFilterButtonText: string = "clear-filters";
  addedListenerNames: string[] = [];
  removedListenerName: string[] = [];
  clearFilterSpan!: HTMLSpanElement;
  isQuickFilterClicked: boolean = false;

  constructor() {
    this.quickFilters = this.quickFilters =
      this.variation === "control"
        ? controlQuickFilters
        : this.variation == "1"
        ? v1QuickFilters
        : v2QuickFilters;
  }

  addDropdownFilterMetrics = () => {
    this.quickFilters.forEach((model: QuickFilterModel) => {
      const existFilterSelector: string = getSpecificFilterMenuHierarchy(
        model.parentPosition,
        model.childPosition
      );

      const existFilterCta: null | HTMLDivElement =
        document.querySelector(existFilterSelector);
      existFilterCta && this.addListener(existFilterCta, model.variation);
    });
  };

  addListener = (filterCta: HTMLDivElement, variation: number) => {
    filterCta.addEventListener("click", () => {
      triggerMetrics(mboxNames.quickFilterClick);
    });
  };

  initAndClearFilter = () => {
    const activeFilters: null | NodeListOf<HTMLSpanElement> =
      document.querySelectorAll(selectors.activeFilters);

    activeFilters.forEach((span: HTMLSpanElement) => {
      span.textContent &&
        trimText(span.textContent) === this.clearFilterButtonText &&
        this.initialClearAllFilterButton(span) &&
        span.click();
    });
  };

  initialClearAllFilterButton = (span: HTMLSpanElement) => {
    this.clearFilterSpan = span;
    return true;
  };

  clearAllFilter = () => {
    this.isQuickFilterClicked = true;
    this.clearFilterSpan.click();
    return true;
  };

  addListenerToClearFilter = () => {
    const clearFiler: null | HTMLSpanElement = document.querySelector(
      selectors.clearFilter
    );

    if (!clearFiler) {
      return;
    }

    clearFiler.addEventListener("click", () => {
      this.inActiveQuickFilter("", true);
    });
  };

  clearQuickFilter = () => {
    const targetNode: null | HTMLDivElement =
      document.querySelector("div.active-filters");

    const callback = (mutationList: MutationRecord[]) => {
      mutationList.length > 0 &&
        mutationList[0].removedNodes.length > 0 &&
        triggerMetrics(mboxNames.clearFiltersClick);

      this.variation !== "control" &&
        mutationList.length > 0 &&
        mutationList[0].removedNodes.length > 0 &&
        targetNode &&
        this.findDifference(targetNode, "remove");

      this.variation !== "control" &&
        mutationList.length > 0 &&
        mutationList[0].addedNodes.length > 0 &&
        targetNode &&
        this.findDifference(targetNode, "add");
    };

    const observer = new MutationObserver(callback);
    targetNode && observer.observe(targetNode, { childList: true });
  };

  findDifference = (targetNode: HTMLDivElement, state: string) => {
    this.removedListenerName = [];

    targetNode.childNodes.forEach((node: Node) => {
      node.textContent &&
        trimText(node.textContent).length > 0 &&
        state === "add" &&
        !this.addedListenerNames.includes(trimText(node.textContent)) &&
        this.addedListenerNames.push(trimText(node.textContent));

      node.textContent &&
        trimText(node.textContent).length > 0 &&
        state === "remove" &&
        !this.removedListenerName.includes(trimText(node.textContent)) &&
        this.removedListenerName.push(trimText(node.textContent));
    });

    if (state === "remove") {
      const unmatchedNames = this.addedListenerNames.filter(
        (item: string) => !this.removedListenerName.includes(item)
      );

      this.addedListenerNames =
        unmatchedNames.length > 0
          ? this.addedListenerNames.filter(
              (item: string) => !unmatchedNames.includes(item)
            )
          : this.addedListenerNames;

      this.inActiveQuickFilter(unmatchedNames[0], false);
    }
  };

  inActiveQuickFilter = (filterName: string, inactiveAll: boolean) => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selectors.quickFilterMenus);

    const filterMenu: null | HTMLDivElement = document.querySelector(
      selectors.filterMenu
    );

    if (!buttons || buttons.length === 0 || !filterMenu) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      !inactiveAll &&
        filterMenu &&
        filterMenu.getAttribute("style") &&
        button.textContent &&
        trimText(button.textContent) === filterName &&
        button.classList.contains("active") &&
        button.classList.remove("active");

      inactiveAll &&
        filterMenu &&
        filterMenu.getAttribute("style") &&
        button.classList.remove("active");
    });
  };
}
