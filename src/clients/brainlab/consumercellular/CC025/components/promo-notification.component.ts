import { promoCode } from "../common/asset";

export class PromoNotificationComponent {
  static render = () => {
    const htmlString: string = `
      <div class="promo-notification-component shake" >
        <div class="component-wrap" >
          <p>
            <strong>Enter Code</strong> <span class="promo-code" >${promoCode}</span> <strong>above</strong> to enjoy $25 for in credit New Customers. Applied as $5 credit over 5 invoices. Limited one promo per new account. Availability subject to change.
          </p>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
