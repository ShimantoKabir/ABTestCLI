import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { StepComponent } from "./step.component";

export class MainComponent {
  stepComponent: StepComponent = new StepComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.stepComponent.render();
  };
}
