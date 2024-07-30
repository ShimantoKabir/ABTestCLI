import {
  firstFromDisclaimerLink,
  formBgLink,
  selectors,
} from "../common/asset";

export class OverlayComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="overlay-component" >
        <div class="component-wrap" >
          <div class="catalog" >
            <div class="catalog-overlay" >
              <div class="overlay-image" >
                <img src="${formBgLink}" >
              </div>
              <div class="overlay-body" >
              </div>
            </div>
            <div class="main first-form" >
              <div class="heading" >
                <h6>FREE RESTORATION AND PERFORMANCE PARTS CATALOG</h6>
              </div>
            </div>
            <div class="main second-form" >
              <div class="heading" >
                <h6>FREE RESTORATION AND PERFORMANCE PARTS CATALOG</h6>
              </div>
            </div>
            <div class="main no-form show" >
              <div class="heading" >
                <h6>Purchase or Download your Impala & Full Size Chevy Parts Catalog</h6>
              </div>
              <div class="description" >
                <table>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Download the Catalog</td>
                      <td>FREE</td>
                      <td></td>
                      <td><button class="first-download" >Download</button></td>
                    </tr>
                    <tr>
                      <td>Delivery - U.S. 4th Class (contiguous 48 states only) Note: Catalog will arrive in approximately 2-4 weeks</td>
                      <td>Free</td>
                      <td><input type="text" ></td>
                      <td><button class="second-download" >Download</button></td>
                    </tr>
                    <tr>
                      <td>Delivery - U.S. 1st Class & HI, AK, PR, Guam</td>
                      <td>$20.00</td>
                      <td><input type="text" ></td>
                      <td><button class="second-download" >Download</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  loadFirstFormScript = (): string => {
    const scriptString: string = `
      <script defer>
        hbspt.forms.create({
          region: "na1",
          portalId: "521369",
          formId: "dcdaff52-9b18-4baa-b231-1865c29fe3a1"
        });
      </script>
    `;
    return scriptString.trim();
  };

  loadSecondFormScript = (): string => {
    const scriptString: string = `
      <script defer>
        hbspt.forms.create({
          region: "na1",
          portalId: "521369",
          formId: "bcf2e44d-2295-44bd-b20c-534c52c47980"
        });
      </script>
    `;
    return scriptString.trim();
  };

  render = () => {
    document.body.insertAdjacentHTML("afterbegin", this.getHtml());

    setTimeout(() => {
      // @ts-ignore
      hbspt.forms.create({
        region: "na1",
        portalId: "521369",
        formId: "dcdaff52-9b18-4baa-b231-1865c29fe3a1",
      });

      //@ts-ignore
      hbspt.forms.create({
        region: "na1",
        portalId: "521369",
        formId: "bcf2e44d-2295-44bd-b20c-534c52c47980",
      });

      this.findForm();
    }, 500);
  };

  findForm = () => {
    const hubSpotForms: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.hbspt-form");

    const firstFrom: null | HTMLDivElement = document.querySelector(
      "div.main.first-form"
    );
    const secondFrom: null | HTMLDivElement = document.querySelector(
      "div.main.second-form"
    );

    if (hubSpotForms[0].childElementCount === 0) {
      setTimeout(() => {
        this.findForm();
      }, 500);
    } else {
      console.log("Found from...!");

      hubSpotForms.forEach((form: HTMLDivElement, index: number) => {
        if (form.firstChild && form.firstChild.nodeName === "FORM") {
          const firstFormClone = form.cloneNode(true) as Element;
          firstFrom &&
            firstFrom.insertAdjacentElement("beforeend", firstFormClone);
          form.remove();
          console.log("First form moved....!");
        } else {
          const secondFormClone = form.cloneNode(true) as Element;
          secondFrom &&
            secondFrom.insertAdjacentElement("beforeend", secondFormClone);
          console.log("Second form moved....!");
          form.remove();
        }
      });

      firstFrom && secondFrom && this.addListener(firstFrom, secondFrom);
    }
  };

  changeFirstFormDisclaimer = () => {
    const disclaimer: null | HTMLParagraphElement = document.querySelector(
      selectors.firstFormDisclaimer
    );

    if (!disclaimer) {
      setTimeout(() => {
        this.changeFirstFormDisclaimer();
      }, 500);
    } else {
      console.log("Disclaimer found...!");
      disclaimer.textContent = "";
      disclaimer.insertAdjacentHTML(
        "afterbegin",
        `Classic Industries needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at anytime. For information, check out our <a href="${firstFromDisclaimerLink}" >Privacy Policy</a>.`
      );
    }
  };

  addListener = (firstFrom: HTMLDivElement, secondFrom: HTMLDivElement) => {
    const mains: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div.main");

    const firstDownload: null | HTMLButtonElement = document.querySelector(
      "button.first-download"
    );
    const secondDownloads: null | NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("button.second-download");

    if (
      !firstDownload ||
      !secondDownloads ||
      secondDownloads.length === 0 ||
      !mains ||
      mains.length === 0 ||
      !firstFrom ||
      !secondFrom
    ) {
      return;
    }

    firstDownload.addEventListener("click", () => {
      this.hideOtherMain(mains);
      firstFrom.classList.add("show");
    });

    secondDownloads.forEach((btn: HTMLButtonElement) => {
      btn.addEventListener("click", () => {
        this.hideOtherMain(mains);
        secondFrom.classList.add("show");
      });
    });

    this.changeFirstFormDisclaimer();
  };

  hideOtherMain = (mains: NodeListOf<HTMLDivElement>) => {
    mains.forEach((main: HTMLDivElement) => {
      main.classList.remove("show");
    });
  };
}
