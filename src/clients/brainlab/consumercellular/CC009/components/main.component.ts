import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { NextButtonComponent } from "./next-button.component";
import { ServiceComponent } from "./service.component";

export class MainComponent {
  isCCIDFound: boolean = false;
  serviceComponent = new ServiceComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.4");
  }

  init = (): void => {
    LocationObserver.listen(() => {
      this.isCCIDFound = false;
    });

    const testObserver = new TestObserver(selectors.shoppingPageContainer);

    const callback = (mutationList: MutationRecord[]) => {
      for (let i = 0; i < mutationList.length; i++) {
        const mutationRecord: MutationRecord = mutationList[i];
        const target: Element = mutationRecord.target as Element;
        if (
          target &&
          target.id &&
          target.id === "ccCCID" &&
          this.isCCIDFound === false
        ) {
          // const breadcrumbComponent = new BreadcrumbComponent();
          // breadcrumbComponent.render();

          const nextButtonComponent = new NextButtonComponent(
            this.serviceComponent
          );
          nextButtonComponent.render(true);

          nextButtonComponent.handleAarpClick(() => {
            // breadcrumbComponent.remove();
            // breadcrumbComponent.render();
            nextButtonComponent.remove();
            nextButtonComponent.render(false);
          });

          this.isCCIDFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };
}
