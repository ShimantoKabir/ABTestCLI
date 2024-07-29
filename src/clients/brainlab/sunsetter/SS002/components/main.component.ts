import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { PropertyComponent } from "./property.component";

export class MainComponent {
  propertyComponent: PropertyComponent = new PropertyComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const container: null | HTMLDivElement = document.querySelector(
      selectors.container
    );

    container && container.classList.add("component-container");

    this.propertyComponent.render();
  };
}
