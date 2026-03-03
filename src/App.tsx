import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import Home from "@/pages/home";


function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;