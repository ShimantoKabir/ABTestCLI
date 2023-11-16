import { triggerMetrics } from "../../CC009/common/utils";
import {
  getSpecificFilterMenuHierarchy,
  mboxNames,
  quickFilters,
  selectors,
} from "../common/asset";
import { QuickFilterModel } from "../models/quick-filter-model";

export class QuickFilterComponent {
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
        ${quickFilters.map((quickFilterModel: QuickFilterModel) =>
          this.getQuickFilterItemHtml(quickFilterModel)
        )}.join("\n")}
      <div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const gridContainer: HTMLDivElement | null = document.querySelector(
      selectors.gridContainer
    );
    if (!gridContainer) {
      return;
    }

    gridContainer.insertAdjacentHTML("beforebegin", this.getHtml());

    this.makeReactive();
  };

  makeReactive = () => {
    const buttons: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("div.quick-filer-component>div.filer-menu>div");

    if (!buttons || buttons.length === 0) {
      return;
    }

    buttons.forEach((button: HTMLButtonElement) => {
      button.addEventListener("click", () => {
        const id: string | null = button.getAttribute("id");

        this.filter(id);
        button.classList.toggle("active");
        triggerMetrics(mboxNames.filterCtaClick);
      });
    });
  };

  filter = (id: string | null) => {
    if (!id) {
      return;
    }

    const quickFilterModelId = Number(id);

    const quickFilterModel: QuickFilterModel | undefined = quickFilters.find(
      (model: QuickFilterModel) => model.id === quickFilterModelId
    );

    if (!quickFilterModel) {
      return;
    }

    const existFilterSelector: string = getSpecificFilterMenuHierarchy(
      quickFilterModel.parentPosition,
      quickFilterModel.childPosition
    );

    const existFilter: HTMLDivElement | null =
      document.querySelector(existFilterSelector);

    existFilter && existFilter.click();
  };
}
