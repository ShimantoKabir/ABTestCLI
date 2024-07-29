import { Initializer } from "../../../../../utilities/initializer";
import { hubSpotLibrary, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { Loader } from "../loaders/loader";
import { OverlayComponent } from "./overlay.component";

export class MainComponent {
  overlayComponent: OverlayComponent = new OverlayComponent();

  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const jsLoader = new Loader<HTMLScriptElement>();

    jsLoader.load(hubSpotLibrary.js, "hub-spot-js", "script").then((jsElm) => {
      console.log("Hubspot library loaded......!");
      this.checkHubSpotObject();
    });
  };

  checkHubSpotObject = () => {
    // @ts-ignore
    if (typeof hbspt === "object") {
      console.log("Hubspot object initialize......!");
      this.applyModification();
    } else {
      setTimeout(() => {
        this.checkHubSpotObject();
      }, 500);
    }
  };

  applyModification = () => {
    const freeOrderBtn: null | HTMLAnchorElement = document.querySelector(
      selectors.freeOrderBtn
    );

    this.overlayComponent.render();

    const overlayComponentElm: null | HTMLAnchorElement =
      document.querySelector("div.overlay-component");

    if (!freeOrderBtn || !overlayComponentElm) {
      return;
    }

    // @ts-ignore
    // hbspt.forms.create({
    //   region: "na1",
    //   portalId: "521369",
    //   formId: "dcdaff52-9b18-4baa-b231-1865c29fe3a1",
    // });

    freeOrderBtn.addEventListener("click", (e: MouseEvent) => {
      e.preventDefault();
      overlayComponentElm.classList.add("show");
    });
  };
}
