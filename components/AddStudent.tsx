
/*
 * File: components/AddStudent.tsx
 * Author: Amanuel Tesfatsion
 * Date: October 23, 2026
 * This component displays inputs for adding a student.
 * It receives an onAdd callback through its props.
 * Local state controls the four input values.
 * Empty first or last names prevent a student from being added.
 * After a successful addition, all inputs return to their starting values.
 */

"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

// Define the callback expected from StudentPortal.
interface AddStudentProps {
  onAdd: (student: Omit<Student, "id">) => void;
}

// Display and manage the student input fields.
const AddStudent = ({ onAdd }: AddStudentProps) => {
  // Store each controlled input's value.
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(9);
  const [average, setAverage] = useState(70);

  // Validate the names and request that the parent add the student.
  const handleAdd = () => {
    if (!firstName.trim() || !lastName.trim()) {
      return;
    }

    onAdd({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      grade,
      average,
    });

    // Reset inputs after adding the student.
    setFirstName("");
    setLastName("");
    setGrade(9);
    setAverage(70);
  };

  // Render the four controlled inputs and Add student button.
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* First name */}
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            First name
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            placeholder="Enter first name"
          />
        </div>

        {/* Last name */}
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            placeholder="Enter last name"
          />
        </div>

        {/* Grade */}
        <div>
          <label
            htmlFor="grade"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Grade
          </label>
          <select
            id="grade"
            value={grade}
            onChange={(event) => setGrade(Number(event.target.value))}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2"
          >
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </select>
        </div>

        {/* Average */}
        <div>
          <label
            htmlFor="average"
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            Average
          </label>
          <input
            id="average"
            type="number"
            min={0}
            max={100}
            value={average}
            onChange={(event) => setAverage(Number(event.target.value))}
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
          />
        </div>
      </div>

      {/* Add student */}
      <button
        type="button"
        onClick={handleAdd}
        className="mt-5 rounded-lg bg-blue-700 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-800"
      >
        Add student
      </button>
    </section>
  );
};

export default AddStudent;
