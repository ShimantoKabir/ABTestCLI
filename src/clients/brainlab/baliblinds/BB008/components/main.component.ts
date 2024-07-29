import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { ShapeComponent } from "./shape.component";

export class MainComponent {
  shapeComponent: ShapeComponent = new ShapeComponent();
  variation: string = TestInfo.VARIATION.toString();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.variation === "1" && this.shapeComponent.render();
    this.variation === "1" &&
      this.shapeComponent.addOnVisibleGoal(selectors.shape);
    this.variation === "control" &&
      this.shapeComponent.addOnVisibleGoal(selectors.treatment);
  };
}
