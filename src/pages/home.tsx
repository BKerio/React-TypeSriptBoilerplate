import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-white dark:bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          React TS Tailwind
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-32 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
        <h2 className="text-5xl md:text-3xl font-extrabold mb-6 drop-shadow-lg">
          Build Modern Apps Effortlessly
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mb-8 drop-shadow-md">
          A creative React + TypeScript + Tailwind boilerplate to kickstart your projects with style and functionality.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition">
            Learn More
          </button>
        </div>
        <div className="absolute inset-0 bg-white/10 dark:bg-black/20 pointer-events-none animate-pulse-slow"></div>
      </section>

      {/* Cards Section */}
      <section className="py-20 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:scale-105 transform transition-all duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{item}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Card Title {item}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This is a description for card {item}. Tailwind + React makes styling fast and flexible.
            </p>
            <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Learn More
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-12 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Brian Kerio. All rights reserved.
      </footer>
    </div>
  );
};

export default App;