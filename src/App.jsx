import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import WorksPageLayout from "./pages/WorksPageLayout";
import ProjectsPageLayout from "./pages/ProjectsPageLayout";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleDropDown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <div className="nav-wrapper">
        <Navbar isActive={isActive} handleDropDown={handleDropDown} />
      </div>
      <div className="container">
        <Router>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Projects Routes */}
            <Route path="/projects/:id" element={<ProjectsPageLayout />} />

            {/* Works Routes */}
            <Route path="/works/:id" element={<WorksPageLayout />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
export default App;
