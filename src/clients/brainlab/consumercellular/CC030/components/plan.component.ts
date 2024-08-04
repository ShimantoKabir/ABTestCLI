import { plans, viewPlanLink } from "../common/asset";

export class PlanComponent {
  getPlanItemHtml = (plan: any) => {
    const htmlString: string = `
      <div class="item" >
        <div class="heading" >
          <h2>${plan.data}</h2>
          <p>Unlimited Talk & Text</p>
        </div>
        <div class="body" >
          <div class="cost" >
            <div class="currency" >
              <p>$</p>
            </div>
            <div class="duration" >
              <p>${plan.month}</p>
            </div>
          </div>
          <div class="text" >
            <h3>Month</h3>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };

  public getHtml = () => {
    const htmlString: string = `
      <div class="plan-component" >
        <div class="component-wrap" >
          <div class="heading" >
            <h3>Our Most Popular Plans</h3>
            <h6>Plans Below Include Unlimited Talk & Text</h6>
          </div>
          <div class="plans" >
            ${plans.map((plan: any) => this.getPlanItemHtml(plan)).join("\n")}
          </div>
          <div class="footer" >
            <div class="text" >
              <p>Plus, Add Lines to Any Plan for just $15</p>
            </div>
            <div class="action" >
              <a href="${viewPlanLink}" >VIEW ALL PLANS</a>
            </div>
          </div>
        </div>
      </div>
    `;

    return htmlString.trim();
  };
}
