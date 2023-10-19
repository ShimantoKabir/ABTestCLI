import { Course } from "../models/course.model";

export class CourseItem {
  static getHtml = (course: Course, needToHide: boolean): string => {
    const htmlString: string = `
      <tr class="${needToHide ? "course-hide" : ""}" >
        <td>${course.code}</td>
        <td>${course.title}</td>
        <td>${course.hours}</td>
        <td>${course.credit}</td>
      </tr>
    `;

    return htmlString.trim();
  };
}
