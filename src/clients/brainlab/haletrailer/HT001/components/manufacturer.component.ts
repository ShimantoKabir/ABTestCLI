import imageItems from "./image.items";

export class ManufacturerComponent {
  render = (): string => {
    const html: string = `
            <div class="wp-block-group is-layout-flow manufacturer-component" >
                <div class="is-style-container-medium uk-container uk-container-medium" >
                    <h2 class="wp-block-heading uk-text-center is-style-header-alt has-primary-color has-text-color">Manufacturer</h2>
                    ${imageItems()}
                    <div class="truck-heading wp-block-buttons is-horizontal is-content-justification-center is-layout-flex wp-container-83">
                        <div class="wp-block-button has-custom-font-size has-medium-font-size">
                            <a href="/promote/featured/" style="border-radius:10px" class="uk-button uk-width-1-1 uk-width-auto@s uk-button-secondary">FEATURED EQUIPMENT</a>
                        </div>
                        <div class="wp-block-button has-custom-font-size has-medium-font-size">
                            <a href="/promote/new-arrivals/" style="border-radius:10px" class="uk-button uk-width-1-1 uk-width-auto@s uk-button-secondary">NEW ARRIVALS</a>
                        </div>
                    </div>
                    <h2 class="wp-block-heading uk-text-center is-style-header-alt has-primary-color has-text-color">COMMERCIAL TRUCK &amp; TRAILER SUPPLIES</h2>
                    <p class="uk-text-center has-medium-font-size uk-text-lead">Hale Trailer Brake &amp; Wheel is an authorized distributor of the finest quality O.E.M. products. We put our reputation for dependability and service excellence behind every part and piece of commercial trailer equipment we offer. Request a service appointment or contact any of our local branch locations to receive more information about the specific commercial truck trailer supplies and parts needed to keep your project moving.</p>
                </div>
            </div>
        `;
    return html.trim();
  };
}
