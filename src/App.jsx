import React, { useState } from "react";
import Home from "./pages/Home";
import OurCourse from "./pages/OurCourse";
import OrganizersPage from "./pages/OrganizersPage";

// Temporary placeholder components for your 2 upcoming pages
function PageThree({ onGoHome }) {
  return (
    <div className="w-full min-h-screen bg-brand-light flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-extrabold text-brand-blue uppercase">
        Upcoming Page Three
      </h1>
      <button
        onClick={onGoHome}
        className="px-4 py-2 bg-brand-white rounded-md font-bold text-brand-blue border border-black/10 cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
}

function PageFour({ onGoHome }) {
  return (
    <div className="w-full min-h-screen bg-brand-light flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-extrabold text-brand-blue uppercase">
        Upcoming Page Four
      </h1>
      <button
        onClick={onGoHome}
        className="px-4 py-2 bg-brand-white rounded-md font-bold text-brand-blue border border-black/10 cursor-pointer"
      >
        Back to Home
      </button>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");

  // Master navigation handler to pass down to headers or buttons
  const navigateTo = (targetView) => {
    setView(targetView);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll back to top on page switch
  };

  return (
    <main className="w-full min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-coral selection:text-white pt-4">
      {/* Dynamic View Switcher */}
      {view === "home" && <Home onNavigate={navigateTo} />}

      {view === "course" && <OurCourse onNavigate={navigateTo} />}

      {view === "organizers" && <OrganizersPage onNavigate={navigateTo} />}

      {view === "page4" && <PageFour onGoHome={() => navigateTo("home")} />}
    </main>
  );
}
