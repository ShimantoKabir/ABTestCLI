import { logo } from "../common/asset";

export class NavbarComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="navbar-component" >
        <div class="component-wrap" >
          <div class="logo" >
            <img src="${logo}" alt="logo-img" >
          </div>
          <div class="cta" >
            <button mbox-name="navbar-apply-button" >LEARN HOW TO APPLY TODAY</button>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
