import { Initializer } from "../../../../../utilities/initializer";
import {
  isFormSubmittedStorageKey,
  mboxNames,
  mktoForms2,
  scriptLink,
  selectors,
} from "../common/asset";
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

          form.onSuccess((values: any, followUpUrl: any) => {
            location.href = TestInfo.TARGET.toString();
            console.log(mboxNames.formSubmittedSuccessfully);
            // localStorage.setItem(isFormSubmittedStorageKey, "true");
            // @ts-ignore
            adobe.target.trackEvent({
              mbox: mboxNames.formSubmittedSuccessfully,
            });
            return false;
          });
        });
      });

    this.setObserver();
  };

  setObserver = () => {
    const infrastructureSection: null | HTMLDivElement = document.querySelector(
      selectors.infrastructureSection
    );

    const modalCloseIcon: null | HTMLDivElement = document.querySelector(
      selectors.modalCloseIcon
    );

    const formComponentContainer: null | HTMLDivElement =
      document.querySelector(selectors.formComponentContainer);

    if (!infrastructureSection || !modalCloseIcon || !formComponentContainer) {
      return;
    }

    modalCloseIcon.addEventListener("click", () => {
      formComponentContainer.classList.remove("show-form-component-container");
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // && localStorage.getItem(isFormSubmittedStorageKey) !== "true"
        if (
          !formComponentContainer.classList.contains(
            "show-form-component-container"
          ) &&
          entry.isIntersecting &&
          TestInfo.VARIATION.toString() === "1" &&
          entry.boundingClientRect.top > 0
        ) {
          formComponentContainer.classList.add("show-form-component-container");
        }

        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          console.log("scrolled=", mboxNames.tenPercentScroll);
          // @ts-ignore
          adobe.target.trackEvent({ mbox: mboxNames.tenPercentScroll });
        }

        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          console.log("scrolled=", mboxNames.twentyPercentScroll);
          // @ts-ignore
          adobe.target.trackEvent({ mbox: mboxNames.twentyPercentScroll });
        }
      });
    });

    observer.observe(infrastructureSection);
  };
}
