import { TestInfo } from "../common/test.info";
import LicenseGridItemComponent from "./LicenseGridItemComponent";

const LicenseGridItemsComponent = (licenseData: any) => {
  const htmlStr = `
      <div class="${TestInfo.ID.toString()}__license-grid-container" >
        <div class="license-grid" >
          ${licenseData
            .map((item: any) => LicenseGridItemComponent(item))
            .join("\n")}
        </div>
      </div>`;
  return htmlStr.trim();
};

export default LicenseGridItemsComponent;
