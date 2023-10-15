import { mboxNames, selectors } from "../common/asset";
import { TileHeaderComponent } from "./tile-header.component";

export class TileComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="tile-component">
        <div class="${selectors.shopPhone} phone">
          <div class="phone-img">
            <img src="https://medianet.com/cro/consumercellular/cc008/v1/shop-phone.png">
          </div>
          <div class="phone-text">
            <p>SHOP PHONES & DEVICES</p>
          </div>
        </div>
        <div class="${selectors.yourPhone} phone">
          <div class="phone-img">
            <img src="https://medianet.com/cro/consumercellular/cc008/v1/own-phone.png">
            <p>FREE</p>
          </div>
          <div class="phone-text">
            <p>BRING YOUR OWN</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  addDeviceRemoveCta = (tile: HTMLDivElement) => {
    const tileHeader: Element = tile.childNodes[0] as Element;
    const headerText: null | string = tileHeader.textContent;
    if (headerText) {
      tileHeader.textContent = "";
      tileHeader.insertAdjacentHTML(
        "beforeend",
        TileHeaderComponent.render(headerText)
      );
    }

    const removeDeviceOriginal: Element = tile.childNodes[2]
      .lastChild as Element;
    const removeDeviceNew: Element = tile.childNodes[0].lastChild as Element;

    if (removeDeviceOriginal && removeDeviceNew) {
      removeDeviceNew.addEventListener("click", () => {
        const removeCta =
          removeDeviceOriginal.firstElementChild as HTMLAnchorElement;
        removeCta.click();
      });
    }
  };

  addListeners = () => {
    const addDeviceDirect: null | HTMLButtonElement = document.querySelector(
      selectors.addDeviceDirect
    );

    const yourDeviceDirect: null | HTMLAnchorElement = document.querySelector(
      selectors.yourDeviceDirect
    );

    if (!addDeviceDirect || !yourDeviceDirect) {
      return;
    }

    const shopPhones: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div." + selectors.shopPhone);

    if (shopPhones && shopPhones.length > 0) {
      shopPhones.forEach((phone: HTMLDivElement) => {
        phone.addEventListener("click", () => {
          console.log("shop-phone-and-device=", mboxNames.shopPhone);
          // @ts-ignore
          adobe.target.trackEvent({ mbox: mboxNames.shopPhone });
          addDeviceDirect.click();
        });
      });
    }

    const yourPhones: null | NodeListOf<HTMLDivElement> =
      document.querySelectorAll("div." + selectors.yourPhone);

    if (yourPhones && yourPhones.length > 0) {
      yourPhones.forEach((phone: HTMLDivElement) => {
        phone.addEventListener("click", () => {
          console.log("bring-your-device=", mboxNames.shopPhone);
          // @ts-ignore
          adobe.target.trackEvent({ mbox: mboxNames.yourPhone });
          yourDeviceDirect.click();
        });
      });
    }
  };

  render = () => {
    const tiles: null | NodeListOf<HTMLDivElement> = document.querySelectorAll(
      selectors.tiles
    );

    if (!tiles || tiles.length === 0) {
      return;
    }

    tiles.forEach((tile: HTMLDivElement) => {
      tile.insertAdjacentHTML("beforeend", this.getHtml());
      this.addDeviceRemoveCta(tile);
    });

    this.addListeners();
  };
}
