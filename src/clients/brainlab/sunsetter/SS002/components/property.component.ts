import { propertyData, selectors } from "../common/asset";

export class PropertyComponent {
  private getQualityItemHtml = (quality: any): string => {
    const htmlString: string = `
      <div class="quality" >
        <div class="heading" >
          <h3>${quality.heading}</h3>
        </div>
        <div class="descriptions" >
          <ul>
          ${quality.descriptions
            .map((description: any) => `<li>${description}</li>`)
            .join("\n")}
          </ul>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="property-component" >
        <div class="component-wrap" >
          <div class="component-image" >
            <img src="${propertyData.imgSrc}" alt="quality" >
          </div>
          <div class="qualities" >
            ${propertyData.qualities
              .map((quality) => this.getQualityItemHtml(quality))
              .join("\n")}
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const targetSection: null | HTMLDivElement = document.querySelector(
      selectors.targetSection
    );

    if (!targetSection) {
      return;
    }

    targetSection.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
