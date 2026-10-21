/*
 * File: app/page.tsx
 * Author: Paulo Massao
 * Date: October 21, 2026
 * This file defines the single page used by the student portal.
 * It receives no props and does not manage state or events.
 * It delegates the application data and interactions to StudentPortal.
 * Its output is the complete portal content inside the shared layout.
 */

import StudentPortal from "@/components/StudentPortal";

// Render the portal as the only page in the application.
const Home = () => {
  return <StudentPortal />;
};

export default Home;
