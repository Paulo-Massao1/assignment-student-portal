# New Generation High School — Student Portal

## Project Overview

This project is a single-page student portal built with Next.js, React, TypeScript, and Tailwind CSS. It allows school administrators to view student information, search for students, view school statistics, add students, and remove students.

## Technologies Used

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Git and GitHub
- Vercel

## Features

- **Navbar:** Navigate to the Overview, Students, and Add a Student sections.
- **Statistics:** Display total students, honour roll students, and Grade 12 students.
- **Search:** Filter students by first or last name, regardless of capitalization.
- **Student Cards:** Display student names and grades.
- **Student Details:** Show student averages and an Honour roll badge for averages of 80 or higher.
- **Add Student:** Add students using four controlled inputs.
- **Remove Student:** Remove individual students from the list.
- **Clear All:** Remove all students from the current list.
- **Responsive Design:** Display student cards in a responsive grid using Tailwind CSS.

## Project Structure

```text
app/
  layout.tsx
  page.tsx
components/
  AddStudent.tsx
  Footer.tsx
  Navbar.tsx
  SearchBox.tsx
  StatsPanel.tsx
  StudentCard.tsx
  StudentList.tsx
  StudentPortal.tsx
data/
  students.ts
```

## Testing Checklist

| # | Test | Expected Result | Result |

| 1 | Open the application. | All initial students appear, and statistics match the data. | [Pass] |
| 2 | Show and hide student details. | The average and applicable Honour roll badge appear and disappear independently. | [Pass] |
| 3 | Remove a Grade 12 student. | The student and student/graduating counts decrease by one. | [Pass] |
| 4 | Search for `AHMED`, then clear the search. | Matching students appear, and clearing the search restores the list. | [Pass] |
| 5 | Search for `zzz`. | The no-students message appears, and statistics remain unchanged. | [Pass] |
| 6 | Attempt to add a student with an empty first name. | No student is added. | [Pass] |
| 7 | Add a student with all four inputs completed. | The student appears, statistics update, names clear, grade resets to 9, and average resets to 70. | [Pass] |
| 8 | Click Clear all. | The list becomes empty, and all statistics become zero. | [Pass] |
| 9 | Resize the browser to phone width. | Cards stack in one column without horizontal scrolling. | [Pass] |
| 10 | Click each Navbar link. | The page jumps to the corresponding section. | [Pass] |

## Contributers
Amanuel Tesfatsion | Footer, StudentCard, AddStudent, StudentList, Testing
Paulo Massao       | StatsPanel, SearchBox, Navbar, StudentPortal, Testing