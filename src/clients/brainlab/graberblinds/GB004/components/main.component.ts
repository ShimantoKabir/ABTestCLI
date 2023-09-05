import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { ConfirmComponent } from "./confirm.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const confirmComponent = new ConfirmComponent();
    confirmComponent.renderButtons();
  };
}
