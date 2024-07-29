export class TrailerInfoComponent {
  static getHtml = (
    key: string,
    value: string,
    needToHide: boolean,
    className: string
  ): string => {
    const htmlString: string = `
      <div class="${className} ${needToHide ? "hide" : ""}">
        <p class="uk-text-small">
          <strong class="has-primary-color">${key}: </strong>
          ${value}              
        </p>
      </div>
    `;
    return htmlString.trim();
  };
}
