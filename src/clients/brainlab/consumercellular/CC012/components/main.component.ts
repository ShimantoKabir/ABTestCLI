import { Initializer } from "../../../../../utilities/initializer";
import {
  maxHtmlLengthToRender,
  mboxNames,
  pathnames,
  triggerMetrics,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { QuickFilterComponent } from "./quick-filter.component";
import { ServiceComponent } from "./service.component";

export class MainComponent {
  location: string = "";
  isGridContainerFound: boolean = false;
  isFilterMenuFound: boolean = false;
  serviceComponent: ServiceComponent = new ServiceComponent();
  quickFilterComponent: QuickFilterComponent = new QuickFilterComponent(
    this.serviceComponent
  );
  variation: string = TestInfo.VARIATION.toString();
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

        // console.log("target-html-length=", target.innerHTML.length);

        if (
          target &&
          target.innerHTML &&
          target.innerHTML.length > maxHtmlLengthToRender &&
          !this.isFilterMenuFound &&
          this.location === pathnames.device &&
          !this.isControlMetricsAdded &&
          this.variation === "control"
        ) {
          // this.serviceComponent.addDropdownFilterMetrics();
          this.serviceComponent.clearQuickFilter();
          this.isControlMetricsAdded = true;
        }

        if (
          target &&
          target.innerHTML &&
          target.innerHTML.length > maxHtmlLengthToRender &&
          !this.isGridContainerFound &&
          this.location === pathnames.device &&
          this.variation === "1"
        ) {
          this.quickFilterComponent.render();
          this.serviceComponent.initAndClearFilter();
          this.serviceComponent.clearQuickFilter();
          this.serviceComponent.addListenerToClearFilter();
          this.quickFilterComponent.disableDropDownFilter();
          this.isGridContainerFound = true;
        }

        if (
          target &&
          target.innerHTML &&
          target.innerHTML.length > maxHtmlLengthToRender &&
          !this.isGridContainerFound &&
          this.location === pathnames.device &&
          this.variation === "2"
        ) {
          this.quickFilterComponent.render();
          this.serviceComponent.initAndClearFilter();
          this.serviceComponent.clearQuickFilter();
          this.serviceComponent.addListenerToClearFilter();
          this.quickFilterComponent.disableDropDownFilter();
          this.isGridContainerFound = true;
        }
      }
    };
    testObserver.observe(callback);
  };
}
