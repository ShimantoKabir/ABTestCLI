import {
  getFromSubmissionLink,
  thankyouEndpoint,
  triggerMetrics,
} from "../../common/asset";

export class FormComponent {
  campus: HTMLSelectElement | null = null;
  firstName: HTMLInputElement | null = null;
  lastName: HTMLInputElement | null = null;
  email: HTMLInputElement | null = null;
  zipCode: HTMLInputElement | null = null;
  phoneNumber: HTMLInputElement | null = null;

  getHtml = () => {
    const htmlString: string = `
      <div id="form-component" class="form-component">
        <div class="component-wrap" >
          <div class="heading" >
            <h3>Want to hear more about Denver College of Nursing?</h3>
          </div>
          <div class="message hide" ></div>
          <div class="form" >
            <form onsubmit="event.preventDefault()">
              <div class="input" >
                <select id="campus" name="campus" required="true">
                  <option value="" disabled selected hidden>Campus*</option>
                  <option value="denver">Denver</option>
                  <option value="houston">Houston</option>
                </select>
                <div class="error-msg" >
                  <span>First name required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="first-name" type="text" name="firstName" placeholder="First Name*" required="true">
                <div class="error-msg" >
                  <span>First name required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="last-name" type="text" name="lastName" placeholder="Last Name*" required="true">
                <div class="error-msg" >
                  <span>Last name required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="email" type="text" name="email" placeholder="Email Address*" required="true">
                <div class="error-msg" >
                  <span>Email required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="phone-number" type="text" name="homePhone" placeholder="Phone number*" required="true">
                <div class="error-msg" >
                  <span>Phone number required!</span>
                </div>
              </div>
              <div class="input" >
                <input id="zip-code" type="text" name="zipCode" placeholder="ZIP Code*" required="true">
                <div class="error-msg" >
                  <span>Zip code required!</span>
                </div>
              </div>
              <div class="action" >
                <button>Request Info</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  activeForm = () => {
    const submitButton: null | HTMLButtonElement =
      document.querySelector("div.action>button");

    const campus: null | HTMLSelectElement =
      document.querySelector("select#campus");

    const firstName: null | HTMLInputElement =
      document.querySelector("input#first-name");

    const lastName: null | HTMLInputElement =
      document.querySelector("input#last-name");

    const email: null | HTMLInputElement =
      document.querySelector("input#email");

    const zipCode: null | HTMLInputElement =
      document.querySelector("input#zip-code");

    const phoneNumber: null | HTMLInputElement =
      document.querySelector("input#phone-number");

    if (
      !submitButton ||
      !campus ||
      !firstName ||
      !lastName ||
      !email ||
      !zipCode ||
      !phoneNumber
    ) {
      return;
    }

    submitButton.addEventListener("click", () => {
      this.collectInputData(
        campus,
        firstName,
        lastName,
        email,
        zipCode,
        phoneNumber
      );
    });
  };

  collectInputData = (
    campus: HTMLSelectElement,
    firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    email: HTMLInputElement,
    zipCode: HTMLInputElement,
    phoneNumber: HTMLInputElement
  ) => {
    if (
      !campus.value &&
      !firstName.value &&
      !lastName.value &&
      !email.value &&
      !zipCode.value &&
      !phoneNumber.value
    ) {
      return;
    }

    this.campus = campus;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.zipCode = zipCode;
    this.phoneNumber = phoneNumber;

    this.submitFormData(
      campus.value,
      firstName.value,
      lastName.value,
      email.value,
      zipCode.value,
      phoneNumber.value
    );
  };

  submitFormData = async (
    campus: string,
    firstName: string,
    lastName: string,
    email: string,
    zipCode: string,
    phoneNumber: string
  ) => {
    const message: null | HTMLParagraphElement = document.querySelector(
      "div.form-component>div.component-wrap>div.message"
    );

    try {
      const response = await fetch(
        getFromSubmissionLink(
          campus,
          firstName,
          lastName,
          email,
          zipCode,
          phoneNumber
        )
      );
      const result = await response.json();
      this.showResultMessage(message, result);
    } catch (error) {
      this.showResultMessage(message, {
        accepted: "false",
        errors: {
          msg: "Something went wrong, please try again!",
        },
      });
    }
  };

  showResultMessage = (message: null | HTMLParagraphElement, result: any) => {
    let msgHtml = "";

    if (!message) {
      return;
    }

    message.innerHTML = "";
    message.classList.remove("hide");

    if (result.accepted === "false" && result.errors) {
      message.classList.add("error");
      Object.values(result.errors).forEach((error) => {
        msgHtml = msgHtml + `<div class="message-item" ><p>${error}</p></div>`;
      });
    } else {
      message.classList.add("success");
      msgHtml =
        msgHtml +
        `<div class="message-item" ><p>Form submitted successfully</p></div>`;
      triggerMetrics("form-submitted");
      this.resetForm();
      this.redirectToThankYouPage();
    }

    message.insertAdjacentHTML("afterbegin", msgHtml);
  };

  resetForm = () => {
    if (
      !this.campus ||
      !this.firstName ||
      !this.lastName ||
      !this.email ||
      !this.zipCode ||
      !this.phoneNumber
    ) {
      return;
    }

    this.campus.value = "";
    this.firstName.value = "";
    this.lastName.value = "";
    this.email.value = "";
    this.zipCode.value = "";
    this.phoneNumber.value = "";
  };

  redirectToThankYouPage = () => {
    setTimeout(() => {
      window.location.href = `https://${window.location.host}${thankyouEndpoint}`;
    }, 1000);
  };
}
