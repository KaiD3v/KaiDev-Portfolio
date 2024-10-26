import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import MiniBlog from "./pages/projects/MiniBlog/MiniBlog";
import ReactGram from "./pages/projects/ReactGram/ReactGram";
import MyRepos from "./pages/projects/MyRepos/MyRepos";
import TasksPlus from "./pages/projects/TasksPlus/TasksPlus";
import WorksPageLayout from "./pages/WorksPageLayout";

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
