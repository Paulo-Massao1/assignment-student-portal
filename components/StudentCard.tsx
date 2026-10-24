
/*
 * File: components/StudentCard.tsx
 * Author: Amanuel Tesfatsion
 * Date: October 22, 2026
 * This component displays one student's name and grade.
 * It receives student data and a removal callback through props.
 * It uses local state to show or hide the student's average.
 * It displays an Honour roll badge when the average is 80 or higher.
 * Its output is a student card with details and removal controls.
 */

"use client";

import { useState } from "react";
import type { Student } from "@/data/students";

// Define the props received from StudentList.
interface StudentCardProps {
  student: Student;
  onRemove: (id: number) => void;
}

// Display one student and manage its details visibility.
const StudentCard = ({ student, onRemove }: StudentCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  // Render the student's information and available actions.
  return (
    <article className="rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-lg font-bold text-slate-900">
        {student.firstName} {student.lastName}
      </h3>

      <p className="mt-2 inline-block rounded-md bg-slate-100 px-2 py-1 text-sm font-medium text-slate-600">
        Grade {student.grade}
      </p>

      {/* Toggle the student's average and honour roll status */}
      {showDetails && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3">
          <p className="text-slate-700">
            Average:{" "}
            <span className="font-semibold text-blue-800">
              {student.average}%
            </span>
          </p>

          {student.average >= 80 && (
            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
              Honour roll
            </span>
          )}
        </div>
      )}

      {/* Student actions */}
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
          type="button"
          className="rounded-lg border border-red-300 px-3 py-2 text-sm font-semibold text-red-700 transition-colors hover:border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
          onClick={() => onRemove(student.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default StudentCard;
