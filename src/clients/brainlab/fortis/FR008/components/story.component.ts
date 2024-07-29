import { approvedIcon, avatarImage } from "../common/asset";

export class StoryComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="story-component" >
        <div class="component-wrap" >
          <div class="text" >
            <div class="icon" >
              ${approvedIcon}
            </div>
            <div class="title" >
              <h2>Accredited And Approved</h2>
            </div>
            <div class="description" >
              <p>DCN programs are approved by the Colorado State Board of Nursing (CBON), the Colorado Department of Higher Education, the Texas Higher Education Coordinating Board, and the Texas Board of Nursing. DCN programs are accredited by the Commission on Collegiate Nursing Education (CCNE), The Higher Learning Commission (HLC), and the Accreditation Commission for Education in Nursing (ACEN).</p>
            </div>
          </div>
          <div class="story" >
            <div class="quote" >
              <p>"My education at DCN has impacted my life in a major way. It impacted me career-wise because it's turned me into the professional that I thought I already was."</p>
            </div>
            <div class="person" >
              <div class="avatar" >
                <img src="${avatarImage}" >
              </div>
              <div class="details" >
                <div class="name" >
                  <h4>Aisha L.</h4>
                </div>
                <div class="education" >
                  <p>Bachelor of Science in Nursing Graduate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
