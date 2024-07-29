import { selectors } from "../common/asset";

export class CarousalComponent {
  private getHtml = () => {
    const htmlString: string = `
    <div data-component-type="container" class="cont01 aem-GridColumn aem-GridColumn--default--12 carousal" data-component-title="Wrapper Bloc">
      <!-- Custom Height Styles-->
      <style type="text/css"></style>
      <div class="bg-default 
        cont01 
        U:margin-bot-lg
        U:padding-bot-xl 
        height-1 theme-default theme-wrap " dir="auto" id="container1567578916">
        <div>
          <div class="content parsys">
            <div data-component-type="platter" class="c29-columns">
              <div id="platter-1347252601" class="bg-default c29-columns__wrap  " data-bg-skip="None">
                <div class="c29-columns__container   ">
                  <div class="row">
                    <div class="c29-columns__col c29-columns__col--two-one-third">
                      <div>
                        <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                          <div data-component-type="molecule" class="m15 aem-GridColumn aem-GridColumn--default--12" data-component-title="Ceros">
                            <div class="m15 m15-wrapper" style="padding-bottom: 78.88888888888889%">
                              <iframe allowfullscreen="" src="https://view.ceros.com/f5/carousel-waap-ebook" frameborder="0" class="m15-experience m15-" data-gtm-yt-inspected-35="true"></iframe>
                            </div>
                            <script type="text/javascript" src="https://view.ceros.com/scroll-proxy.min.js"></script>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="c29-columns__col">
                      <div>
                        <div class="aem-Grid aem-Grid--12 aem-Grid--default--12 "></div>
                      </div>
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
    `;

    return htmlString.trim();
  };

  render = () => {
    const middleDescription: null | HTMLDivElement = document.querySelector(
      selectors.nthAemGrid + "(2)"
    );

    if (!middleDescription) {
      return;
    }

    // middleDescription.insertAdjacentHTML("afterend", this.getHtml());
  };
}
