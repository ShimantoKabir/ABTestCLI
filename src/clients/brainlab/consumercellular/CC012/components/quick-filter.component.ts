import {
  getSpecificFilterMenuHierarchy,
  mboxNames,
  mobileBreakPoint,
  selectors,
  triggerMetrics,
  v1QuickFilters,
  v2QuickFilters,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { QuickFilterModel } from "../models/quick-filter-model";
import { ServiceComponent } from "./service.component";

export class QuickFilterComponent {
  variation: string = TestInfo.VARIATION.toString();
  quickFilters: QuickFilterModel[] = [];
  serviceComponent!: ServiceComponent;

  constructor(serviceComponent: ServiceComponent) {
    this.serviceComponent = serviceComponent;
    this.quickFilters =
      this.variation === "1" ? v1QuickFilters : v2QuickFilters;
  }

  getQuickFilterItemHtml = (quickFilterModel: QuickFilterModel): string => {
    const htmlString: string = `
      <div class="filer-menu" >
        <div class="" id="${quickFilterModel.id}" >${quickFilterModel.label}</div>
      </div
    `;
    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="quick-filer-component" >
        ${this.quickFilters.map((quickFilterModel: QuickFilterModel) =>
          this.getQuickFilterItemHtml(quickFilterModel)
        )}.join("\n")}
      <div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const gridContainer: HTMLDivElement | null = document.querySelector(
      selectors.shoppingHeader
    );
    if (!gridContainer) {
      return;
    }

    const insertPosition: InsertPosition =
      mobileBreakPoint < window.innerWidth ? "beforebegin" : "afterend";

    gridContainer.insertAdjacentHTML(insertPosition, this.getHtml());

    this.makeReactive();
  };

  makeReactive = () => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selectors.quickFilterMenus);

    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      const id: string | null = button.getAttribute("id");
      this.addListenerToExistFilter(id, button);

      button.addEventListener("click", () => {
        this.serviceComponent.clearAllFilter();
        this.filter(id);
        button.classList.toggle("active");
        triggerMetrics(mboxNames.quickFilterClick);
      });
    });
  };

  addListenerToExistFilter = (id: string | null, button: HTMLButtonElement) => {
    const filterMenu: null | HTMLDivElement = document.querySelector(
      selectors.filterMenu
    );

    const existFilter = this.findExistFilter(id);
    existFilter &&
      existFilter.addEventListener("click", () => {
        setTimeout(() => {
          filterMenu &&
            !filterMenu.getAttribute("style") &&
            button.classList.toggle("active");
        }, 25);
      });
  };

  findExistFilter = (id: string | null): HTMLDivElement | null => {
    if (!id) {
      return null;
    }

    const quickFilterModelId = Number(id);

    const quickFilterModel: QuickFilterModel | undefined =
      this.quickFilters.find(
        (model: QuickFilterModel) => model.id === quickFilterModelId
      );

    if (!quickFilterModel) {
      return null;
    }

    const existFilterSelector: string = getSpecificFilterMenuHierarchy(
      quickFilterModel.parentPosition,
      quickFilterModel.childPosition
    );

    return document.querySelector(existFilterSelector);
  };

  filter = (id: string | null) => {
    const existFilter = this.findExistFilter(id);
    existFilter && existFilter.click();
  };

  disableDropDownFilter = () => {
    const ids: string[] = this.quickFilters.map(
      (quickFilter: QuickFilterModel) => quickFilter.id.toString()
    );

    const t = this;
    ids.forEach((id) => {
      const li = t.findExistFilter(id);
      li &&
        li.parentElement &&
        li.parentElement.classList.add("disable-listener");
    });
  };
}
