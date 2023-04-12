export class ProductComponent {
  static render = (product: any): string => {
    const html: string = `<a href="${product.href}" class="o-card col-12 col-sm-6 col-md-4 col-lg-3 my-slide fade">
      <div class="o-card__image object-fit">
          <img src="${product.imgSrc}" alt="">
      </div>
      <div class="o-card__content">
          <h3 class="main-heading--xs">${product.headline}</h3>
          <p class="o-card__description body--regular">${product.description}</p>
      </div>
    </a>`;
    return html.trim();
  };
}
