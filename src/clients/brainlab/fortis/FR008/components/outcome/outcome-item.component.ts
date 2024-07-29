import { Outcome } from "../../model/outcome";

export class OutcomeItemComponent {
  getHtml = (outcome: Outcome, isReversed: boolean): string => {
    const htmlString: string = `
      <div class="outcome-item-component" >
        <div class="component-wrap" >
          <div class="text" >
            <div class="title" >
              <h2>${outcome.title}</h2>
            </div>
            <div class="description" >
              ${outcome.descriptions
                .map((description: string) => `<p>${description}</p>`)
                .join("\n")}
            </div>
            <div class="feature" >
              <ul>
                ${outcome.features
                  .map((feature: string) => `<li>${feature}</li>`)
                  .join("\n")}
              </ul>
            </div>
          </div>
          <div class="image" >
            <div class="image-wrap" >
              <img src="${outcome.imgSrc}" >
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
