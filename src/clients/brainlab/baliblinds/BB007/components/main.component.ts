import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { TestObserver } from "../observer/test.observer";
import { SuccessComponent } from "./success.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const successComponent = new SuccessComponent();
    const requestConsultationFormContainer: undefined | HTMLDivElement =
      successComponent.render();

    const testObserver = new TestObserver(selectors.formConfirmation);

    const callback = (mutationList: MutationRecord[]) => {
      requestConsultationFormContainer &&
        requestConsultationFormContainer.classList.add("success");
    };

    testObserver.observe(callback);
  };
}
