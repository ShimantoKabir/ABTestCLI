import { LearnStep } from "../common/learn-stem";

export class LearnStepComponent {
  private getStepHtml = (learnStep: LearnStep) => {
    const htmlString: string = `
      <div class="step-item" >
        <div class="icon" >
          ${learnStep.icon}
        </div>
        <div class="text-content" >
          <div class="title" >
            <h4>${learnStep.title}</h4>
          </div>
          <div class="description" >
            <p>${learnStep.description}</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  private getHtml = (learnSteps: LearnStep[]): string => {
    const htmlString: string = `
      <div class="learn-step-component" >
        <div class="component-wrap" >
          <div class="headline" >
            <h2>Read this eBook to learn</h2>
          </div>
          <div class="learn-steps" >
            ${learnSteps
              .map((step: LearnStep) => this.getStepHtml(step))
              .join("\n")}
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = (platter: HTMLDivElement, learnSteps: LearnStep[]) => {
    platter.insertAdjacentHTML("afterend", this.getHtml(learnSteps));
  };
}
