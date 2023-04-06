import {
  publishedDate,
  publisherImgLink,
  publisherName,
  publisherLink,
} from "../common/asset";
import { TestInfo } from "../common/test.info";

export class PublisherComponent {
  static render = (): string => {
    const htmlStr = `
    <div class="${TestInfo.ID}__published-component" >
        <div class="publisher-info" >
            <div class="publisher-img" >
                <img src="${publisherImgLink}" alt="publisher" >
            </div>
            <div class="publisher-name" >
                <a href="${publisherLink}" >${publisherName}</a>
            </div>
        </div>
        <div class="published-date" >
            <p>${publishedDate}</p>
        </div>
    </div>
    `;
    return htmlStr.trim();
  };
}
