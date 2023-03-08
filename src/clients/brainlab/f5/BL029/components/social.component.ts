import { TestInfo } from "../common/test.info";

export class SocialComponent {
  static render = (): string => {
    return `
    <div class="${TestInfo.ID}__social-component">
      <ul class="">
        <li>
          <a class="${TestInfo.ID}__facebook" title="Facebook" href="#">
            <img src="/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/facebook-grayscale.svg" alt="Share to Facebook">
          </a>
        </li>
        <li>
          <a class="${TestInfo.ID}__twitter" title="twitter" href="#">
            <img src="/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/twitter-grayscale.svg" alt="Share to Twitter">
          </a>
        </li>
        <li>
          <a class="${TestInfo.ID}__linkedin" title="LinkedIn" href="#">
            <img src="/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/linkedin-grayscale.svg" alt="Share to Linkedin">
          </a>
        </li>
        <li>
          <a class="${TestInfo.ID}__share" title="share" href="#">
            <img src="/etc.clientlibs/base/clientlibs/base-resources/resources/icons/social/addthis_share.svg" alt="Share via AddThis">
          </a>
        </li>
      </ul>
    </div>
    `;
  };

  static addEventListener = () => {
    document
      .querySelector("a." + TestInfo.ID + "__facebook")
      ?.addEventListener("click", () => {
        const mainFacebookElm = document.querySelector<HTMLAnchorElement>(
          "a.addthis_button_facebook.at300b"
        );
        mainFacebookElm && mainFacebookElm.click();
      });

    document
      .querySelector("a." + TestInfo.ID + "__twitter")
      ?.addEventListener("click", () => {
        const mainFacebookElm = document.querySelector<HTMLAnchorElement>(
          "a.addthis_button_twitter.at300b"
        );
        mainFacebookElm && mainFacebookElm.click();
      });

    document
      .querySelector("a." + TestInfo.ID + "__linkedin")
      ?.addEventListener("click", () => {
        const mainFacebookElm = document.querySelector<HTMLAnchorElement>(
          "a.addthis_button_linkedin.at300b"
        );
        mainFacebookElm && mainFacebookElm.click();
      });

    document
      .querySelector("a." + TestInfo.ID + "__share")
      ?.addEventListener("click", () => {
        const mainFacebookElm = document.querySelector<HTMLAnchorElement>(
          "a.addthis_button_compact.at300m"
        );
        mainFacebookElm && mainFacebookElm.click();
      });
  };
}
