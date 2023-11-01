import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";

export const ohioLpnCourses: Course[] = [
  {
    code: "AHP215",
    title: "Anatomy and Physiology",
    credit: "80",
    hours: 6,
  },
  {
    code: "CMP105",
    title: "Introduction to Informatics **",
    credit: "20",
    hours: 2,
  },
  {
    code: "PNR104",
    title: "Basic Skills Quality & Safety in Nursing Practice",
    credit: "80",
    hours: 6,
  },
  {
    code: "PNR105",
    title: "Pharmacology",
    credit: "50",
    hours: 5,
  },
  {
    code: "PNR106",
    title: "Foundations of Nursing",
    credit: "110",
    hours: 6,
  },
  {
    code: "PNR108",
    title: "Gerontological Nursing ****",
    credit: "80",
    hours: 5,
  },
  {
    code: "PNR200",
    title: "Mental Health Nursing ****",
    credit: "80",
    hours: 5,
  },
  {
    code: "PNR201",
    title: "Medical-Surgical Nursing I",
    credit: "108",
    hours: 6,
  },
  {
    code: "PNR202",
    title: "Intravenous Therapy",
    credit: "31",
    hours: 2,
  },
  {
    code: "PNR203",
    title: "Maternal-Newborn Nursing ****",
    credit: "90",
    hours: 5,
  },
  {
    code: "PNR204",
    title: "Pediatric Nursing ****",
    credit: "90",
    hours: 5,
  },
  {
    code: "PNR205",
    title: "Concepts of Leadership and Collaboration **",
    credit: "30",
    hours: 3,
  },
  {
    code: "PNR206",
    title: "Medical-Surgical Nursing II",
    credit: "160",
    hours: 8,
  },
  {
    code: "PNR207",
    title: "Transition to PN Practice - Capstone",
    credit: "190",
    hours: 9,
  },
  {
    code: "PNR208",
    title: "Concepts of Community-Based Nursing **",
    credit: "20",
    hours: 2,
  },
  {
    code: "PSY278",
    title: "Human Growth and Development **",
    credit: "40",
    hours: 4,
  },
  {
    code: "SCI115",
    title: "Fundamentals of Human Nutrition **",
    credit: "30",
    hours: 3,
  },
];

export const ohioLpnIndicators: Indicator[] = [
  {
    sign: "**",
    meaning: "Online delivery",
  },
  {
    sign: "****",
    meaning: "Blended delivery",
  },
];
