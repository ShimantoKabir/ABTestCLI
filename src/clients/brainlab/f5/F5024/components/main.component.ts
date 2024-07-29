import { Initializer } from "../../../../../utilities/initializer";
import {
  heroMktoForms2,
  scriptLink,
  selectors,
  capMktoForms2,
  footerMktoForms2,
  mboxNames,
  triggerMetrics,
} from "../common/asset";
import { Loader } from "../common/loader";
import { TestInfo } from "../common/test.info";
import { CapComponent } from "./cap.component";
import { FooterFormComponent } from "./footer-form.component";
import { HeroFormComponent } from "./hero-form.component";

export class MainComponent {
  heroFormComponent: HeroFormComponent = new HeroFormComponent();
  capComponent: CapComponent = new CapComponent();
  footerFormComponent: FooterFormComponent = new FooterFormComponent();
  isCapFromSubmitted: boolean = false;
  isFooterFromLoaded: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  loadMktoFormObject = () => {
    try {
      // @ts-ignore
      console.log("MktoForms2=", MktoForms2);
      this.loadHeroFrom();
      this.loadCapFrom();
      this.loadFooterFrom();
    } catch (error) {
      console.log("error=", error);
      setTimeout(() => {
        this.loadMktoFormObject();
      }, 100);
    }
  };

  loadHeroFrom = () => {
    // @ts-ignore
    MktoForms2.loadForm(
      heroMktoForms2.domain,
      heroMktoForms2.munchkinId,
      heroMktoForms2.formId
    ).whenReady((form: any) => {
      console.log("Hero Form loaded....!");
      this.heroFormComponent.configForm();

      form.onSuccess((values: any, followUpUrl: any) => {
        if (values.formVid === heroMktoForms2.formId) {
          const formWrap: null | HTMLDivElement = document.querySelector(
            "div.component-wrap.hero"
          );
          formWrap && formWrap.classList.add("submitted");

          triggerMetrics(mboxNames.topFormSubmitted);
        }

        return false;
      });
    });
  };

  loadCapFrom = () => {
    // @ts-ignore
    MktoForms2.loadForm(
      capMktoForms2.domain,
      capMktoForms2.munchkinId,
      capMktoForms2.formId
    ).whenReady((form: any) => {
      console.log("Cap Form loaded....!");
      this.capComponent.configForm();

      form.onSuccess((values: any, followUpUrl: any) => {
        if (values.formVid === capMktoForms2.formId) {
          this.isCapFromSubmitted = true;
          const formWrap: null | HTMLDivElement = document.querySelector(
            "div.component-wrap.cap"
          );
          formWrap && formWrap.classList.add("submitted");

          triggerMetrics(mboxNames.middleFormSubmitted);
        }

        return false;
      });
    });
  };

  loadFooterFrom = () => {
    // @ts-ignore
    MktoForms2.loadForm(
      footerMktoForms2.domain,
      footerMktoForms2.munchkinId,
      footerMktoForms2.formId
    ).whenReady((form: any) => {
      console.log("Footer Form loaded....!");
      if (!this.isFooterFromLoaded) {
        this.footerFormComponent.config();
        this.isFooterFromLoaded = true;
      }

      form.onSuccess((values: any, followUpUrl: any) => {
        if (values.formVid === footerMktoForms2.formId) {
          const componentRight: null | HTMLDivElement = document.querySelector(
            "div.component-right"
          );

          componentRight && componentRight.classList.add("submitted");

          triggerMetrics(mboxNames.bottomFormSubmitted);
        }
        return false;
      });
    });
  };

  init = (): void => {
    this.heroFormComponent.render();
    this.capComponent.render();
    this.footerFormComponent.render();

    const loader = new Loader<HTMLScriptElement>();

    loader
      .load(scriptLink, TestInfo.ID.toString(), "script")
      .then((element) => {
        console.log("Form library loaded....!");
        this.loadMktoFormObject();
      });

    this.setObserver();
  };

  setObserver = () => {
    const capabilitiesSection: null | HTMLDivElement = document.querySelector(
      selectors.capabilitiesSection
    );

    if (!capabilitiesSection) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.top > 0 &&
          !this.isCapFromSubmitted
        ) {
          const capComponent: null | HTMLDivElement =
            document.querySelector("div.cap-component");

          capComponent && capComponent.classList.remove("hide");
          triggerMetrics(mboxNames.middleFormShowedUp);
        }
      });
    });

    observer.observe(capabilitiesSection);
  };
}
