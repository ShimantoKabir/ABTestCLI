import { selectors } from "../common/asset";

export class PhoneNumberChangerComponent {
  private phoneNumberText = "(888) 928-6967";
  private phoneNumberHref = "tel:8889286967";

  getSemPhoneNumberElement = (): null | HTMLAnchorElement => {
    const phoneNumber: null | HTMLAnchorElement = document.querySelector(
      selectors.phoneNumber
    );

    if (!phoneNumber) {
      setTimeout(() => {
        this.changeSemPhoneNumber();
      }, 25);
    }

    return phoneNumber;
  };

  changeSemPhoneNumber = () => {
    const phoneNumber: null | HTMLAnchorElement =
      this.getSemPhoneNumberElement();

    if (phoneNumber) {
      phoneNumber.textContent = this.phoneNumberText;
      phoneNumber.setAttribute("href", this.phoneNumberHref);
    }
  };

  getMainAppPhoneNumber = (): null | NodeListOf<HTMLAnchorElement> => {
    const phoneNumbers: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(selectors.mainAppPhoneNumber);

    if (!phoneNumbers) {
      setTimeout(() => {
        this.getMainAppPhoneNumber();
      }, 25);
    }

    return phoneNumbers;
  };

  changeMainAppPhoneNumber = () => {
    const phoneNumbers: null | NodeListOf<HTMLAnchorElement> =
      this.getMainAppPhoneNumber();

    if (phoneNumbers && phoneNumbers.length > 2) {
      phoneNumbers.forEach((phoneNumber) => {
        if (phoneNumber.classList.contains("text-link-item")) {
          phoneNumber.textContent = "Call Us: " + this.phoneNumberText;
        }

        if (phoneNumber.classList.contains("mobile-link-item")) {
          phoneNumber.textContent = "Call Us: " + this.phoneNumberText;
          phoneNumber.setAttribute("href", this.phoneNumberHref);
        }
      });
    }
  };
}
