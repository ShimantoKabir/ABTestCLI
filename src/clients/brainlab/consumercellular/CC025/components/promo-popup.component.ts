import {
  closeIconSvg,
  promoCode,
  redeemNowLink,
  storageKey,
  visitedLocationsStorageKey,
} from "../common/asset";

export class PromoPopupComponent {
  isPopupDisplayed: boolean = false;

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="offer-popup" >
        <div class="promo-popup-component" >
          <div class="component-wrap" >
            <div class="close-icon" >
              ${closeIconSvg}
            </div>
            <div class="headline" >
              <h1>Unlock $25 Off now!*</h1>
            </div>
            <div class="sub-title" >
              <h3>REDEEM NOW & ENTER PROMO CODE</h3>
            </div>
            <div class="title" >
              <h2><span class="promo-code" >${promoCode}</span> AT CHECKOUT</h2>
            </div>
            <div class="redeem-now" >
              <a href="${redeemNowLink}?promo-code=${promoCode}" >REDEEM NOW</a>
            </div>
            <div class="skip-offer" >
              <a>SKIP OFFER</a>
            </div>
            <div class="notice" >
              <p>New customers get $25 in credit applied as a $5 credit over 5 invoices. Limit one promo per new account. Availability subject to change.</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = () => {
    const body: null | HTMLBodyElement = document.querySelector("body");

    if (!body) {
      return;
    }

    body.insertAdjacentHTML("beforeend", this.getHtml());
    this.configure();
  };

  configure = () => {
    const offerPopup: null | HTMLDivElement =
      document.querySelector("div.offer-popup");

    const closeIcon: null | HTMLDivElement =
      document.querySelector("div.close-icon");

    if (!offerPopup || !closeIcon) {
      return;
    }

    closeIcon.addEventListener("click", (e) => {
      offerPopup.classList.remove("show");
    });
  };

  showPromoPopup = (offerPopup: HTMLDivElement) => {
    setTimeout(() => {
      if (
        !this.isPopupDisplayed &&
        sessionStorage.getItem(storageKey) &&
        sessionStorage.getItem(storageKey) === "no"
      ) {
        offerPopup.classList.add("show");
        this.isPopupDisplayed = true;
        sessionStorage.setItem(storageKey, "yes");
        sessionStorage.setItem(visitedLocationsStorageKey, "");
      }
    }, 2000);
  };
}
