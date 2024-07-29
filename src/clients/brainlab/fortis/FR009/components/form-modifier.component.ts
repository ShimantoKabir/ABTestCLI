import { phoneNumber, phoneNumberText, selectors } from "../common/asset";

export class FormModifierComponent {
  private getHeaderHtml = (): string => {
    const htmlString: string = `
      <div class="form-header" >
        <div class="title" >
          <h4>YOUR FUTURE STARTS NOW</h4>
        </div>
        <div class="sub-title" >
          <h4>Call Today.</h4>
        </div>
        <div class="tel" >
          <a href="tel:+${phoneNumber}" >${phoneNumberText}</a>
        </div>
        <div class="availability" >
          <h4>Available 7 Days a Week</h4>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  private getLabelHtml = (labelName: string) => {
    const htmlString: string = `
      <div class="label" >
        <p>${labelName}</p>
        <span>*</span>
      </div>
    `;
    return htmlString.trim();
  };

  modify = () => {
    const modalHeader: null | HTMLDivElement = document.querySelector(
      selectors.modalHeader
    );

    const programSelect: null | HTMLDivElement = document.querySelector(
      selectors.programSelect
    );

    const firstName: null | HTMLDivElement = document.querySelector(
      selectors.firstName
    );

    const lastName: null | HTMLDivElement = document.querySelector(
      selectors.lastName
    );

    const email: null | HTMLDivElement = document.querySelector(
      selectors.email
    );

    const phone: null | HTMLDivElement = document.querySelector(
      selectors.phone
    );

    const zip: null | HTMLDivElement = document.querySelector(selectors.zip);

    const disclaimer: null | HTMLDivElement = document.querySelector(
      selectors.disclaimer
    );

    if (
      !modalHeader ||
      !programSelect ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !zip ||
      !disclaimer
    ) {
      return;
    }

    modalHeader.insertAdjacentHTML("afterend", this.getHeaderHtml());

    programSelect.insertAdjacentHTML(
      "beforebegin",
      this.getLabelHtml("Select Program")
    );

    firstName.insertAdjacentHTML(
      "beforebegin",
      this.getLabelHtml("First Name")
    );

    lastName.insertAdjacentHTML("beforebegin", this.getLabelHtml("Last Name"));

    email.insertAdjacentHTML("beforebegin", this.getLabelHtml("Email"));

    phone.insertAdjacentHTML("beforebegin", this.getLabelHtml("Phone"));

    zip.insertAdjacentHTML("beforebegin", this.getLabelHtml("Zip Code"));

    disclaimer.insertAdjacentHTML(
      "beforebegin",
      `<div class="required" ><p><span>*</span> Required Fields</p></div>`
    );
  };
}
