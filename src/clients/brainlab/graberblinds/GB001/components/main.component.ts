import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { MenuComponent } from "./menu.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");
    const menuComponent = new MenuComponent();
    menuComponent.render();
  };
}
