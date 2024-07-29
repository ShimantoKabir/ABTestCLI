export class TItleComponent {
  static render = (title: any): string => {
    const htmlString: string = `
      <div class="component-title" >
        <div class="img-left" >
          <img src="/etc.clientlibs/edaff/clientlibs/clientlib-unbounce-images/resources/images/leafing-left.png">
        </div>
        <div class="title" >
          <p class="desktop" >${title.desktop}</p>
          <p class="mobile" >${title.mobile}</p>
        </div>
        <div class="img-right" >
          <img src="/etc.clientlibs/edaff/clientlibs/clientlib-unbounce-images/resources/images/leafing-right.png">
        </div>
      </div>        
    `;

    return htmlString.trim();
  };
}
