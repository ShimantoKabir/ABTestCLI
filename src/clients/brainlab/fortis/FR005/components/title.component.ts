export class TItleComponent {
  static render = (title: string): string => {
    const htmlString: string = `
      <div class="component-title" >
        <div class="img-left" >
          <img src="/etc.clientlibs/edaff/clientlibs/clientlib-unbounce-images/resources/images/leafing-left.png">
        </div>
        <div class="title" >
          <p>${title}</p>
        </div>
        <div class="img-right" >
          <img src="/etc.clientlibs/edaff/clientlibs/clientlib-unbounce-images/resources/images/leafing-right.png">
        </div>
      </div>        
    `;

    return htmlString.trim();
  };
}
