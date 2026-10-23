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

## Contributers
Amanuel Tesfatsion & Paulo Massao