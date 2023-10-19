import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";

export const lpnCourses: Course[] = [
  {
    code: "PNR104",
    title: "Basic Skills, Quality & Safety in Nursing Practice",
    hours: 80,
    credit: "6",
  },
  {
    code: "AHP215",
    title: "Anatomy and Physiology",
    hours: 80,
    credit: "6",
  },
  {
    code: "SCI115*",
    title: "Fundamentals of Human Nutrition **",
    hours: 30,
    credit: "3",
  },
  {
    code: "CMP105",
    title: "Introduction to Informatics **",
    hours: 20,
    credit: "2",
  },
  {
    code: "PNR105",
    title: "Pharmacology",
    hours: 50,
    credit: "5",
  },
  {
    code: "PNR108",
    title: "Gerontological Nursing ***",
    hours: 80,
    credit: "5",
  },
  {
    code: "PNR106",
    title: "Foundations of Nursing",
    hours: 110,
    credit: "6",
  },
  {
    code: "PSY278*",
    title: "Human Growth and Development **",
    hours: 40,
    credit: "4",
  },
  {
    code: "PNR201",
    title: "Medical-Surgical Nursing I",
    hours: 160,
    credit: "8",
  },
  {
    code: "PNR203",
    title: "Maternal-Newborn Nursing ***",
    hours: 90,
    credit: "5",
  },
  {
    code: "PNR204",
    title: "Pediatric Nursing ***",
    hours: 90,
    credit: "5",
  },
  {
    code: "PNR206",
    title: "Medical-Surgical Nursing II",
    hours: 160,
    credit: "8",
  },
  {
    code: "PNR208",
    title: "Concepts of Community-Based Nursing **",
    hours: 20,
    credit: "2",
  },
  {
    code: "PNR205",
    title: "Concepts of Leadership and Collaboration **",
    hours: 30,
    credit: "3",
  },
  {
    code: "PNR200",
    title: "Mental Health Nursing ***",
    hours: 80,
    credit: "5",
  },
  {
    code: "PNR207",
    title: "Transition to PN Practice-Capstone",
    hours: 215,
    credit: "9",
  },
];

export const lpnIndicators: Indicator[] = [
  {
    sign: "*",
    meaning: "INDICATES A GENERAL EDUCATION COURSE",
  },
  {
    sign: "**",
    meaning: "INDICATES COURSE DELIVERED ONLINE",
  },
  {
    sign: "***",
    meaning:
      "INDICATES BLENDED DELIVERY (LECTURE IS ONLINE AND LAB & CLINICAL ARE RESIDENTIAL)",
  },
];
