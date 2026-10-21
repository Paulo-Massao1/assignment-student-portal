/*
 * File: components/StudentPortal.tsx
 * Author: Paulo Massao
 * Date: October 21, 2026
 * This component owns the student list and search text as application state.
 * It receives no props and imports the initial records from the data file.
 * It derives filtered students, creates unique ids, and handles add, remove, and clear actions.
 * Its output contains the Overview, Students, and Add a student sections.
 */

"use client";

import { useState } from "react";
import AddStudent from "@/components/AddStudent";
import SearchBox from "@/components/SearchBox";
import StatsPanel from "@/components/StatsPanel";
import StudentList from "@/components/StudentList";
import { students as initialStudents, type Student } from "@/data/students";

// Store the shared state and coordinate all changes to the student list.
const StudentPortal = () => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [searchText, setSearchText] = useState("");

  // Add a student with an id that is unique in the current list.
  const handleAdd = (student: Omit<Student, "id">) => {
    setStudents((currentStudents) => {
      const nextId =
        currentStudents.reduce(
          (highestId, currentStudent) =>
            Math.max(highestId, currentStudent.id),
          0,
        ) + 1;

      return [...currentStudents, { ...student, id: nextId }];
    });
  };

  // Remove one student without changing the existing state array.
  const handleRemove = (id: number) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id),
    );
  };

  // Replace the list with a new empty array.
  const handleClearAll = () => {
    setStudents([]);
  };

  // Derive the visible list from the current students and search text.
  const normalizedSearch = searchText.trim().toLowerCase();
  const filteredStudents = students.filter((student) => {
    const fullName = (
      student.firstName +
      " " +
      student.lastName
    ).toLowerCase();
    return fullName.includes(normalizedSearch);
  });

  // Render the three required sections of the portal.
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <section id="overview" className="scroll-mt-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Student portal
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
          School overview
        </h1>
        <div className="mt-6">
          <StatsPanel students={students} />
        </div>
      </section>

      <section id="students" className="mt-14 scroll-mt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Students</h2>
            <p className="mt-1 text-slate-600">
              Search the current list or remove a student.
            </p>
          </div>
          <button
            className="rounded-lg bg-red-700 px-4 py-2.5 font-semibold text-white transition hover:bg-red-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            type="button"
            onClick={handleClearAll}
            disabled={students.length === 0}
          >
            Clear all
          </button>
        </div>

        <div className="mt-6">
          <SearchBox
            searchText={searchText}
            onSearchChange={setSearchText}
          />
        </div>

        <div className="mt-6">
          <StudentList
            students={filteredStudents}
            onRemove={handleRemove}
          />
        </div>
      </section>

      <section id="add-student" className="mt-14 scroll-mt-6">
        <h2 className="text-2xl font-bold text-slate-900">Add a student</h2>
        <p className="mt-1 text-slate-600">
          Enter the student information below.
        </p>
        <div className="mt-6">
          <AddStudent onAdd={handleAdd} />
        </div>
      </section>
    </main>
  );
};

export default StudentPortal;
