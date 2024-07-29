import { formInfos, successText } from "../common/asset";

export class SuccessComponent {
  getHtml = () => {
    const htmlString = `
      <div class="success-component" >
        <div class="success-text" >
          <p>${successText}</p>
        </div>
        <div class="success-close-icon" >
          ${formInfos.closeIcon}
        </div>
      </div>        
    `;

    return htmlString.trim();
  };
}
