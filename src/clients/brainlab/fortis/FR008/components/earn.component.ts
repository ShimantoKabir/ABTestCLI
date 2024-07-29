export class EarnComponent {
  getHtml = (): string => {
    const htmlString: string = `
      <div class="earn-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h2>Earn a Degree That Drives Excellence in Nursing</h2>
          </div>
          <div class="description" >
            <p>Denver College of Nursing (DCN) is dedicated to training the next generation of nurses - that means educating students who are ready to devote their lives to patient care. If you feel called to become a nurse, the Bachelor of Science in Nursing (BSN) program prepares you for licensure so you can begin providing vital bedside care.</p>
            <p>The BSN program is an intensive, 21-month entry path into nursing, offering focused academics, practical knowledge, and clinical preparation. Not only will you gain the technical skills you'll need to be successful in the field and prepared to sit for the NCLEX, but you'll also benefit from the holistic professional development necessary to become a leadership-minded nurse.</p>
            <p>We invite you to transform your passion for care into a powerful force for change. Join us at DCN.</p>
          </div>
          <div class="action" >
            <button>Request Info</button>
          </div>
        </div>
      </div>
    `;
    return htmlString.trim();
  };
}
