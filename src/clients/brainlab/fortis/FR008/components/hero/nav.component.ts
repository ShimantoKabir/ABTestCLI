import { logoImgSrc } from "../../common/asset";

export class NavComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="component-wrap" >
        <div class="logo" >
          <div class="logo-img" >
            <img src="${logoImgSrc}" alt="logo image" >
          </div>
          <div class="logo-slogan" >
            <h3>Denver College of Nursing</h3>
          </div>
        </div>
        <div class="nav" >
          <div class="request" >
            <a href="#form-component" >Request Info</a>
          </div>
          <div class="apply" >
            <a href="tel:885-822-3020" >Call Today! 885-822-3020</a>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
