/*
 * File: components/StatsPanel.tsx
 * Author: Paulo Massao
 * Date: October 21, 2026
 * This component displays three statistics derived from the complete student list.
 * It receives the current students through a typed props interface.
 * It calculates the total, honour roll count, and grade 12 count on every render.
 * Its output updates automatically whenever StudentPortal changes the list.
 */

import type { Student } from "@/data/students";

// Describe the complete student list supplied by StudentPortal.
export interface StatsPanelProps {
  students: Student[];
}

// Calculate and render the three required school statistics.
const StatsPanel = ({ students }: StatsPanelProps) => {
  const honourRollCount = students.filter(
    (student) => student.average >= 80,
  ).length;
  const gradeTwelveCount = students.filter(
    (student) => student.grade === 12,
  ).length;

  const statistics = [
    { label: "Students", value: students.length },
    { label: "Honour roll", value: honourRollCount },
    { label: "Graduating", value: gradeTwelveCount },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {statistics.map((statistic) => (
        <article
          className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          key={statistic.label}
        >
          <p className="text-sm font-medium text-slate-600">{statistic.label}</p>
          <p className="mt-2 text-3xl font-bold text-slate-900">
            {statistic.value}
          </p>
        </article>
      ))}
    </div>
  );
};

export default StatsPanel;
