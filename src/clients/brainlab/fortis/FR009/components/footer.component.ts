import { companyInfo } from "../common/asset";

export class FooterComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="footer-component" >
        <div class="component-wrap" >
          <div class="location" >
            <div class="icon" >
              <img src="${companyInfo.location.icon}" >
            </div>
            <div class="text-content" >
              <p><strong>${companyInfo.location.city}</strong></p>
              <p>${companyInfo.location.address}</p>
              <p>${companyInfo.location.zipCode}</p>
            </div>
          </div>
          <div class="email" >
            <div class="icon" >
              <img src="${companyInfo.email.icon}" >
            </div>
            <div class="text-content" >
              <a href="mailto:${companyInfo.email.email}" >${companyInfo.email.email}</a>
            </div>
          </div>
          <div class="contact" >
            <div class="icon" >
              <img src="${companyInfo.contact.icon}" >
            </div>
            <div class="text-content" >
              <p><strong>${companyInfo.contact.type}</strong></p>
              <a href="tel:+${companyInfo.contact.number}" >${companyInfo.contact.numberText}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-component" >
        <div class="component-wrap" >
          <div class="copyright-info" >
            <p>&#169; 2024 Fortis</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
