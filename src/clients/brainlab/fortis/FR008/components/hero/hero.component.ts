import { FormComponent } from "./form.component";
import { NavComponent } from "./nav.component";
import { TextComponent } from "./text.component";

export class HeroComponent {
  navComponent: NavComponent = new NavComponent();
  textComponent: TextComponent = new TextComponent();
  formComponent: FormComponent = new FormComponent();

  getHtml = () => {
    const htmlString: string = `
      <div class="hero-component" > 
        <div class="hero-bg" ></div>
        <div class="component-wrap" >
          <div class="nav-component" >
            ${this.navComponent.getHtml()}
          </div>
          <div class="text-form" >
            ${this.textComponent.getHtml()}
            ${this.formComponent.getHtml()}
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
