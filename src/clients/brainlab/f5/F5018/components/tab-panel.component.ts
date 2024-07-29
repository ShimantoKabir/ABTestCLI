import { cloudSvgIcon, selectors, triggerMetrics } from "../common/asset";

export class TabPanelComponent {
  private tabPanels: null | NodeListOf<HTMLDivElement> = null;
  activeClassName: string = "cmp-tabs__tabpanel--active";

  private getHtml = (): string => {
    const htmlString: string = `
      <div class="cmp-tabs__tabpanel extra-panel">
        <div class="cont01">
          <style type="text/css"></style>
          <div class="bg-default cont01 U:padding-top-xl height-1 theme-default theme-wrap">
            <div>
              <div class="content parsys">
                <div class="cont01">
                  <style type="text/css"></style>
                  <div class="bg-default cont01 U:padding-bot-lg height-1 theme-default theme-wrap">
                    <div>
                      <div class="content parsys">
                        <div class="c29-columns">
                          <div class="bg-default c29-columns__wrap">
                            <div class="c29-columns__container">
                              <div class="c29-columns__card-wrapper c29-columns__card-wrapper_align-center c29-columns__card-wrapper_variant-wide-3">
                                <div class="card">
                                  <a href="/partners/technology-alliances/amazon-web-services" event-name="amazon-link-click" class="card-link partner-card-link">
                                    <div>
                                      <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                        <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
                                          <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                            <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12">
                                              <style type="text/css"></style>
                                              <div class="bg-default cont01 text-center U:padding-top-lg U:padding-rt-lg U:padding-bot-lg U:padding-lt-lg height-1 theme-wrap">
                                                <div>
                                                  <div class="content parsys">
                                                    <div class="at05" data-component-title="SVG Bloc">
                                                      <div class="SVG-fill-lagoon">
                                                      ${cloudSvgIcon}
                                                      </div>
                                                    </div>
                                                    <div class="at02">
                                                      <span></span>
                                                      <div bis_skin_checked="1">
                                                        <h4 class="at02__title display-5">F5 on Amazon Web Services</h4>
                                                      </div>
                                                    </div>
                                                    <div class="at04">
                                                      <div class="at04  U:margin-top">
                                                        <p>Gain security, performance, and availability for your apps on AWS.</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="__gradient-wrap">
                                                  <div class="__gradient-first-color"></div>
                                                  <div class="__gradient"></div>
                                                  <div class="__gradient-second-color"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="card">
                                  <a href="/partners/technology-alliances/microsoft-azure" event-name="microsoft-link-click" class="card-link partner-card-link">
                                    <div>
                                      <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                        <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
                                          <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                            <div class="cont01 aem-GridColumn aem-GridColumn--default--12">
                                              <style type="text/css"></style>
                                              <div class="bg-default cont01 text-center U:padding-top-lg U:padding-rt-lg U:padding-bot-lg U:padding-lt-lg height-1 theme-wrap">
                                                <div>
                                                  <div class="content parsys">
                                                    <div class="at05">
                                                      <div class="SVG-fill-lagoon">
                                                      ${cloudSvgIcon}                                                   
                                                      </div>
                                                    </div>
                                                    <div class="at02">
                                                      <span></span>
                                                      <div>
                                                        <h4 class="at02__title display-5">F5 on Microsoft Azure</h4>
                                                      </div>
                                                    </div>
                                                    <div class="at04">
                                                      <div id="atom-1185528827" class="at04 U:margin-top">
                                                        <p>Gain security, performance, and availability for your apps on Microsoft Azure.</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="__gradient-wrap">
                                                  <div class="__gradient-first-color"></div>
                                                  <div class="__gradient"></div>
                                                  <div class="__gradient-second-color"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                                <div class="card">
                                  <a href="/partners/technology-alliances/google-cloud-platform" event-name="google-link-click" class="card-link partner-card-link">
                                    <div>
                                      <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                        <div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
                                          <div class="aem-Grid aem-Grid--12 aem-Grid--default--12">
                                            <div class="cont01 aem-GridColumn aem-GridColumn--default--12">
                                              <style type="text/css"></style>
                                              <div class="bg-default cont01 text-center U:padding-top-lg U:padding-rt-lg U:padding-bot-lg U:padding-lt-lg height-1 theme-wrap">
                                                <div>
                                                  <div class="content parsys">
                                                    <div class="at05">
                                                      <div class="SVG-fill-lagoon">
                                                      ${cloudSvgIcon}
                                                      </div>
                                                    </div>
                                                    <div class="at02">
                                                      <span></span>
                                                      <div>
                                                        <h4 class="at02__title display-5">F5 on Google Cloud Platform</h4>
                                                      </div>
                                                    </div>
                                                    <div class="at04">
                                                      <div id="atom285939626" class="at04  U:margin-top">
                                                        <p>Gain security, performance, and availability for your apps Google Cloud Platform.</p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div class="__gradient-wrap">
                                                  <div class="__gradient-first-color"></div>
                                                  <div class="__gradient"></div>
                                                  <div class="__gradient-second-color"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="__gradient-wrap">
                      <div class="__gradient-first-color"></div>
                      <div class="__gradient"></div>
                      <div class="__gradient-second-color"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="__gradient-wrap">
              <div class="__gradient-first-color"></div>
              <div class="__gradient"></div>
              <div class="__gradient-second-color"></div>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };

  render = () => {
    const tabPanel: null | HTMLDivElement = document.querySelector(
      selectors.tabPanel
    );

    if (!tabPanel) {
      return;
    }

    tabPanel.insertAdjacentHTML("beforeend", this.getHtml());
    this.tabPanels = document.querySelectorAll(selectors.tabPanel + ">div");
    this.addCardLinkListener();
  };

  hideOtherPanel = () => {
    this.tabPanels &&
      this.tabPanels.forEach((panel: HTMLDivElement) => {
        if (panel.classList.contains("extra-panel")) {
          panel.classList.add(this.activeClassName);
        } else {
          panel.classList.remove(this.activeClassName);
        }
      });
  };

  addCardLinkListener = () => {
    const cardLinks: null | NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll("a.partner-card-link");

    if (!cardLinks || cardLinks.length === 0) {
      return;
    }

    cardLinks.forEach((link: HTMLAnchorElement) => {
      const eventName: string | null = link.getAttribute("event-name");

      link.addEventListener("click", () => {
        eventName && triggerMetrics(eventName);
      });
    });
  };
}
