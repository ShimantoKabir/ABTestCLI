import { SuccessStory } from "../models/success-story.model";
import { adnCourses, adnIndicators } from "./adn.data";
import { lpnCourses, lpnIndicators } from "./lpn.data";

export const selectors = {
  unbounceTitle: "main.content>div>div.unbounce-title.parbase.section",
  successStories: "div.success-stories",
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
    courses: adnCourses,
    indicators: adnIndicators,
    Schedule: `Morning: 8:00 a.m. - 5:00 p.m. Monday through Friday Evening: 5:30 p.m. - 11:30 p.m. Monday through Friday *Clinical times may start as early 6:00am. Some rotations maybe over night rotations and end's late as 7:00am. This may also requve an occasional Saturday or Sunday. Hours are subject to change.`,
  },
  lpn: {
    title: "LICENSED PRACTICAL NURSING (LPN)",
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
<svg width="40" height="64" viewBox="0 0 40 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_139_32)">
    <path d="M36 52.452L32.848 56L4 28L32.848 0L36 3.548L10.808 28L36 52.452Z" fill="#333333" />
  </g>
</svg>
`;

export const rightArrowSvg = `
<svg width="32" height="56" viewBox="0 0 32 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 3.548L3.152 0L32 28L3.152 56L0 52.452L25.192 28L0 3.548Z" fill="#333333" />
</svg>
`;
