import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";

export const indianaAdnCourses: Course[] = [
  {
    code: "AHP216",
    title: "Anatomy and Physiology I",
    hours: 80,
    credit: "6***",
  },
  {
    code: "AHP217",
    title: "Anatomy and Physiology II",
    hours: 80,
    credit: "6",
  },
  {
    code: "BIO101*^",
    title: "General Biology",
    hours: 60,
    credit: "5",
  },
  {
    code: "BIO205*^",
    title: "Microbiology",
    hours: 60,
    credit: "4",
  },
  {
    code: "CMP105*^",
    title: "Introduction to Informatics **",
    hours: 20,
    credit: "2***",
  },
  {
    code: "COM205*",
    title: "Effective Communication **",
    hours: 40,
    credit: "4",
  },
  {
    code: "ENG101*",
    title: "English Composition **",
    hours: 40,
    credit: "4",
  },
  {
    code: "MAT101*",
    title: "College Mathematics **",
    hours: 40,
    credit: "4",
  },
  {
    code: "NUR100",
    title: "Pharmacology",
    hours: 50,
    credit: "5",
  },
  {
    code: "NUR101",
    title: "Health Assessment",
    hours: 50,
    credit: "4",
  },
  {
    code: "NUR104",
    title: "Foundations of Nursing",
    hours: 150,
    credit: "8***",
  },
  {
    code: "NUR201",
    title: "Medical-Surgical Nursing I",
    hours: 180,
    credit: "9",
  },
  {
    code: "NUR202",
    title: "Maternal-Newborn Nursing",
    hours: 60,
    credit: "4",
  },
  {
    code: "NUR203",
    title: "Pediatric Nursing",
    hours: 60,
    credit: "4",
  },
  {
    code: "NUR204",
    title: "Leadership and Management",
    hours: 20,
    credit: "2",
  },
  {
    code: "NUR206",
    title: "Community Nursing Concepts",
    hours: 20,
    credit: "2",
  },
  {
    code: "NUR208",
    title: "Mental Health Nursing",
    hours: 60,
    credit: "4",
  },
  {
    code: "NUR209",
    title: "Medical-Surgical Nursing II",
    hours: 160,
    credit: "8",
  },
  {
    code: "NUR210",
    title: "Transition to Practice-Capstone",
    hours: 120,
    credit: "6",
  },
  {
    code: "PSY101*",
    title: "General Psychology **",
    hours: 40,
    credit: "4",
  },
  {
    code: "PSY278*^",
    title: "Human Growth and Development **",
    hours: 40,
    credit: "4***",
  },
  {
    code: "SCI115*^",
    title: "Fundamentals of Human Nutrition **",
    hours: 30,
    credit: "3***",
  },
  {
    code: "SOC101*",
    title: "Sociology **",
    hours: 40,
    credit: "4",
  },
];

export const indianaAdnIndicators: Indicator[] = [
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
      "Awarding of Academic Credit for Licensed Practical Nurses: Prospective students who have completed a Practical Nursing program and hold a current PN license may be awarded up to 23 quarter credits for these courses in the Associate Degree in Nursing program. Prospective students who completed a Practical Nursing program that did not include a course in general informatics may be awarded only 21 quarter credits and will be required to take CMP105 Introduction to Informatics as part of their plan of study. The credit awarded for the NUR104 Foundations of Nursing course includes 90 clinical hours.",
  },
];
