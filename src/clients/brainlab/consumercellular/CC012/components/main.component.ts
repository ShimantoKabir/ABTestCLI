import { Initializer } from "../../../../../utilities/initializer";
import { mboxNames, pathnames, triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { QuickFilterComponent } from "./quick-filter.component";
import { ServiceComponent } from "./service.component";

export class MainComponent {
  location: string = "";
  isGridContainerFound: boolean = false;
  isFilterMenuFound: boolean = false;
  quickFilterComponent: QuickFilterComponent = new QuickFilterComponent();
  variation: string = TestInfo.VARIATION.toString();
  serviceComponent: ServiceComponent = new ServiceComponent();
  isControlMetricsAdded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.16");
  }

  init = (): void => {
    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isGridContainerFound = false;
      this.isFilterMenuFound = false;
      this.isControlMetricsAdded = false;
      this.location === pathnames.device &&
        triggerMetrics(mboxNames.devicePageVisit);
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (
          target &&
          target.classList &&
          target.classList.contains("filter-menu") &&
          !this.isFilterMenuFound &&
          this.location === pathnames.device &&
          !this.isControlMetricsAdded &&
          this.variation === "control"
        ) {
          this.serviceComponent.addMainFilterMetrics();
          this.isControlMetricsAdded = true;
        }

        if (
          target &&
          target.classList &&
          target.classList.contains("cciShoppingLayout") &&
          !this.isFilterMenuFound &&
          this.location === pathnames.device &&
          !this.isControlMetricsAdded &&
          this.variation === "control"
        ) {
          this.serviceComponent.addMainFilterMetrics();
          this.isControlMetricsAdded = true;
        }

        if (
          target &&
          target.classList &&
          !this.isGridContainerFound &&
          target.classList.contains("grid-item-container") &&
          this.location === pathnames.device
        ) {
          this.variation === "1" && this.quickFilterComponent.render();
          this.isGridContainerFound = true;
        }

        if (
          target &&
          target.classList &&
          !this.isGridContainerFound &&
          target.classList.contains("grid-container") &&
          this.location === pathnames.device
        ) {
          this.variation === "1" && this.quickFilterComponent.render();
          this.isGridContainerFound = true;
        }

        if (
          target &&
          target.classList &&
          !this.isGridContainerFound &&
          target.classList.contains("cciShoppingLayout") &&
          this.location === pathnames.device
        ) {
          this.variation === "1" && this.quickFilterComponent.render();
          this.isGridContainerFound = true;
        }
      }
    };
    testObserver.observe(callback);
  };
}
