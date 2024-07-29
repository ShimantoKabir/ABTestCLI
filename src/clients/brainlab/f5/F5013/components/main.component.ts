import { Initializer } from "../../../../../utilities/initializer";
import {
  mboxNames,
  mktoForms2,
  scriptLink,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { FormFooterComponent } from "./form-footer.component";
import { FormComponent } from "./form.component";
import { SignupComponent } from "./signup.component";

export class MainComponent {
  signupComponent: SignupComponent = new SignupComponent();
  formComponent: FormComponent = new FormComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    this.signupComponent.render();
    this.formComponent.render();

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
          this.loadPrivacyPolicy();

          form.onSuccess((values: any, followUpUrl: any) => {
            triggerMetrics(mboxNames.formSubmittedSuccessfully);
            this.formComponent.showSuccessMessage();
            return false;
          });
        });
      });
  };

  loadPrivacyPolicy = () => {
    const privacyPolicy: null | Element = document.querySelector(
      selectors.privacyPolicy
    );
    if (!privacyPolicy) {
      return;
    }

    privacyPolicy.insertAdjacentHTML("beforeend", FormFooterComponent.render());
  };
}
