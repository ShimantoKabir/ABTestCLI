import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";

export const ohioAdnCourses: Course[] = [
  {
    code: "AHP216",
    title: "Anatomy and Physiology I",
    credit: "6***",
    hours: 80,
  },
  {
    code: "AHP217",
    title: "Anatomy and Physiology II",
    credit: "6***",
    hours: 80,
  },
  {
    code: "BIO101*^",
    title: "General Biology",
    credit: "5",
    hours: 60,
  },
  {
    code: "BIO205*^",
    title: "Microbiology",
    credit: "4",
    hours: 60,
  },
  {
    code: "CMP105*A",
    title: "Introduction to Informatics **",
    credit: "2 ***",
    hours: 20,
  },
  {
    code: "COM205*",
    title: "Effective Communication **",
    credit: "4",
    hours: 40,
  },
  {
    code: "ENG101*",
    title: "English Composition **",
    credit: "4",
    hours: 40,
  },
  {
    code: "MAT101*",
    title: "College Mathematics **",
    credit: "4",
    hours: 40,
  },
  {
    code: "NUR100",
    title: "Pharmacology",
    credit: "5",
    hours: 50,
  },
  {
    code: "NUR101",
    title: "Health Assessment",
    credit: "4",
    hours: 50,
  },
  {
    code: "NUR104",
    title: "Foundations of Nursing",
    credit: "8 ***",
    hours: 150,
  },
  {
    code: "NUR201",
    title: "Medical-Surgical Nursing I",
    credit: "9",
    hours: 180,
  },
  {
    code: "NUR202",
    title: "Maternal-Newborn Nursing ****",
    credit: "4",
    hours: 60,
  },
  {
    code: "NUR203",
    title: "Pediatric Nursing ****",
    credit: "4",
    hours: 60,
  },
  {
    code: "NUR204",
    title: "Leadership and Management **",
    credit: "2",
    hours: 20,
  },
  {
    code: "NUR206",
    title: "Community Nursing Concepts **",
    credit: "2",
    hours: 20,
  },
  {
    code: "NUR208",
    title: "Mental Health Nursing ****",
    credit: "4",
    hours: 60,
  },
  {
    code: "NUR209",
    title: "Medical-Surgical Nursing II",
    credit: "8",
    hours: 160,
  },
  {
    code: "NUR210",
    title: "Transition to Practice-Capstone",
    credit: "6",
    hours: 120,
  },
  {
    code: "PSY101*",
    title: "General Psychology **",
    credit: "4",
    hours: 40,
  },
  {
    code: "PSY278*^",
    title: "Human Growth and Development **",
    credit: "4 ***",
    hours: 40,
  },
  {
    code: "SCI115*^",
    title: "Fundamentals of Human Nutrition **",
    credit: "3 ***",
    hours: 30,
  },
  {
    code: "SOC101*",
    title: "Sociology **",
    credit: "4",
    hours: 40,
  },
];

export const ohioAdnIndicators: Indicator[] = [
  {
    sign: "*",
    meaning: "General education course",
  },
  {
    sign: "*^",
    meaning: "General education-related course",
  },
  {
    sign: "**",
    meaning: "Online delivery",
  },
  {
    sign: "***",
    meaning:
      "Awarding of Academic Credit for Licensed Practical Nurses: Prospective students who have completed a Practical Nursing program and hold a current PN license may be awarded up to 23 quarter credits for these courses in the Associate Degree in Nursing program. Prospective students who completed a Practical Nursing program that did not include a course in general informatics may be awarded only 21 quarter credits and will be required to take CMP105 Introduction to Informatics as part of their plan of study.",
  },
  {
    sign: "****",
    meaning: "Blended delivery (lecture online, lab and clinical residential)",
  },
];
