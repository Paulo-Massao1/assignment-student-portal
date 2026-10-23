
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
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-slate-900">
        {student.firstName} {student.lastName}
      </h3>

      <p className="mt-1 text-sm text-slate-600">
        Grade {student.grade}
      </p>

      {/* Toggle the student's average and honour roll status */}
      {showDetails && (
        <div className="mt-4 border-t border-slate-200 pt-4">
          <p className="text-slate-700">
            Average: <span className="font-semibold">{student.average}%</span>
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
          className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        <button
          type="button"
          className="rounded-lg border border-red-300 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
          onClick={() => onRemove(student.id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default StudentCard;

