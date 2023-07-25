import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LineComponent } from "./line.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const existPlanSection: null | Element = document.querySelector(
      selectors.existPlanSection
    );

    if (existPlanSection) {
      const lineComponent = new LineComponent();
      existPlanSection.insertAdjacentHTML("afterend", lineComponent.render());

      lineComponent.onBulletClick();
    }
  };
}
