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
      <header className="flex justify-between items-center px-8 py-6 bg-white dark:bg-gray-800 shadow-lg border-b-4 border-blue-700 dark:border-blue-500">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-mono tracking-tight">
          {"<<React TS Tailwind />"}
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition-all font-mono text-sm border-2 border-transparent hover:border-blue-400"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {darkMode ? "[LIGHT]" : "[DARK]"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center py-24 bg-blue-700 dark:bg-slate-800 text-white overflow-hidden">
        {/* ASCII Corner Decorations */}
        <div className="absolute top-4 left-4 text-blue-400/30 dark:text-slate-500/30 font-mono text-xs leading-none hidden md:block select-none">
          <pre>
            {`+----------+
|  REACT   |
|   TS    |
| TAILWIND |
+----------+`}
          </pre>
        </div>
        <div className="absolute bottom-4 right-4 text-blue-400/30 dark:text-slate-500/30 font-mono text-xs leading-none hidden md:block select-none">
          <pre>
            {` /‾‾‾‾‾‾‾‾\\
/  BUILD   \\
|  MODERN  |
|   APPS   |
\\__________/`}
          </pre>
        </div>

        {/* ASCII Divider Top */}
        <div className="mb-8 text-blue-300/60 dark:text-slate-400/40 font-mono text-sm select-none">
          {"╔══════════════════════════════════════╗"}
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg font-mono">
          Build Modern Apps Effortlessly
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-blue-100 dark:text-slate-300">
          A creative React + TypeScript + Tailwind boilerplate to kickstart your projects with style and functionality.
        </p>

        {/* ASCII Arrow */}
        <div className="mb-6 text-blue-300/70 dark:text-slate-500/50 font-mono text-xs select-none">
          <pre>
            {`    ||
    ||
   \\  /
    \\/
`}
          </pre>
        </div>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 bg-white text-blue-700 font-bold rounded hover:bg-gray-100 transition font-mono border-b-4 border-gray-300 active:border-b-0 active:translate-y-1">
            [ GET STARTED ]
          </button>
          <button className="px-6 py-3 border-2 border-white font-bold rounded hover:bg-white hover:text-blue-700 transition font-mono">
            [ LEARN MORE ]
          </button>
        </div>

        {/* ASCII Divider Bottom */}
        <div className="mt-8 text-blue-300/60 dark:text-slate-400/40 font-mono text-sm select-none">
          {"╚══════════════════════════════════════╝"}
        </div>
      </section>

      {/* ASCII Separator */}
      <div className="bg-gray-100 dark:bg-gray-900 py-4 overflow-hidden">
        <div className="text-center text-gray-400 dark:text-gray-600 font-mono text-xs tracking-[0.3em] select-none">
          {"≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡"}
        </div>
      </div>

      {/* Cards Section */}
      <section className="py-16 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-slate-700 rounded flex items-center justify-center mb-4 border-2 border-blue-300 dark:border-slate-600">
              <span className="text-blue-700 dark:text-blue-400 font-bold text-lg font-mono">
                [{item}]
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white font-mono">
              Card Title {item}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
              This is a description for card {item}. Tailwind + React makes styling fast and flexible.
            </p>
            <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition font-mono text-sm">
              {"[ Learn More > ]"}
            </button>
          </div>
        ))}
      </section>

      {/* ASCII Separator */}
      <div className="bg-gray-100 dark:bg-gray-900 py-4 overflow-hidden">
        <div className="text-center text-gray-400 dark:text-gray-600 font-mono text-xs tracking-[0.3em] select-none">
          {"────────────────────────────────────────────────────────────────────────────────────────"}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-t-4 border-gray-200 dark:border-gray-700">
        <div className="font-mono text-xs text-gray-400 dark:text-gray-600 mb-2 select-none">
          {"+----------------------------------+"}
        </div>
        <p className="font-mono text-sm">
          © {new Date().getFullYear()} Brian Kerio. All rights reserved.
        </p>
        <div className="font-mono text-xs text-gray-400 dark:text-gray-600 mt-2 select-none">
          {"+----------------------------------+"}
        </div>
      </footer>
    </div>
  );
};

export default App;