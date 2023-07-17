import { Initializer } from "../../../../../utilities/initializer";
import { selectors } from "../common/asset";
import { TestInfo } from "../common/test.info";
import { SuggestionComponent } from "./suggestion.component";

export class MainComponent {
  init = (): void => {
    Initializer.init(TestInfo, "0.0.1");

    const contactBar: Element | null = document.querySelector(
      selectors.contactBar
    );

    const searchBar: Element | null = document.querySelector(
      selectors.searchBar
    );

    const searchInputs: NodeListOf<Element> | null =
      document.querySelectorAll<Element>(selectors.searchInput);

    if (searchInputs && searchInputs.length > 0) {
      searchInputs.forEach((input) => {
        input.addEventListener("keyup", (e: any) => {
          if (e.key === "Enter") {
            // @ts-ignore
            window._vis_opt_queue = window._vis_opt_queue || [];
            // @ts-ignore
            window._vis_opt_queue.push(function () {
              // @ts-ignore
              _vis_opt_goal_conversion(201);
            });
          }
        });
      });
    }

    if (searchBar && contactBar) {
      const suggestionComponent = new SuggestionComponent();
      contactBar.insertAdjacentHTML(
        "beforebegin",
        suggestionComponent.render()
      );
    }
  };
}
