import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";
import { SuccessStory } from "../models/success-story.model";
import { floridaAdnCourses, floridaAdnIndicators } from "./florida-adn.data";
import { floridaLpnCourses, floridaLpnIndicators } from "./florida-lpn.data";
import {
  hvacAdnCourses,
  hvacAdnIndicators,
  hvacSchedule,
} from "./hvac-adn.data";
import { hvacLpnCourses, hvacLpnIndicators } from "./hvac-lpn.data";
import { indianaAdnCourses, indianaAdnIndicators } from "./indiana-adn.data";
import { indianaLpnCourses, indianaLpnIndicators } from "./indiana-lpn.data";
import { ohioAdnCourses, ohioAdnIndicators } from "./ohio-adn.data";
import { ohioLpnCourses, ohioLpnIndicators } from "./ohio-lpn.data";
import { surgicalAdnCourses, surgicalAdnIndicators } from "./surgical-adn.data";
import { surgicalLpnCourses, surgicalLpnIndicators } from "./surgical-lpn.data";
import { TestInfo } from "./test.info";

export const selectors = {
  unbounceTitle: "main.content>div>div.unbounce-title.parbase.section",
  successStories: "div.success-stories",
  rfiButton: "main.content>div>div:nth-child(2) div.rfi-btn>a",
  courseSchedule: "div.course-schedule-component",
  planOfStudy: "div.plan-of-study-component",
  submitButton: "div.modal-content>div.submit>button",
  applyCta: "div.rfi-btn>a",
};

export const courseScheduleData = {
  title: "Course Schedule",
  nursingPrograms: ["Nursing Programs", "October 2, 2023", "January 8, 2024"],
  requestInformation:
    "The number of classes taken online varies each term, and some terms in the program may be taught entirely on campus. Speak to one of our admissions representatives for more information.",
  requestInformationCtaText: "Request Information",
  footerText:
    "Each quarter is 12 weeks in length. Term dates are subject to change.",
};

const variation: string = TestInfo.VARIATION.toString();

const adnIndicators: Indicator[] =
  variation === "florida"
    ? floridaAdnIndicators
    : variation === "indiana"
    ? indianaAdnIndicators
    : variation === "hvac"
    ? hvacAdnIndicators
    : variation === "surgical"
    ? surgicalAdnIndicators
    : ohioAdnIndicators;

const lpnIndicators: Indicator[] =
  variation === "florida"
    ? floridaLpnIndicators
    : variation === "indiana"
    ? indianaLpnIndicators
    : variation === "hvac"
    ? hvacLpnIndicators
    : variation === "surgical"
    ? surgicalLpnIndicators
    : ohioLpnIndicators;

const adnCourses: Course[] =
  variation === "florida"
    ? floridaAdnCourses
    : variation === "indiana"
    ? indianaAdnCourses
    : variation === "hvac"
    ? hvacAdnCourses
    : variation === "surgical"
    ? surgicalAdnCourses
    : ohioAdnCourses;

const lpnCourses: Course[] =
  variation === "florida"
    ? floridaLpnCourses
    : variation === "indiana"
    ? indianaLpnCourses
    : variation === "hvac"
    ? hvacLpnCourses
    : variation === "surgical"
    ? surgicalLpnCourses
    : ohioLpnCourses;

export const planOfStudyData = {
  title: "Plan of Study",
  adn: {
    title: "ASSOCIATE DEGREE IN NURSING (ADN)",
    shortTitle: "ADN",
    courses: adnCourses,
    indicators: adnIndicators,
    Schedule:
      variation === "hvac"
        ? hvacSchedule
        : `Morning: 8:00 a.m. - 5:00 p.m. Monday through Friday Evening: 5:30 p.m. - 11:30 p.m. Monday through Friday *Clinical times may start as early 6:00am. Some rotations maybe over night rotations and end's late as 7:00am. This may also requve an occasional Saturday or Sunday. Hours are subject to change.`,
  },
  lpn: {
    title: "LICENSED PRACTICAL NURSING (LPN)",
    shortTitle: "LPN",
    courses: lpnCourses,
    indicators: lpnIndicators,
    Schedule:
      "Morning: 8:00 a.m. - 5:00 p.m. Monday through Friday *Clinical times may start as early as 6:00 am. Some rotations may be overnight rotations and end as late as 7:00am. This may also require an occasional Saturday or Sunday. Hours are subject to change.",
  },
};

export const tableRowHideBreakPoint: number = 4;

export const leftArrowSvg = `
<svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_139_32)">
    <path d="M36 52.452L32.848 56L4 28L32.848 0L36 3.548L10.808 28L36 52.452Z" fill="#333333" />
  </g>
</svg>
`;

export const rightArrowSvg = `
<svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 3.548L3.152 0L32 28L3.152 56L0 52.452L25.192 28L0 3.548Z" fill="#333333" />
</svg>
`;

export const openOrCloseSvg = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 0C7.15932 0 0 7.15932 0 16C0 24.8407 7.15932 32 16 32C24.8407 32 32 24.8407 32 16C32 7.15932 24.8407 0 16 0ZM16 29.8712C8.35254 29.8712 2.12881 23.6475 2.12881 16C2.12881 8.35254 8.35254 2.12881 16 2.12881C23.6475 2.12881 29.8712 8.35254 29.8712 16C29.8712 23.6475 23.6475 29.8712 16 29.8712Z" fill="white"/>
  <path d="M21.8981 8.58283L16.0405 14.454L10.7794 8.58283C10.3591 8.16249 9.68114 8.16249 9.27436 8.58283C8.85402 9.00317 8.85402 9.68114 9.27436 10.0879L14.5354 15.9591L8.58283 21.8981C8.16249 22.3184 8.16249 22.9964 8.58283 23.4032C9.00317 23.8235 9.68114 23.8235 10.0879 23.4032L15.9591 17.5455L21.2201 23.4032C21.6405 23.8235 22.3184 23.8235 22.7252 23.4032C23.1455 22.9828 23.1455 22.3049 22.7252 21.8981L17.4642 16.0405L23.4167 10.0879C23.8371 9.66758 23.8371 8.98961 23.4167 8.58283C22.9964 8.17605 22.3184 8.17605 21.8981 8.58283Z" fill="white"/>
</svg>
`;

export const buttonTexts = {
  seeLessText: "See Less Courses",
  seeMoreText: "See More Courses",
};

export const mboxNames = {
  seeMore: "see-more",
  seeLess: "see-less",
  tab: "tab",
  slideArrow: "slide-arrow",
  slideDot: "slide-dot",
  accordionToggle: "accordion-toggle",
  formSubmitButton: "form-submit-button",
  applyClick: "apply-click",
  scrollToSndOfWhatToLear: "scroll-to-end-of-what-to-learn",
};
