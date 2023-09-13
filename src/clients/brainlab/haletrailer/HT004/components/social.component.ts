import { socialMedias } from "../common/asset";
import { SocialItemComponent } from "./social-item.component";

export class SocialComponent {
  getHtml = (): string => {
    const htmlString: string = `
        <div class="social-contact-container" >
            <div class="social-container" >
                <div class="text" >
                    <p><strong>Share: </strong></p>
                </div>
                ${socialMedias
                  .map((socialMedia) => SocialItemComponent.render(socialMedia))
                  .join("\n")}
            </div>
            <div class="contact-container" >
                <div class="contact-link" > 
                    <a href="https://haletrailer.com/locations/" >CONTACT US</a>
                </div>
                <div class="request-link" >
                    <a href="https://haletrailer.com/request-a-quote/" >REQUEST QUOTE</a>
                </div>
            </div>
        </div>
    `;

    return htmlString.trim();
  };

  render = (stickyContainer: HTMLDivElement) => {
    stickyContainer.insertAdjacentHTML("beforeend", this.getHtml());
  };
}
