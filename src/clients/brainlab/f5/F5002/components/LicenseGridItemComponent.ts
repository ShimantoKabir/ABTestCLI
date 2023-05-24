import { rightArrow } from "../common/asset";
import { TestInfo } from "../common/test.info";

const LicenseGridItemComponent = (item: any) => {
  const htmlStr = `
      <div class="${TestInfo.ID.toString()}__grid-container" >
          <div class="grid-icon" >
            <img src="${item.imgSrc}" >
          </div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="item-link" >
              <a class="license" href="${item.linkHref}" >${item.linkText}</a>
              <div class="link-icon" >
                ${rightArrow}
              </div>
            </div>
      </div>`;
  return htmlStr.trim();
};

export default LicenseGridItemComponent;
