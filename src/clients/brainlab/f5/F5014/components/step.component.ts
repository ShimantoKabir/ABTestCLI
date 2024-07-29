import { selectors, steps } from "../common/asset";

export class StepComponent {
  private getStepHtml = (step: any): string => {
    const htmlString: string = `
      <a class="step-item" href="${step.href}" >
        <div class="icon" >
          ${step.icon}
        </div>
        <div class="title" >
          <h3>${step.title}</h3>
        </div>
        <div class="description" >
          <p>${step.description}</p>
        </div>
        <div class="link" >
          <button>${step.hrefText}</button>
        </div>
      </a>
    `;

    return htmlString.trim();
  };

  private getHtml = () => {
    const htmlString: string = `
      <div class="step-component-header" >
        <h2>Next Steps</h2>
      </div>
      <div class="step-component" >
      ${steps.map((step: any) => this.getStepHtml(step)).join("\n")}
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const aemGrids: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(
        `${selectors.desktopAemGrid}, ${selectors.mobileAemGrid}`
      );

    if (!aemGrids || aemGrids.length === 0) {
      return;
    }

    aemGrids.forEach((aemGrid: HTMLDivElement) => {
      aemGrid.insertAdjacentHTML("beforeend", this.getHtml());
    });
  };
}
