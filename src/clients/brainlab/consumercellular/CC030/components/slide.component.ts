import {
  bringYourLink,
  rightIconSvg,
  shopPhoneLink,
  slideMobileBgUrl,
} from "../common/asset";

export class SlideComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="slide-component" >
        <div class="component-wrap" >
          <div class="bg-content" >
            <div class="bg-mobile" >
              <img src="${slideMobileBgUrl}" alt="bg-img" >
            </div>
            <div class="content" >
              <div class="headline" >
                <h1>BIG WIRELESS COVERAGE</h1>
                <h1>WITHOUT BIG WIRELESS COST.</h1>
              </div> 
              <div class="features" >
                <div class="item" >
                  <div class="icon" >
                    ${rightIconSvg}
                  </div>
                  <div class="text" >
                    <p>Free activation</p>
                  </div>
                </div>
                <div class="item" >
                  <div class="icon" >
                    ${rightIconSvg}
                  </div>
                  <div class="text" >
                    <p>No long-term contracts</p>
                  </div>
                </div>
                <div class="item" >
                  <div class="icon" >
                    ${rightIconSvg}
                  </div>
                  <div class="text" >
                    <p>30-day risk-free guarantee</p>
                  </div>
                </div>
                <div class="item" >
                  <div class="icon" >
                    ${rightIconSvg}
                  </div>
                  <div class="text" >
                    <p>100% U.S. based customer support</p>
                  </div>
                </div>
              </div>
              <div class="actions" >
                <a class="shop" href="${shopPhoneLink}" >SHOP PHONES</a>
                <a class="bring" href="${bringYourLink}" >BRING YOUR OWN</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
