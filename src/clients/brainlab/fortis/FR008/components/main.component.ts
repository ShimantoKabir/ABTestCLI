import { Initializer } from "../../../../../utilities/initializer";
import { triggerMetrics } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { AboutComponent } from "./about.component";
import { DcnComponent } from "./dcn.component";
import { EarnComponent } from "./earn.component";
import { FooterComponent } from "./footer.component";
import { FormComponent } from "./hero/form.component";
import { HeroComponent } from "./hero/hero.component";
import { NavComponent } from "./hero/nav.component";
import { JourneyComponent } from "./journey.component";
import { OutcomeComponent } from "./outcome/outcome.component";
import { StoryComponent } from "./story.component";

export class MainComponent {
  heroComponent: HeroComponent = new HeroComponent();
  earnComponent: EarnComponent = new EarnComponent();
  outcomeComponent: OutcomeComponent = new OutcomeComponent();
  storyComponent: StoryComponent = new StoryComponent();
  dcnComponent: DcnComponent = new DcnComponent();
  journeyComponent: JourneyComponent = new JourneyComponent();
  aboutComponent: AboutComponent = new AboutComponent();
  footerComponent: FooterComponent = new FooterComponent();
  navComponent: NavComponent = new NavComponent();
  formComponent: FormComponent = new FormComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.7");
  }

  getHtml = (): string => {
    const htmlString: string = `
      <div class="sticky-nav-component hide" >
        ${this.navComponent.getHtml()}
      </div>
      <div class="main-component" >
        ${this.heroComponent.getHtml()}
        ${this.earnComponent.getHtml()}
        ${this.outcomeComponent.getHtml()}
        ${this.storyComponent.getHtml()}
        ${this.journeyComponent.getHtml()}
        ${this.dcnComponent.getHtml()}
        ${this.aboutComponent.getHtml()}
        ${this.footerComponent.getHtml()}
      </div>
    `;

    return htmlString.trim();
  };

  init = (): void => {
    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    body.insertAdjacentHTML("afterbegin", this.getHtml());
    this.formComponent.activeForm();
    this.configStickyNavBar();
    this.goals();
  };

  configStickyNavBar = () => {
    const earnSection: null | HTMLDivElement =
      document.querySelector("div.earn-component");

    const stickyNavbarSection: null | HTMLDivElement = document.querySelector(
      "div.sticky-nav-component"
    );

    if (!earnSection || !stickyNavbarSection) {
      return;
    }

    window.onscroll = () => {
      if (window.scrollY >= earnSection.offsetTop) {
        stickyNavbarSection.classList.add("sticky");
      } else {
        stickyNavbarSection.classList.remove("sticky");
      }
    };
  };

  goals = () => {
    const callTodayLinks: null | NodeListOf<HTMLLinkElement> =
      document.querySelectorAll("div.apply>a");

    if (!callTodayLinks || callTodayLinks.length === 0) {
      return;
    }

    callTodayLinks.forEach((link: HTMLLinkElement) => {
      link.addEventListener("click", () => {
        triggerMetrics("call-today");
      });
    });
  };
}
