
/*
 * File: components/StudentList.tsx
 * Author: Amanuel Tesfatsion
 * Date: October 22, 2026
 * This component displays the list of students received through props.
 * It receives an onRemove callback to pass to individual student cards.
 * It uses map() to create a StudentCard for every student.
 * Each card receives a unique key based on the student's id.
 * If the list is empty, it displays a message instead.
 */

import type { Student } from "@/data/students";
import StudentCard from "@/components/StudentCard";

interface StudentListProps {
  students: Student[];
  onRemove: (id: number) => void;
}

// Render student cards or an empty-list message.
const StudentList = ({ students, onRemove }: StudentListProps) => {
  // Handle the case where no students match the search.
  if (students.length === 0) {
    return (
      <p className="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-600">
        No students found.
      </p>
    );
  }

  // Display each student in a responsive grid.
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default StudentList;
