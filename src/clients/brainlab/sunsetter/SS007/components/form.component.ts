import { cities, skipForNowLink, triggerEvent } from "../common/asset";

export class FormComponent {
  formComponent: HTMLDivElement | null = null;
  errorMsg: HTMLDivElement | null = null;

  getStepTwoFormHtml = (): string => {
    const htmlString: string = `
      <div class="component-wrap step-two" >
        <div class="headline" >
          <h3>Receive a FREE Information Kit along with Savings!</h3>
        </div>
        <form class="customer-form">
          <div class="input-area" >
            <div class="name" >
              <label>Address</label>
            </div>
            <div class="input" >
              <input 
                autocomplete="on" 
                id="AddressLine1" 
                maxlength="40" 
                name="AddressLine1" 
                placeholder="Address 1" 
                type="text" 
                value=""
              required>
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Address 2</label>
            </div>
            <div class="input" >
              <input 
                autocomplete="on" 
                id="AddressLine2" 
                maxlength="40" 
                name="AddressLine2" 
                placeholder="Address 2" 
                type="text" 
                value=""
              required>
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>City</label>
            </div>
            <div class="input" >
              <input 
                autocomplete="on" 
                id="City" 
                maxlength="30" 
                name="City" 
                placeholder="City" 
                type="text" 
                value=""
              required>
            </div>
          </div>
          <div class="input-area" >
            <div class="input" >
              <select id="State" name="State" required>
                <option selected="selected" value="">Select State</option>
                ${cities
                  .map(
                    (city: any) =>
                      `<option value="${city.key}">${city.value}</option>`
                  )
                  .join("\n")}
              </select>
            </div>
          </div>
          <div class="submit-area" >
            <div class="cta" >
              <button id="show-price-btn" >Find a Dealer</button>
            </div>
          </div>
        </form>
        <div class="form-footer" >
          <div class="skip" >
            <a href="${skipForNowLink}" >Skip for now</a>
          </div>
          <div class="footer-text" >
            <p>Your contact information is kept confidential. We do not distribute it to outside sources. Read our <a href="/cm/privacy/" >privacy policy</a>.</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getStepOneFormHtml = (): string => {
    const htmlString: string = `
      <div class="component-wrap step-one" >
        <div class="headline" >
          <h3>Find an Authorized SunSetter Dealer Near You!</h3>
        </div>
        <form class="customer-form">
          <div class="input-area" >
            <div class="name" >
              <label>First Name</label>
            </div>
            <div class="input" >
              <input 
                autocomplete="on" 
                id="FirstName" 
                maxlength="30" 
                name="FirstName" 
                placeholder="First Name" 
                type="text" 
                value=""
              >
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Last Name</label>
            </div>
            <div class="input" >
              <input 
                autocomplete="on" 
                id="LastName" 
                maxlength="30" 
                name="LastName" 
                placeholder="Last Name" 
                type="text" value=""
              >
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Email</label>
            </div>
            <div class="input" >
              <input
                autocomplete="on"
                id="Email" 
                maxlength="128" 
                name="Email" 
                placeholder="Email" 
                type="email" value=""
              >
            </div>
          </div>
          <div class="input-area" >
            <div class="check-box" >
              <input 
                checked="checked" 
                id="ContactOptionId" 
                name="ContactOptionId" 
                type="checkbox" 
                value="true"
              required>
            </div>
            <div class="check-box-label" >
              <p>I would like to receive emails with special promotions from SunSetter.</p>
            </div>
          </div>
          <div class="input-area-tex" >
            <p>Enter your phone number for a FREE in-home consultation</p>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Zip Code*</label>
            </div>
            <div class="input" >
              <input 
                autocomplete="on" 
                id="ZipCode" 
                maxlength="20" 
                name="ZipCode" 
                placeholder="Zip Code" 
                type="text" 
                value=""
              required>
            </div>
          </div>
          <div class="input-area" >
            <div class="name" >
              <label>Phone*</label>
            </div>
            <div class="input" >
              <input 
                autocomplete="on" 
                id="Phone" 
                maxlength="128" 
                name="Phone" 
                placeholder="Phone" 
                type="text" 
                value=""
              required>
            </div>
          </div>
          <div class="submit-area" >
            <div class="submit-area-text" >
              <p><span>*</span> Required Fields</p>
            </div>
            <div class="cta" >
              <button id="view-price-btn" >Find a Dealer</button>
            </div>
          </div>
        </form>
        <div class="form-footer" >
          <div class="footer-text" >
            <p>Your contact information is kept confidential. We do not distribute it to outside sources. Read our <a href="/cm/privacy/" >privacy policy</a>.</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="form-component" >
        <div class="error-msg" >
          <p>Something went wrong, please try again!</p>
        </div>
        ${this.getStepOneFormHtml()}
        ${this.getStepTwoFormHtml()}
        <div class="component-wrap success" >
          <div class="success-wrap" >
            <p>Form submitted successfully!<p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  active = () => {
    this.formComponent = document.querySelector("div.form-component");
    this.errorMsg = document.querySelector("div.error-msg");

    const customerFormStepOne: null | HTMLFormElement = document.querySelector(
      "div.form-component>div.component-wrap.step-one>form"
    );

    const customerFormStepTwo: null | HTMLFormElement = document.querySelector(
      "div.form-component>div.component-wrap.step-two>form"
    );

    const viewPriceBtn: null | HTMLInputElement = document.querySelector(
      "button#view-price-btn"
    );

    const showPriceBtn: null | HTMLInputElement = document.querySelector(
      "button#show-price-btn"
    );

    if (
      !viewPriceBtn ||
      !customerFormStepOne ||
      !showPriceBtn ||
      !customerFormStepTwo
    ) {
      return;
    }

    customerFormStepOne.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      console.log("step-one-form-prevent-default");
    });

    customerFormStepTwo.addEventListener("submit", (e: SubmitEvent) => {
      e.preventDefault();
      console.log("step-two-form-prevent-default");
    });

    viewPriceBtn.addEventListener("click", () => {
      this.submitStepOneForm();
    });

    showPriceBtn.addEventListener("click", () => {
      this.submitStepTwoForm();
    });
  };

  submitStepTwoForm = () => {
    const addressLine1: null | HTMLInputElement =
      document.querySelector("input#AddressLine1");

    const addressLine2: null | HTMLInputElement =
      document.querySelector("input#AddressLine2");

    const city: null | HTMLInputElement = document.querySelector("input#City");

    const state: null | HTMLSelectElement =
      document.querySelector("select#State");

    if (
      addressLine1 &&
      addressLine1.value &&
      addressLine2 &&
      addressLine2.value &&
      city &&
      city.value &&
      state &&
      state.value
    ) {
      this.submitFormData(
        {
          addressLine1: addressLine1.value,
          addressLine2: addressLine2.value,
          city: city.value,
          state: state.value,
        },
        2
      );
    }
  };

  submitStepOneForm = () => {
    const firstName: null | HTMLInputElement =
      document.querySelector("input#FirstName");

    const lastName: null | HTMLInputElement =
      document.querySelector("input#LastName");

    const email: null | HTMLInputElement =
      document.querySelector("input#Email");

    const contactOptionId: null | HTMLInputElement = document.querySelector(
      "input#ContactOptionId"
    );

    const zipCode: null | HTMLInputElement =
      document.querySelector("input#ZipCode");

    const phone: null | HTMLInputElement =
      document.querySelector("input#Phone");

    if (
      firstName &&
      lastName &&
      contactOptionId &&
      email &&
      zipCode &&
      zipCode.value &&
      phone &&
      phone.value
    ) {
      this.submitFormData(
        {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          contactOptionId: contactOptionId.value,
          zipCode: zipCode.value,
          phone: phone.value,
        },
        1
      );
    }
  };

  submitFormData = async (data: any, step: number) => {
    console.log(`step-${step}-data=`, data);

    const formData = new FormData();

    if (step === 1) {
      formData.append("firstName", data.firstName);
      formData.append("lastName", data.lastName);
      formData.append("email", data.email);
      formData.append("contactOptionId", data.contactOptionId);
      formData.append("zipCode", data.zipCode);
      formData.append("phone", data.phone);
    } else {
      formData.append("AddressLine1", data.addressLine1);
      formData.append("AddressLine2", data.addressLine2);
      formData.append("City", data.city);
      formData.append("State", data.state);
    }

    try {
      const response = await fetch(
        "https://www.sunsetter.com/api/PostHomePageCI",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const json = await response.json();
        step === 1 &&
          this.formComponent &&
          this.formComponent.classList.add("next-step");

        step === 2 &&
          this.formComponent &&
          this.formComponent.classList.add("submitted");

        step === 1 && triggerEvent("step-one-form-submitted");
        step === 2 && triggerEvent("step-two-form-submitted");

        console.log("success=", response);
      } else {
        console.log("error=", response);
        this.hideAndShowErrorMsg();
      }
    } catch (error) {
      console.log("error=", error);
      this.hideAndShowErrorMsg();
    }
  };

  hideAndShowErrorMsg = () => {
    this.errorMsg && this.errorMsg.classList.add("show");
    setTimeout(() => {
      this.errorMsg && this.errorMsg.classList.remove("show");
    }, 5000);
  };
}
