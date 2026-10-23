
/*
 * File: components/Footer.tsx
 * Author: Amanuel Tesfatsion
 * Date: October 23, 2026
 * This component displays school info
 * It receives no props and does not use state or event handlers.
 * It presents the school name, address, phone number, and email.
 * Its output is a footer shared across the application.
 */

// Display the school's contact information.
const Footer = () => {
  return (
    <footer className="mt-16 w-full border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h2 className="text-lg font-bold text-slate-900">
          New Generation High School
        </h2>

        <address className="mt-3 space-y-1 text-sm not-italic text-slate-600">
          <p>123 School Avenue, Calgary, AB</p>
          <p>Phone: (403) 555-0100</p>
          <p>
            Email: info@newgenerationhighschool.example
          </p>
        </address>

        <p className="mt-5 text-xs text-slate-500">
          © 2026 New Generation High School
        </p>
      </div>
    </footer>
  );
};

export default Footer;
