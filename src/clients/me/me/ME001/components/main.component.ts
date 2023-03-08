import { injectable } from "tsyringe";
import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { DummyComponent } from "./dummy.component";

@injectable()
export class MainComponent {
  constructor(private dummyComponent: DummyComponent) {}

  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    this.dummyComponent.render();
  };
}
