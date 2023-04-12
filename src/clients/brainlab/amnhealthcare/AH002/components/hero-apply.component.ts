import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class HeroApplyComponent {
  getHtml = (): string => {
    const html: string = `<div class="${TestInfo.ID}__hero-apply-component" >
      <div class="mb-8">
        <h2 class="mb-2 text-center tablet:text-left">Quick Apply Today... </h2>
        <p class="promo-eyebrow mb-4">Don't Miss Out</p>
        <div class="body-standard-16">
          <div class="rich-text ">
            <p>American Mobile takes pride in staffing the nation's leading healthcare facilities - with <strong>the nation's leading travel nurses</strong>. We offer high paying travel jobs across the country, with premium benefits available to our travelers starting on day one of their very first travel assignment.&nbsp; </p>
            <p>&nbsp;</p>
            <h3>Why American Mobile?&nbsp;</h3>
            <ul>
              <li>
                <a title="Travel Nurse Salary" href="/travel-nursing/salaries/">Competitive Salary</a>
              </li>
              <li>Premium <a title="Travel Locations" href="/travel-nursing-jobs/locations/">Travel Locations</a> and Licensure Assistance </li>
              <li>Exceptional <a title="AMH Benefits" href="/travel-nursing/travel-nursing-benefits/">Health Benefits</a>
              </li>
              <li>Largest Network of <a title="AMH Exclusive Facilities" href="/travel-nursing-jobs/exclusive-facilities/">Facilities</a> &amp; Providers </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
    return html.trim();
  };

  render = (): void => {
    document
      .querySelector(selectors.header)
      ?.insertAdjacentHTML("beforeend", this.getHtml());
  };

  getListItem = (text: string): string => {
    const htmlStr = `<li>${text}</li>`;
    return htmlStr.trim();
  };
}
