/*
 * File: data/students.ts
 * Author: Paulo Massao
 * Date: October 21, 2026
 * This file defines the shared Student interface used throughout the portal.
 * It exports the initial student data that populates the application.
 * Each record includes an id, name, grade, and average.
 * The data includes every grade and multiple grade 12 and honour roll students.
 */

// Define the data structure shared by all student components.
export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: number;
  average: number;
}

// Provide the initial student records displayed by the portal.
export const students: Student[] = [
  {
    id: 1,
    firstName: "Liam",
    lastName: "Carter",
    grade: 9,
    average: 76,
  },
  {
    id: 2,
    firstName: "Sofia",
    lastName: "Martinez",
    grade: 10,
    average: 88,
  },
  {
    id: 3,
    firstName: "Ethan",
    lastName: "Nguyen",
    grade: 11,
    average: 82,
  },
  {
    id: 4,
    firstName: "Zara",
    lastName: "Ahmed",
    grade: 12,
    average: 91,
  },
  {
    id: 5,
    firstName: "Noah",
    lastName: "Williams",
    grade: 12,
    average: 74,
  },
  {
    id: 6,
    firstName: "Maya",
    lastName: "Patel",
    grade: 9,
    average: 85,
  },
  {
    id: 7,
    firstName: "Lucas",
    lastName: "Brown",
    grade: 10,
    average: 69,
  },
  {
    id: 8,
    firstName: "Emma",
    lastName: "Wilson",
    grade: 11,
    average: 79,
  },
];
