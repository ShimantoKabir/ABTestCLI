import { contactUsLink, privacyPolicyLink } from "../common/asset";

export class FormFooterComponent {
  static render = (): string => {
    const htmlString: string = `
      <p>Complete the form to subscribe to F5 Communications. The information you provided with be treated in accordance with the <a href="${privacyPolicyLink}" >F5 Privacy Notice</a>. Opt-out at any time in the footer of our emails, or <a href="${contactUsLink}" >contact</a> us to update your subscription preferences.</p>
    `;
    return htmlString.trim();
  };
}
