import { callingIcon, phoneNumber, phoneNumberText } from "../common/asset";

export class ContactComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="contact-component" >
        <div class="component-wrap" >
          <div class="title" >
            <div class="icon" >
              <img src="${callingIcon}" alt="calling-icon" >
            </div>
            <div class="number" >
              <a href="tel:+${phoneNumber}" >${phoneNumberText}</a>
            </div>
          </div>
          <div class="description" >
            <p>WE ARE AVAILABLE SEVEN DAYS A WEEK! <span>CALL TODAY.</span></p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
