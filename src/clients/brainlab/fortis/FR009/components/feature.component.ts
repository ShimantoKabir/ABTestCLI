import { features } from "../common/asset";

export class FeatureComponent {
  private getFeatureItemHtml = (feature: any): string => {
    const htmlString: string = `
      <div class="feature-item" >
        <div class="icon" >
          ${feature.icon}
        </div>
        <div class="title" >
          <h4>${feature.title}</h4>
        </div>
        <div class="description" >
          <p>${feature.description}</p>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="feature-component" >
        <div class="component-wrap" >
          ${features
            .map((feature: any) => this.getFeatureItemHtml(feature))
            .join("\n")}
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
