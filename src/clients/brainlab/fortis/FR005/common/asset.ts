import { SuccessStory } from "../models/success-story.model";
import { adnCourses, adnIndicators } from "./adn.data";
import { lpnCourses, lpnIndicators } from "./lpn.data";

export const selectors = {
  unbounceTitle: "main.content>div>div.unbounce-title.parbase.section",
  successStories: "div.success-stories",
  rfiButton: "main.content>div>div:nth-child(2) div.rfi-btn>a",
};

export const courseScheduleData = {
  title: "Course Schedule",
  nursingPrograms: [
    "Nursing Programs",
    "October 2, 2023",
    "January 8, 2024",
    "April 4, 2024",
    "July 8, 2024",
    "September 30, 2024",
  ],
  requestInformation:
    "The number of classes taken online varies each term, and some terms in the program may be taught entirely on campus. Speak to one of our admissions representatives for more information.",
  requestInformationCtaText: "Request Information",
  footerText:
    "Each quarter is 12 weeks in length. Term dates are subject to change.",
};

export const planOfStudyData = {
  title: "Plan of Study",
  adn: {
    title: "ASSOCIATE DEGREE IN NURSING (ADN)",
    shortTitle: "ADN",
    courses: adnCourses,
    indicators: adnIndicators,
    Schedule: `Morning: 8:00 a.m. - 5:00 p.m. Monday through Friday Evening: 5:30 p.m. - 11:30 p.m. Monday through Friday *Clinical times may start as early 6:00am. Some rotations maybe over night rotations and end's late as 7:00am. This may also requve an occasional Saturday or Sunday. Hours are subject to change.`,
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

export const successStories: SuccessStory[] = [
  {
    name: "Teshieka C",
    title: "Associate Degree in Nursing",
    description:
      "I chose Fortis for a number of reasons to get my Associates Degree.  The first reason was that it was local.  In addition to that, there were staff members here that really cared when I came to orientation. There were people here who made me feel like I want to be invested in your education and I want to see you grow and that for me pushed me to say that’s the place I need to be.",
    img: "https://www.fortis.edu/campuses/florida/cutler-bay/ignite/nursing/_jcr_content/par/success_stories/image.transform/w200/q80/img.jpg",
  },
  {
    name: "Ken H",
    title: "Practical Nursing",
    description:
      "I strongly encourage anyone seeking self-improvement and career enhancement to enroll in Fortis College. The programs they offer integrate the talent, knowledge, and skills of top-quality instructors, as well as, a diverse group of highly motivated students who are preparing for rewarding careers. Thanks to Fortis College, I now have the “real world” experience necessary to lead a successful career! I am a practical nursing graduate holding down two LPN jobs now and back in school with Fortis to complete my Associates of Registered Nursing.",
    img: "https://www.fortis.edu/campuses/florida/cutler-bay/ignite/nursing/_jcr_content/par/success_stories_183318302/image.transform/w200/q80/img.jpg",
  },
  {
    name: "Denise S",
    title: "Associate Degree in Nursing ",
    description:
      "Right now I work as a nurse and a case manager for Superior Home Care and Hospice.  Going to school at Fortis worked out very well for me.  I did the morning classes.  I also worked full-time.  I was struggling as a CNA making $13 an hour for 40 hours a week which wasn’t enough to get by.  Graduating as a nurse and working for a home health agency has really made a huge difference.  Financially, it’s made a huge difference in my life.",
    img: "https://www.fortis.edu/campuses/florida/cutler-bay/ignite/nursing/_jcr_content/par/success_stories_342827713/image.transform/w200/q80/img.jpg",
  },
];

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
  seeLessText: "See Less Course",
  seeMoreText: "See More Course",
};

export const mboxNames = {
  requestInfo: "request-info",
  seeMore: "see-more",
  seeLess: "see-less",
  tab: "tab",
  slideArrow: "slide-arrow",
  slideDot: "slide-dot",
  accordionToggle: "accordion-toggle",
};
