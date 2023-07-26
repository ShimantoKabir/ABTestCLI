import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LineComponent } from "./line.component";
import { PlanComponent } from "./plan.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const existPlanSection: null | Element = document.querySelector(
      selectors.existPlanSection
    );

    if (existPlanSection) {
      const lineComponent = new LineComponent();
      existPlanSection.insertAdjacentHTML("afterend", lineComponent.render());

      lineComponent.addBulletClickEvent();
    }

    const planContainer: null | HTMLDivElement = document.querySelector(
      selectors.planContainer
    );

    if (planContainer) {
      planContainer.insertAdjacentHTML(
        "afterbegin",
        (planContainer.firstChild as Element).outerHTML
      );
    }

    PlanComponent.addPLanClickEvent();
  };
}
