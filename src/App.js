import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import JoinUs from "./Pages/JoinUs";
import Message from "./Pages/Message";
import ProjectDetails from "./Pages/ProjectDetails";
import Projects from "./Pages/Projects";
import NoPage from "./Pages/NoPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/message" element={<Message />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}