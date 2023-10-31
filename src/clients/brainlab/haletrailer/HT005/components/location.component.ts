import { selectors } from "../common/asset";
import { Branch } from "../models/branch";

export class LocationComponent {
  getHtml = (branches: Branch[]): string => {
    const htmlString: string = `
        <div class="location-component" >
            <div class="header" >
                <h4>Branch Locations</h4>
            </div>
            <div class="locations" >
            ${branches
              .map((branch: Branch, index) => {
                return `<a href="${branch.href}" >${branch.text}</a>`;
              })
              .join("\n")}
            </div>
        </div>
    `;
    return htmlString.trim();
  };

  render = (branches: Branch[]) => {
    const locationMapBottom: null | HTMLDivElement = document.querySelector(
      selectors.locationMapBottom
    );

    if (!locationMapBottom) {
      return;
    }

    locationMapBottom.insertAdjacentHTML("beforeend", this.getHtml(branches));
  };
}
