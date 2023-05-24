import { licenseDetails, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import EnvironmentComponent from "./EnvironmentComponent";
import LicenseGridItemsComponent from "./LicenseGridItemsComponent";

export class LicenseEnvironmentComponent {
  constructor() {}

  getHtml = (): string => {
    const html = `
      <div class='${TestInfo.ID.toString()}__lic-env-container' >
        ${EnvironmentComponent()}
        ${LicenseGridItemsComponent(licenseDetails)}
      <div>
    `;
    return html.trim();
  };

  render = () => {
    document
      .querySelector(selectors.heroSection)
      ?.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
