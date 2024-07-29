import { aboutImage } from "../common/asset";

export class AboutComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="about-component" >
        <div class="component-wrap" >
          <div class="text" >
            <div class="title" >
              <h2>About DCN</h2>
            </div>
            <div class="description" >
              <p>
                DCN provides a specialized environment focused
                exclusively on nursing education. We blend rigorous
                academic programs with a supportive, nursing-centric
                culture to ensure our students have the resources they
                need to excel. Our commitment extends beyond classroom
                learning to include hands-on, practical experiences and
                community engagement, preparing our graduates for the
                real-world challenges of healthcare.
              </p>
            </div>
          </div>
          <div class="image" >
            <img src="${aboutImage}" >
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
