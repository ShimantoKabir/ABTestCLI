import { campusInfo, runningCampus } from "../common/asset";

export class OfferComponent {
  getItemHtml = (item: any): string => {
    const htmlString: string = `
      <div class="item" > 
        <div class="icon" >
          <img src="${item.icon}" >
        </div>
        <div class="name" >
          <h5>${item.name}</h5>
        </div>
      </div>
      <div class="border" ><div class="wrap" ></div></div>
    `;

    return htmlString.trim();
  };

  getProgramHtml = (program: any): string => {
    const htmlString: string = `
      <div class="program" > 
        <div class="title" >
          <h4>${program.title}</h4>
        </div>
        ${program.items.map((item: any) => this.getItemHtml(item)).join("\n")}
      </div>
    `;

    return htmlString.trim();
  };

  getOfferHtml = (offer: any) => {
    const htmlString: string = `
      <div class="offer" >
        ${offer.map((program: any) => this.getProgramHtml(program)).join("\n")}
      </div>
    `;

    return htmlString.trim();
  };

  getHtml = (): string => {
    //@ts-ignore
    const offers = campusInfo[runningCampus].offers;

    //@ts-ignore
    const campusName: string = campusInfo[runningCampus].name;

    const htmlString: string = `
      <div class="offer-component" >
        <div class="component-wrap" >
          <div class="header" >
            <h4>Programs Offered At Fortis ${campusName}</h4>
          </div>
          <div class="offers" >
            ${offers.map((offer: any) => this.getOfferHtml(offer)).join("\n")}
          </div>
          <div class="cta" >
            <button mbox-name="offer-apply-button" >LEARN HOW TO APPLY</button>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
