import { Course } from "../models/course.model";
import { Indicator } from "../models/indicator.model";

export const adnCourses: Course[] = [
  {
    code: "AHP216",
    credit: "6****",
    hours: 80,
    title: "Anatomy and Physiology I",
  },
  {
    code: "AHP217",
    credit: "6",
    hours: 80,
    title: "Anatomy and Physiology II",
  },
  {
    code: "BIO101*",
    credit: "5",
    hours: 60,
    title: "General Biology",
  },
  {
    code: "BIO205*A",
    credit: "4",
    hours: 60,
    title: "Microbiology",
  },
  {
    code: "CMP105*^",
    credit: "2****",
    hours: 20,
    title: "Introduction to Informatics **",
  },
  {
    code: "COM205*",
    credit: "4",
    hours: 40,
    title: "Effective Communication **",
  },
  {
    code: "ENG101*",
    credit: "4",
    hours: 40,
    title: "English Composition **",
  },
  {
    code: "MAT101*",
    credit: "4",
    hours: 40,
    title: "College Mathematics **",
  },
  {
    code: "NUR100",
    credit: "5",
    hours: 50,
    title: "Pharmacology",
  },
  {
    code: "NUR101",
    credit: "4",
    hours: 50,
    title: "Health Assessment",
  },
  {
    code: "NUR104",
    credit: "8****",
    hours: 150,
    title: "Foundations of Nursing",
  },
  {
    code: "NUR201",
    credit: "9",
    hours: 180,
    title: "Medical-Surgical Nursing I",
  },
  {
    code: "NUR202",
    credit: "4",
    hours: 60,
    title: "Maternal-Newborn Nursing ***",
  },
  {
    code: "NUR203",
    credit: "4",
    hours: 60,
    title: "Pediatric Nursing ***",
  },
  {
    code: "NUR204",
    credit: "2",
    hours: 20,
    title: "Leadership and Management **",
  },
  {
    code: "NUR206",
    credit: "2",
    hours: 20,
    title: "Community Nursing Concepts **",
  },
  {
    code: "NUR208",
    credit: "4",
    hours: 60,
    title: "Mental Health Nursing ***",
  },
  {
    code: "NUR209",
    credit: "8",
    hours: 160,
    title: "Medical-Surgical Nursing II",
  },
  {
    code: "NUR210",
    credit: "6",
    hours: 120,
    title: "Transition to Practice-Capstone",
  },
  {
    code: "PSY101*",
    credit: "4",
    hours: 40,
    title: "General Psychology **",
  },
  {
    code: "PSY278*A",
    credit: "4****",
    hours: 40,
    title: "Human Growth and Development **",
  },
  {
    code: "SCI115*A",
    credit: "3****",
    hours: 30,
    title: "Fundamentals of Human Nutrition**",
  },
  {
    code: "SOC101*",
    credit: "4",
    hours: 40,
    title: "Sociology **",
  },
];

export const adnIndicators: Indicator[] = [
  {
    sign: "*",
    meaning: "INDICATES A GENERAL EDUCATION COURSE",
  },
  {
    sign: "*^",
    meaning: "A INDICATES A GENERAL EDUCATION -RELATED COURSE",
  },
  {
    sign: "**",
    meaning: "INDICATES COURSE DELIVERED ONLINE",
  },
  {
    sign: "***",
    meaning:
      "INDICATES BLENDED DELIVERY [LECTURE IS ONLINE AND LAB & CONICAL ARE RESIDENTIAL]",
  },
  {
    sign: "****",
    meaning:
      "Awarding of Academic Credit for Licensed Practical Nurses: Prospective students who have completed a Practical Nursing program and hold a current PN license may be awarded up to 23 quarter credits for these courses in the Associate Degree in Nursing program. Prospective students who completed a Practical Nursing program that did not include a course in goneral informatics may be awarded only 21-quarter credits and will be required to take CMP105 Introduction to informatics as part of their plan of study. Schedule",
  },
];
