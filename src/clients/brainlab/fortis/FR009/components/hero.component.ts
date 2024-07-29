export class HeroComponent {
  getHtml = (placement: string, data: any) => {
    const htmlString: string = `
      <div class="hero-component ${placement}" >
        <div class="component-wrap" >
          <div class="heading" >
            <h2>${data.title}</h2>
            <h2>${data.subTitle}</h2>
          </div>
          <div class="sub-heading" >
            <h4>${data.description}</h4>
          </div>
          <div class="cta" >
            <button mbox-name="${placement}-hero-apply-button" >LEARN HOW TO APPLY</button>
          </div>
          <div class="description" >
            <p>Classes taught in English only</p>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
