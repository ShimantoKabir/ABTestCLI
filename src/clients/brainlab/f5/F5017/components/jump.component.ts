import { findMoreReportLink, selectors, triggerMetrics } from "../common/asset";

export class JumpComponent {
  private getHtml = (): string => {
    const htmlString: string = `
      <div class="jump-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h3>Find top industry insights with F5</h3>
          </div>
          <div class="action" >
            <a event-name="form-scrolled" class="form" >Get the report</a>
            <a event-name="report-link-click" class="report" href="${findMoreReportLink}" >Find more reports</a>
          <div>
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
    this.addLinkListener();
  };

  addLinkListener = () => {
    const cardLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("div.action>a");

    if (!cardLinks || cardLinks.length === 0) {
      return;
    }

    cardLinks.forEach((link: HTMLAnchorElement) => {
      const eventName: string | null = link.getAttribute("event-name");

      link.addEventListener("click", () => {
        eventName && triggerMetrics(eventName);
        eventName && this.setScrollSetting(eventName);
      });
    });
  };

  setScrollSetting = (eventName: string) => {
    if (eventName !== "form-scrolled") {
      return;
    }

    window.innerWidth < 992 &&
      window.scrollTo({ top: 300, behavior: "smooth" });

    window.innerWidth > 992 && window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
