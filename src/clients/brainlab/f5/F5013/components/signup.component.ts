import { selectors } from "../common/asset";
import { ServiceComponent } from "./service.component";

export class SignupComponent {
  serviceComponent: ServiceComponent = new ServiceComponent();

  private getHtml = () => {
    const htmlString: string = `
      <div class="signup-component" >
        <div class="heading" >
          <h3>Want priority access to exclusive news, product release information, and events?</h3>
        </div>
        <div class="cta" >
          <button class="signup-button" >Sign up</button>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const blogContent = document.querySelector(selectors.blogContent);
    if (!blogContent) {
      return;
    }

    blogContent.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
