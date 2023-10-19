import { Initializer } from "../../../../../utilities/initializer";
import { TestInfo } from "../common/test.info";
import { CourseScheduleComponent } from "./course-schedule.component";
import { SuccessStoryComponent } from "./success-story.component";

export class MainComponent {
  constructor() {
    Initializer.init(TestInfo, "0.0.1");
  }

  init = (): void => {
    const courseScheduleComponent = new CourseScheduleComponent();
    const unbounceTitle = courseScheduleComponent.render();

    if (!unbounceTitle) {
      return;
    }

    const successStoryComponent = new SuccessStoryComponent();
    successStoryComponent.render(unbounceTitle);
  };
}
