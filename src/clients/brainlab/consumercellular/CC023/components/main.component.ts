import { Initializer } from "../../../../../utilities/initializer";
import { pageLoadKey, selectors } from "../common/asset";
import { Store } from "../common/store";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { DueService } from "./due.service";

export class MainComponent {
  location: string = "";
  isPageLoaded: boolean = false;
  observer: MutationObserver | null = null;
  dueService: DueService = new DueService();
  store: Store = new Store();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    if (window.innerWidth > 719) {
      return;
    }

    LocationObserver.listen((location: string) => {
      this.location = location;
      this.isPageLoaded = false;
      this.store.isComponentMoved = false;
    });

    const testObserver = new TestObserver("body");
    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (
          target.classList.contains(pageLoadKey.rememberMe) &&
          this.isPageLoaded === false &&
          window.location.pathname === "/shopping"
        ) {
          console.log("Page loaded...!");
          this.dueService.reRender(this.store);
          this.observer && this.observer.disconnect();
          this.isPageLoaded = true;
        }

        if (
          target.classList.contains(pageLoadKey.planSummary) &&
          this.isPageLoaded === false &&
          window.location.pathname === "/shopping"
        ) {
          console.log("Page loaded...!");
          this.dueService.reRender(this.store);
          this.observer && this.observer.disconnect();
          this.isPageLoaded = true;
        }
      }
    };

    this.observer = testObserver.observe(callback);
  };
}
