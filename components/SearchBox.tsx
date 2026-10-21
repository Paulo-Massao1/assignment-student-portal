/*
 * File: components/SearchBox.tsx
 * Author: Paulo Massao
 * Date: October 21, 2026
 * This component displays the controlled input used to search for students.
 * It receives the current search text and a callback through its props.
 * Each change sends the new text to StudentPortal without storing duplicate state.
 * Its output is a labelled search field for filtering students by name.
 */

"use client";

// Describe the data and event callback supplied by StudentPortal.
export interface SearchBoxProps {
  searchText: string;
  onSearchChange: (value: string) => void;
}

// Render the controlled student search field.
const SearchBox = ({ searchText, onSearchChange }: SearchBoxProps) => {
  return (
    <div className="w-full">
      <label
        className="mb-2 block text-sm font-semibold text-slate-700"
        htmlFor="student-search"
      >
        Search by name
      </label>
      <input
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        id="student-search"
        type="text"
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Enter a first or last name"
      />
    </div>
  );
};

export default SearchBox;
