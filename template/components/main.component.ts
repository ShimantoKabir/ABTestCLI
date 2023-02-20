// import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { DummyComponent } from "./dummy.component";

export class MainComponent {
  init = (): void => {
    // Initializer.init(TestInfo, "0.0.1");
    const dummyComponent = new DummyComponent();
    dummyComponent.render();
  };
}
