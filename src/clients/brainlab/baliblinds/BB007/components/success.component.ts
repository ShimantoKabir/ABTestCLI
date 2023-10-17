import { selectors } from "../common/asset";

export class SuccessComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="success-component" >
        <div class="success-title" >
          <h2>Thank You!</h2>
        </div>
        <div class="success-description" >
          <p>
            Your inquiry has been submitted. While you wait for a Graber Expert to follow up, why not order some free swatches or try our state-of-the-art visualizer technology?
          </p>
        </div>
        <div class="success-action" >
          <div class="free-swatch" >
            <a href="https://www.graberblinds.com/free-swatches/" alt="free-swatch" >GET FREE SWATCHES</a>
          </div>
          <div class="visualize" >
            <a href="https://www.graberblinds.com/visualization/" alt="visualize" >VISUALIZE YOUR SPACE</a>
          </div>
        </div>        
      </div>
    `;

    return htmlString;
  };

  render = (): HTMLDivElement | undefined => {
    const requestConsultationFormContainer: null | HTMLDivElement =
      document.querySelector(selectors.requestConsultationFormContainer);

    if (!requestConsultationFormContainer) {
      return;
    }

    requestConsultationFormContainer.insertAdjacentHTML(
      "beforeend",
      this.getHtml()
    );

    return requestConsultationFormContainer;
  };
}
