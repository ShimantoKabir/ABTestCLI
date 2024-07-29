import { promises } from "../common/asset";

export class PromiseComponent {
  getPromiseHtml = (promise: any): string => {
    const htmlString: string = `
      <div class="promise" >
        <div class="icon" >
          <img src="${promise.icon}" >
        </div>
        <div class="text-content" >
          <div class="title" >
            <h6>${promise.title}</h6>
          </div>
          <div class="description" >
            <p>${promise.description}</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    const htmlString: string = `
      <div class="promise-component" >
        <div class="component-wrap" >
          ${promises
            .map((promise: any) => this.getPromiseHtml(promise))
            .join("\n")}
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
