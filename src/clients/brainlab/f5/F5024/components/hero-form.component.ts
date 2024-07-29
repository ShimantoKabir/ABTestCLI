import { f5NoticeUrl, formInfo, formSteps, selectors } from "../common/asset";

export class HeroFormComponent {
  getFormProgressHtml = (step: any, index: number): string => {
    const htmlString: string = `
      <div class="form-progress" >
        <div class="progress-text" >
          <p>${step.text}</p>
        </div>
        <div class="progress-bar" >
          ${step.progressIcon}
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (componentClassName: string, formInfo: any): string => {
    const descriptionClass: string = formInfo.description ? "" : "hide";

    const htmlString: string = `
      <div class="${componentClassName}" >
        <div class="component-wrap ${formInfo.id}" >
          <div class="form-success" >
            <p>Form submitted successfully!</p>
          </div>
          <div class="form-container" >
            <div class="form-header" >
              <div class="form-title" >
                <h3>${formInfo.title}</h3>
              </div>
              <div class="form-description ${descriptionClass}" >
                <p>${formInfo.description}</p>
              </div>
              <div class="form-progress-container ${formInfo.id}">
                ${formSteps
                  .map((step: any, index: number) =>
                    this.getFormProgressHtml(step, index)
                  )
                  .join("\n")}
              </div>
            </div>
            <form 
              id="mktoForm_${formInfo.formId}" 
              class="${formInfo.id}" >
            </form>
            <div class="form-footer" >
              <div class="disclaimer" >
                <p>The information you provide will be treated in accordance with the F5 <a href="${f5NoticeUrl}" >Privacy Notice.</a></p>
              </div>
              <div class="from-actions ${formInfo.id}" >
                <div class="action-right" >
                  <button class="back ${formInfo.id}" >Back</button>
                </div>
                <div class="action-left" >
                  <button class="next ${formInfo.id}" >Next</button>
                  <button class="submit ${formInfo.id}" >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString;
  };

  render = () => {
    const heroSection: null | HTMLDivElement = document.querySelector(
      selectors.heroSection
    );

    if (!heroSection) {
      return;
    }

    heroSection.insertAdjacentHTML(
      "beforeend",
      this.getHtml("hero-form-component", formInfo.hero)
    );
  };

  configForm = () => {
    const emailAndForm: null | HTMLDivElement = document.querySelector(
      selectors.heroFromNthRow + "(3)"
    );

    const job: null | HTMLDivElement = document.querySelector(
      selectors.heroFromNthRow + "(4)"
    );

    const companyAndLocation: null | HTMLDivElement = document.querySelector(
      selectors.heroFromNthRow + "(5)"
    );

    emailAndForm && emailAndForm.classList.add("row-to-col");
    job && job.classList.add("hide");
    companyAndLocation && companyAndLocation.classList.add("hide");

    this.configFormActions();
  };

  configFormActions = () => {
    const nextButton: HTMLButtonElement | null =
      document.querySelector("button.next.hero");
    const backButton: HTMLButtonElement | null =
      document.querySelector("button.back.hero");
    const submitButton: HTMLButtonElement | null =
      document.querySelector("button.submit.hero");
    const formProgressContainer: null | HTMLDivElement = document.querySelector(
      "div.form-progress-container.hero"
    );
    const formActions: null | HTMLDivElement = document.querySelector(
      "div.from-actions.hero"
    );

    const originalSubmitButton: null | HTMLButtonElement =
      document.querySelector("form.hero button.mktoButton");

    console.log("hero-original=", originalSubmitButton);

    const form: null | HTMLFormElement = document.querySelector(
      "div.form-container>form.hero"
    );

    if (
      !nextButton ||
      !backButton ||
      !submitButton ||
      !formActions ||
      !formProgressContainer ||
      !originalSubmitButton ||
      !form
    ) {
      return;
    }

    nextButton.addEventListener("click", () => {
      originalSubmitButton.click();

      setTimeout(() => {
        const errors: NodeListOf<HTMLDivElement> | null =
          document.querySelectorAll(selectors.heroNameEmailPhoneError);
        console.log("error=", errors);

        if (errors.length === 0) {
          formProgressContainer.classList.add("next");
          formActions.classList.add("next");
          form.classList.add("next");
        }
      }, 100);
    });

    backButton.addEventListener("click", () => {
      formProgressContainer.classList.remove("next");
      formActions.classList.remove("next");
      form.classList.remove("next");
    });

    submitButton.addEventListener("click", () => {
      originalSubmitButton.click();

      setTimeout(() => {
        const errors: NodeListOf<HTMLDivElement> | null =
          document.querySelectorAll(selectors.heroNameEmailPhoneError);
        console.log("error=", errors);

        if (errors.length !== 0) {
          formProgressContainer.classList.remove("next");
          formActions.classList.remove("next");
          form.classList.remove("next");
        }
      }, 100);
    });
  };
}
