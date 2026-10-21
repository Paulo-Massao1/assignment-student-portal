/*
 * File: components/Navbar.tsx
 * Author: Paulo Massao
 * Date: October 21, 2026
 * This component displays the school name and the portal navigation.
 * It does not receive props or manage state.
 * Each link points to one of the three sections on the single page.
 * Its output is the navigation bar shown at the top of the application.
 */

// Render the school name and links to each portal section.
const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        aria-label="Main navigation"
      >
        <p className="text-lg font-bold">New Generation High School</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
          <a className="hover:text-blue-300" href="#overview">
            Overview
          </a>
          <a className="hover:text-blue-300" href="#students">
            Students
          </a>
          <a className="hover:text-blue-300" href="#add-student">
            Add a student
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
