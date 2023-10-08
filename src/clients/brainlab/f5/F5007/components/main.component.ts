import { Initializer } from "../../../../../utilities/initializer";
import { mktoForms2, scriptLink, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { FormFooterComponent } from "./form-footer.component";
import { FormComponent } from "./form.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const formComponent = new FormComponent();
    formComponent.render();

    const loader = new Loader<HTMLScriptElement>();

    loader
      .load(scriptLink, TestInfo.ID.toString(), "script")
      .then((element) => {
        // @ts-ignore
        MktoForms2.loadForm(
          mktoForms2.domain,
          mktoForms2.munchkinId,
          mktoForms2.formId
        ).whenReady((form: any) => {
          const privacyPolicy: null | Element = document.querySelector(
            selectors.privacyPolicy
          );
          if (privacyPolicy) {
            privacyPolicy.insertAdjacentHTML(
              "beforeend",
              FormFooterComponent.render()
            );
          }
        });
      });
  };
}
