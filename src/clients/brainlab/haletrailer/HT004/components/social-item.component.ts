import { TestInfo } from "../common/test.info";
import { SocialMedia } from "../models/social-media.model";

export class SocialItemComponent {
  static render = (socialMedia: SocialMedia): string => {
    const icon: string =
      TestInfo.VARIATION.toString() === "1"
        ? socialMedia.v1Icon
        : socialMedia.v2Icon;

    const htmlString: string = `
        <a href="${socialMedia.href}" >
            <i class="${icon}" ></i>
        </a>
    `;
    return htmlString.trim();
  };
}
