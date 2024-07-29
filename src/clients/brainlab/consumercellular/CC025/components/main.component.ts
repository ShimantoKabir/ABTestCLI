import { Initializer } from "../../../../../utilities/initializer";
import {
  isMobile,
  selectors,
  storageKey,
  visitedLocationsStorageKey,
} from "../common/asset";

import { TestInfo } from "../common/test.info";
import { LocationObserver } from "../observer/location.observer";
import { TestObserver } from "../observer/test.observer";
import { PromoNotificationComponent } from "./promo-notification.component";
import { PromoPopupComponent } from "./promo-popup.component";

export class MainComponent {
  promoPopupComponent: PromoPopupComponent = new PromoPopupComponent();
  isPromoInputFound: boolean = false;
  isShaken: boolean = false;

  constructor() {
    Initializer.init(TestInfo, "1.1.1");
  }

  init = (): void => {
    !sessionStorage.getItem(storageKey) &&
      sessionStorage.setItem(storageKey, "no");
    this.promoPopupComponent.render();

    const offerPopup: null | HTMLDivElement =
      document.querySelector("div.offer-popup");

    LocationObserver.listen((location: string) => {
      location === "/shopping/thankyou" &&
        sessionStorage.setItem(visitedLocationsStorageKey, "");

      const visitedLocationsString: string | null = sessionStorage.getItem(
        visitedLocationsStorageKey
      );

      if (visitedLocationsString) {
        const visitedLocations: string[] = JSON.parse(visitedLocationsString);
        visitedLocations.push(location);
        sessionStorage.setItem(
          visitedLocationsStorageKey,
          JSON.stringify(visitedLocations)
        );
      } else {
        sessionStorage.setItem(
          visitedLocationsStorageKey,
          JSON.stringify([location])
        );
      }

      offerPopup &&
        visitedLocationsString &&
        this.shopPopupAccordingToVisitedLocationHistory(
          visitedLocationsString,
          offerPopup
        );

      this.isPromoInputFound = false;
    });

    this.applyPromoCode();
  };

  applyPromoCode = () => {
    const params = new URLSearchParams(window.location.search);

    if (params.has("promo-code")) {
      const promoCode: string | null = params.get("promo-code");
      console.log("Promo code found....!");
      promoCode && this.findPromoCodeInput();
    }
  };

  findPromoCodeInput = () => {
    console.log("Promo code input observing....!");
    const testObserver = new TestObserver("body");

    const callback = (mutationList: MutationRecord[]) => {
      for (let index = 0; index < mutationList.length; index++) {
        const target: Element = mutationList[index].target as Element;

        if (target.innerHTML.length > 210000 && !this.isPromoInputFound) {
          this.showPromoCodeNotification();
          console.log("Promo code input found...!");
          this.isPromoInputFound = true;
        }
      }
    };

    testObserver.observe(callback);
  };

  showPromoCodeNotification = () => {
    const promoCodeFrames: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.promoCodeFrame);

    const promoCodeSubmits: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll(selectors.promoCodeSubmit);

    const discountAppliedText: null | HTMLDivElement = document.querySelector(
      selectors.discountAppliedText
    );

    const carts: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.cart);

    console.log("cart-length=", carts.length);

    if (
      !promoCodeFrames ||
      promoCodeFrames.length === 0 ||
      !promoCodeSubmits ||
      promoCodeSubmits.length === 0
    ) {
      return;
    }

    console.log("Promo code input and submit button found....!");

    promoCodeFrames.forEach((frame: HTMLDivElement) => {
      !discountAppliedText &&
        carts &&
        carts.length > 1 &&
        setTimeout(() => {
          frame.insertAdjacentHTML(
            "beforeend",
            PromoNotificationComponent.render()
          );

          this.hideNotificationOnApply(promoCodeSubmits);
          isMobile() && this.shakeNotificationOnMobile();
        }, 100);
    });
  };

  hideNotificationOnApply = (promoCodeSubmits: NodeListOf<HTMLDivElement>) => {
    const promoNotifications: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.promo-notification-component");

    if (!promoNotifications || promoNotifications.length == 0) {
      return;
    }

    promoCodeSubmits.forEach((btn: HTMLDivElement) => {
      btn.addEventListener("click", () => {
        promoNotifications.forEach((notification: HTMLDivElement) => {
          notification.classList.add("hide");
        });

        history.replaceState(
          null,
          "",
          `${window.location.protocol}//${window.location.hostname}${window.location.pathname}`
        );
      });
    });
  };

  shopPopupAccordingToVisitedLocationHistory = (
    visitedLocationsString: string,
    offerPopup: HTMLDivElement
  ) => {
    const visitedLocations: string[] = JSON.parse(visitedLocationsString);

    visitedLocations.reverse();

    const checkoutIndex = visitedLocations.findIndex(
      (location: string) => location === "/shopping/checkout"
    );
    checkoutIndex !== -1 && this.promoPopupComponent.showPromoPopup(offerPopup);
  };

  shakeNotificationOnMobile = () => {
    const mobileNotification: null | HTMLDivElement = document.querySelector(
      "div.input-component-frame.hide-phone-up>div.promo-notification-component"
    );

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("entry.boundingClientRect.top=", entry);

        if (entry.isIntersecting && entry.boundingClientRect.top > 0) {
          mobileNotification && mobileNotification.classList.remove("shake");
          setTimeout(() => {
            mobileNotification && mobileNotification.classList.add("shake");
          }, 100);
        }
      });
    });

    mobileNotification && observer.observe(mobileNotification);
  };
}
