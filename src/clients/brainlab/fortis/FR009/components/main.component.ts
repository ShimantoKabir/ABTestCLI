import { Initializer } from "../../../../../utilities/initializer";
import {
  campusInfo,
  runningCampus,
  selectors,
  triggerMetrics,
} from "../common/asset";
import { TestInfo } from "../common/test.info";
import { AboutComponent } from "./about.component";
import { ContactComponent } from "./contact.component";
import { FeatureComponent } from "./feature.component";
import { FooterComponent } from "./footer.component";
import { FormModifierComponent } from "./form-modifier.component";
import { HeroComponent } from "./hero.component";
import { NavbarComponent } from "./navbar.component";
import { OfferComponent } from "./offer.component";
import { PromiseComponent } from "./promise.component";
import { SuccessStoryComponent } from "./success-story.component";

export class MainComponent {
  navbarComponent: NavbarComponent = new NavbarComponent();
  heroComponent: HeroComponent = new HeroComponent();
  featureComponent: FeatureComponent = new FeatureComponent();
  contactComponent: ContactComponent = new ContactComponent();
  aboutComponent: AboutComponent = new AboutComponent();
  successStoryComponent: SuccessStoryComponent = new SuccessStoryComponent();
  offerComponent: OfferComponent = new OfferComponent();
  promiseComponent: PromiseComponent = new PromiseComponent();
  footerComponent: FooterComponent = new FooterComponent();
  formModifierComponent: FormModifierComponent = new FormModifierComponent();

  constructor() {
    Initializer.init(TestInfo, "0.1.1");
  }

  private getHtml = (): string => {
    //@ts-ignore
    const campusName: string = campusInfo[runningCampus].name;
    console.log("campus-name = ", campusName);

    const htmlString: string = `
      <div class="main-component" >
        <div class="component-wrap" >
          ${this.navbarComponent.getHtml()}
          ${this.heroComponent.getHtml("top", {
            title: "IGNITE YOUR FUTURE AT",
            subTitle: `FORTIS COLLEGE ${campusName.toUpperCase()}`,
            description: "Take Your Career Into Your Own Hands",
          })}
          ${this.featureComponent.getHtml()}
          ${this.contactComponent.getHtml()}
          ${this.aboutComponent.getHtml()}
          ${this.offerComponent.getHtml()}
          ${this.promiseComponent.getHtml()}
          ${this.contactComponent.getHtml()}
          ${this.heroComponent.getHtml("bottom", {
            title: "What Will You Find at Fortis?",
            subTitle: "",
            description: "Your Career Starts Here.",
          })}
          ${this.footerComponent.getHtml()}
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  init = (): void => {
    const main: null | Element = document.querySelector(selectors.main);

    if (!main) {
      return;
    }

    main.insertAdjacentHTML("afterend", this.getHtml());
    this.successStoryComponent.render();
    this.configApplyForm();
    this.formModifierComponent.modify();
  };

  configApplyForm = () => {
    const existApplyBtn: null | HTMLAnchorElement = document.querySelector(
      selectors.existApplyBtn
    );

    const newApplyBtns: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(selectors.newApplyBtn);

    if (!existApplyBtn || !newApplyBtns || newApplyBtns.length === 0) {
      return;
    }

    newApplyBtns.forEach((btn: HTMLButtonElement) => {
      btn.addEventListener("click", () => {
        const mboxName: null | string = btn.getAttribute("mbox-name");
        mboxName && triggerMetrics(mboxName + "-click");
        existApplyBtn.click();
      });
    });
  };
}
