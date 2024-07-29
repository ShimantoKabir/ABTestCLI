import {
  contactUsMail,
  f5NoticeUrl,
  footerImage,
  footerMktoForms2,
  selectors,
} from "../common/asset";

export class FooterFormComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="footer-form-component" >
        <div class="component-wrap" >
          <div class="component-left" >
            <div class="banner" >
              <img src="${footerImage}" alt="form-banner" />
            </div>
          </div>
          <div class="component-right" >
            <div class="form-container c28" >
              <form id="mktoForm_${footerMktoForms2.formId}" class="footer-form" ></form>
            </div>
            <div class="form-success" >
              <p>Form submitted successfully!</p>
            </div>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  render = () => {
    const footer: null | HTMLDivElement = document.querySelector(
      selectors.footer
    );

    if (!footer) {
      return;
    }

    footer.insertAdjacentHTML("beforebegin", this.getHtml());
  };

  getDisclaimerHtml = (): string => {
    const htmlString: string = `
      <div class="disclaimer" >
        <div class="wrap" >
          <p>Complete the form to download the offer and be contacted about F5 products and services. The information you provide will be treated in accordance with the <a href="${f5NoticeUrl}" >F5 Privacy Notice.</a></p>
          <p>Opt-out at anytime, or <a href="mailto:${contactUsMail}" >contact us</a> to download without opting in.</p>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  config = () => {
    const heading: null | HTMLHeadingElement = document.querySelector(
      "div.mktoHtmlText>h2"
    );

    const firstName: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#LblFirstName"
    );
    const lastName: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#LblLastName"
    );
    const email: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#LblEmail"
    );
    const phone: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#LblPhone"
    );
    const job: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#LblJob_Level__c"
    );
    const company: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#LblCompany"
    );

    const country: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#LblCountry"
    );

    const help: null | HTMLLabelElement = document.querySelector(
      "form.footer-form label#Lblf5HowHelp"
    );

    const submitButtonDiv: HTMLDivElement | null = document.querySelector(
      "form.footer-form div.mktoButtonRow"
    );

    console.log("firstName=", firstName);

    firstName &&
      firstName.insertAdjacentHTML("beforeend", "<span>First Name</span>");
    lastName &&
      lastName.insertAdjacentHTML("beforeend", "<span>Last Name</span>");

    email &&
      email.insertAdjacentHTML("beforeend", "<span>Company Email</span>");

    phone && phone.insertAdjacentHTML("beforeend", "<span>Phone Number</span>");

    job && job.insertAdjacentHTML("beforeend", "<span>Job Label</span>");

    company &&
      company.insertAdjacentHTML("beforeend", "<span>Company Name</span>");

    country &&
      country.insertAdjacentHTML("beforeend", "<span>Company Location</span>");

    help &&
      help.insertAdjacentHTML("beforeend", "<span>Inquiring About</span>");

    if (!heading || !submitButtonDiv) {
      return;
    }

    heading.textContent = "Connect with Our Experts";

    submitButtonDiv.insertAdjacentHTML("beforebegin", this.getDisclaimerHtml());
  };
}
