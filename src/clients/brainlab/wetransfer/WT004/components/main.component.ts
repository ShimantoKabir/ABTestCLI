import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { ToastComponent } from "./toast.component";

export class MainComponent {
  toastComponent: ToastComponent = new ToastComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.toastComponent.render();
  };
}
