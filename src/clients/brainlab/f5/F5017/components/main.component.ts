import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { JumpComponent } from "./jump.component";

export class MainComponent {
  jumpComponent: JumpComponent = new JumpComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.jumpComponent.render();
  };
}
