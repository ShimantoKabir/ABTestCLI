import { menus, selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";

export class MenuComponent {
  getHtml = (): string => {
    const html: string = `<div class="${TestInfo.ID}__menu-component" >
            <div class="menu-wrap" >
                ${menus.map((m) => this.getMenuItemHtml(m)).join("\n")}
            </div>     
        </div>`;

    return html.trim();
  };

  getMenuItemHtml = (menu: any): string => {
    const html: string = `<div class="menu-item" ><a href="${menu.href}" >${menu.text}</a></div>`;
    return html.trim();
  };

  render = (): void => {
    document
      .querySelector(selectors.shadeSelector)
      ?.insertAdjacentHTML("beforebegin", this.getHtml());
  };
}
