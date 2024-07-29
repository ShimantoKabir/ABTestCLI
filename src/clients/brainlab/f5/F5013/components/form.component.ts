import { formInfos, mktoForms2, selectors } from "../common/asset";
import { Icon } from "../models/icon";
import { IconStepComponent } from "./icon-step.component";
import { ServiceComponent } from "./service.component";
import { SuccessComponent } from "./success.component";

export class FormComponent {
  successComponent: SuccessComponent = new SuccessComponent();
  serviceComponent: ServiceComponent = new ServiceComponent();

  getHtml = (): string => {
    const htmlString: string = `
      <div class="form-component-container" >
        ${this.successComponent.getHtml()}
        <div class="form-component" >
          <div class="form-main" >
            <div class="form-main-left">
              <div class="form-header" >
                <div class="form-title" >
                  <h3>${formInfos.title}</h3>
                </div>
                <div class="form-description" >
                  <p>${formInfos.description}</p>
                </div>
              </div>
              <div class="form-icon-step" >
              ${formInfos.icons
                .filter((icon: Icon) => icon.step === 1)
                .map((icon: Icon) => IconStepComponent.render(icon))
                .join("\n")}
              </div>
              <div class="form-icon-step" >
              ${formInfos.icons
                .filter((icon: Icon) => icon.step === 2)
                .map((icon: Icon) => IconStepComponent.render(icon))
                .join("\n")}
              </div>
            </div>
            <div class="form-main-right c28" >
              <div class="form-close-icon" >
                ${formInfos.closeIcon}
              </div>
              <form id="mktoForm_${mktoForms2.formId}"></form>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString;
  };

  render = () => {
    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    body.insertAdjacentHTML("beforeend", this.getHtml());
    this.serviceComponent.manageModalClose(selectors.modalCloseIcon);
    this.serviceComponent.manageModalClose(selectors.signupButton);
  };

  showSuccessMessage = () => {
    const formComponentContainer: null | HTMLDivElement | undefined =
      this.serviceComponent.manageModalClose(selectors.successCloseIcon);

    if (!formComponentContainer) {
      return;
    }

    formComponentContainer.classList.add("success");
  };
}
