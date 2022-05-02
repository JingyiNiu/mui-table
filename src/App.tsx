import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home";
import EmployerPage from "./pages/employers/employers";
import JobsPage from "./pages/jobs/jobs";
import Nav from "./components/nav/nav";

function App() {
  return (
    <div>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/employers" element={<EmployerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
