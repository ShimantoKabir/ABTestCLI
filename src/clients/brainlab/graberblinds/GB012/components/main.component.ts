import { Initializer } from "../../../../../utilities/initializer";
import { selectors, studioModels, triggerEvent } from "../common/asset";
import { StudioModel } from "../common/studio.mode";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../common/test.observer";
import { StudioComponent } from "./studio.component";

export class MainComponent {
  studioComponent: StudioComponent = new StudioComponent();
  variation: string = TestInfo.VARIATION.toString();
  isFormSubmittedSuccessfully: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.addGoals();

    if (this.variation === "control") {
      return;
    }

    const studioModel: StudioModel | undefined = studioModels.find(
      (s: StudioModel) => s.variation === this.variation
    );

    if (!studioModel) {
      return;
    }

    this.studioComponent.render(studioModel);
    this.addOnRadiusSelectExpertSearch();
    this.addDivider();
  };

  addGoals = () => {
    const testObserver = new TestObserver(selectors.formConfirmation);

    const callback = (mutationList: MutationRecord[]) => {
      triggerEvent("form-submitted-successfully");
    };

    testObserver.observe(callback);
  };

  addDivider = () => {
    const mapWrapper: null | HTMLDivElement = document.querySelector(
      selectors.mapWrapper
    );

    if (!mapWrapper) {
      return;
    }

    mapWrapper.insertAdjacentHTML(
      "beforebegin",
      `<div class="form-and-map-divider" ></div>`
    );
  };

  addOnRadiusSelectExpertSearch = () => {
    const radiusInput: null | HTMLSelectElement = document.querySelector(
      selectors.radiusInput
    );

    const addressInput: null | HTMLInputElement = document.querySelector(
      selectors.addressInput
    );

    const searchExpertInput: null | HTMLInputElement = document.querySelector(
      selectors.searchExpertInput
    );

    if (!radiusInput || !addressInput || !searchExpertInput) {
      return;
    }

    radiusInput.addEventListener("input", () => {
      radiusInput.value && addressInput.value && searchExpertInput.click();
    });
  };
}
