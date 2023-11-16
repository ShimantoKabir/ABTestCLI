import {
  getSpecificFilterMenuHierarchy,
  mboxNames,
  quickFilters,
  triggerMetrics,
} from "../common/asset";
import { QuickFilterModel } from "../models/quick-filter-model";

export class ServiceComponent {
  constructor() {}
  addMainFilterMetrics = () => {
    quickFilters.forEach((model: QuickFilterModel) => {
      const existFilterSelector: string = getSpecificFilterMenuHierarchy(
        model.parentPosition,
        model.childPosition
      );

      const existFilterCta: null | HTMLDivElement =
        document.querySelector(existFilterSelector);
      existFilterCta && this.addListener(existFilterCta);
    });
  };

  addListener = (filterCta: HTMLDivElement) => {
    filterCta.addEventListener("click", () => {
      triggerMetrics(mboxNames.filterCtaClick);
    });
  };
}
