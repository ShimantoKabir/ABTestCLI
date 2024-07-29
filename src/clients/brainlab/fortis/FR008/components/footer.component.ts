import { NavComponent } from "./hero/nav.component";

export class FooterComponent {
  navComponent: NavComponent = new NavComponent();

  getHtml = (): string => {
    const htmlString: string = `
      <div class="footer-component" >
        ${this.navComponent.getHtml()}
      </div>
    `;
    return htmlString.trim();
  };
}
