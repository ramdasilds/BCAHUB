import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
import Interview from "./pages/Interview/Interview";
import HRInterview from "./pages/Interview/HRInterview";
import TechnicalInterview from "./pages/Interview/TechnicalInterview";
import Aptitude from "./pages/Interview/Aptitude";
import Resume from "./pages/Interview/Resume";
import GD from "./pages/Interview/GD";
import Roadmap from "./pages/Interview/Roadmap";
import Projects from "./pages/Projects/Projects";
import Internship from "./pages/Internship/Internship";
import Contact from "./pages/Contact/Contact";

import Semester1PYQ from "./pages/PYQ/Semester1PYQ";
import Semester2PYQ from "./pages/PYQ/Semester2PYQ";
import Semester3PYQ from "./pages/PYQ/Semester3PYQ";
import Semester4PYQ from "./pages/PYQ/Semester4PYQ";
import Semester5PYQ from "./pages/PYQ/Semester5PYQ";
import Semester6PYQ from "./pages/PYQ/Semester6PYQ";

import Register from "./pages/Account/Register";
import Login from "./pages/Login/Login";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard"; 

function App() {
  return (
  
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/interview/hr" element={<HRInterview />} />
          <Route path="/interview/technical" element={<TechnicalInterview />} />
          <Route path="/interview/Aptitude" element={<Aptitude />} />
          <Route path="/interview/resume" element={<Resume />} />  
          <Route path="/interview/GD" element={<GD />} />
          <Route path="/interview/Roadmap" element={<Roadmap />} /> 
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/internship" element={<Internship />} />
          <Route path="/contact" element={<Contact />} />

                {/* Previous Year Question Papers */}
          <Route path="/pyq/semester1" element={<Semester1PYQ />} />
          <Route path="/pyq/semester2" element={<Semester2PYQ />} />
          <Route path="/pyq/semester3" element={<Semester3PYQ />} />
          <Route path="/pyq/semester4" element={<Semester4PYQ />} />
          <Route path="/pyq/semester5" element={<Semester5PYQ />} />
          <Route path="/pyq/semester6" element={<Semester6PYQ />} />

               {/* Authentication */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

                {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />  
    
        </Route>

      </Routes>
  
  );
}

export default App;