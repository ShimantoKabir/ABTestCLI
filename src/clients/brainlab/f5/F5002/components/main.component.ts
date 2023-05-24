import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { LicenseEnvironmentComponent } from "./LicenseEnvironmentComponent";
import { SuccessObserver } from "../observers/SuccessObserver";

export class MainComponent {
  private licEnvCom: LicenseEnvironmentComponent | null = null;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
    this.licEnvCom = new LicenseEnvironmentComponent();
  }

  init = (): void => {
    this.licEnvCom?.render();

    document
      .querySelector(selectors.grid)
      ?.insertAdjacentHTML(
        "afterbegin",
        `<div class="${TestInfo.ID.toString()}__hero-bg" ></div>`
      );

    const observer = new SuccessObserver();
    observer.observe();
  };
}
