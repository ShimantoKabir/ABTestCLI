import { selectors } from "../common/asset";

export class ButtonComponent {
  getHtml = (): string => {
    const htmlString: string = `<div class="contact-us-button" ><a href="#support" >CONTACT US</a></div>`;
    return htmlString.trim();
  };

  render = (): void => {
    const contactSection: null | HTMLDivElement = document.querySelector(
      selectors.contactSection
    );

    console.log("contactSection=", contactSection);

    if (contactSection) {
      contactSection.insertAdjacentHTML("beforeend", this.getHtml());
    }
  };
}
