import { features } from "../common/asset";
import { Feature } from "../common/feature.model";

export class FeatureComponent {
  private getFeatureItemHtml = (feature: Feature, index: number): string => {
    const direction: string = index % 2 ? "reverse" : "forward";

    const htmlString: string = `
      <div class="feature-item ${direction}">
        <div class="feature-img" >
          <img src="${feature.imgSrc}" alt="${feature.heading}" />
        </div>
        <div class="feature-gap" ></div>
        <div class="feature-content" >
          <div class="heading" >
            <h2>${feature.heading}</h2>
          </div>
          <div class="description" >
            <p>${feature.description}</p>
          </div>
          <div class="feature-link" >
            <a event-name="${feature.eventName}" href="${feature.href}" >${feature.hrefText}</a>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="feature-container container-xl">
        <div class="feature-component" >
        ${features
          .map((feature: Feature, index: number) =>
            this.getFeatureItemHtml(feature, index)
          )
          .join("\n")}
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
