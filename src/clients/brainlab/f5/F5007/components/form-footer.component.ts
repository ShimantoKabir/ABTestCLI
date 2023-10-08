import { privacyPolicyLink } from "../common/asset";

export class FormFooterComponent {
  static render = (): string => {
    const htmlString: string = `
            <p>The information you provide will be treated in accordance with the <a href="${privacyPolicyLink}" >F5 Privacy Notice</a>. Opt-out at anytime.</p>
        `;
    return htmlString.trim();
  };
}
