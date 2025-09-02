import { Suspense, lazy } from "react";
import ScrollToTop from "./Components/Scrolltotop/ScrollToTop.jsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Whatsapp from "./Components/Whatsapp/Whatsapp.jsx";

// Lazy load components
const UserForm = lazy(() => import("./Components/Registration/UserForm"));

const Members = lazy(() => import("./Components/Members/Members.jsx"));
const Home = lazy(() => import("./Components/Home/Home"));
const StudentForm = lazy(() =>
  import("./Components/studentRegistration/StudentForm.jsx")
);
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio.jsx"));
const Aimain = lazy(() => import("./Components/Aiacademy/Aimain.jsx"));
const Dm = lazy(() => import("./Components/Aiacademy/Dm.jsx"));
const Ms = lazy(() => import("./Components/Aiacademy/Ms.jsx"));
const Cs = lazy(() => import("./Components/Aiacademy/Cs.jsx"));
const Vfx = lazy(() => import("./Components/Aiacademy/Vfx.jsx"));
const Contact = lazy(() => import("./Components/Contact/Contact.jsx"));
const DM = lazy(() => import("./Components/Service/DM.jsx"));
const Professional = lazy(() =>
  import("./Components/Courses/Professional.jsx")
);
const Basic = lazy(() => import("./Components/Courses/Basic.jsx"));
const Advancedmastery = lazy(() =>
  import("./Components/Courses/Advancedmastery.jsx")
);
const About = lazy(() => import("./Components/About/About.jsx"));
const Advancedvfx = lazy(() => import("./Components/Courses/Advancedvfx.jsx"));
const Backend = lazy(() => import("./Components/Courses/Backenddev.jsx"));
const Beginner = lazy(() => import("./Components/Courses/Beginner.jsx"));
const Frontenddev = lazy(() => import("./Components/Courses/Frontenddev.jsx"));
const Fullstack = lazy(() => import("./Components/Courses/Fullstack.jsx"));
const Icsp = lazy(() => import("./Components/Courses/Icsp.jsx"));
const Intermediate = lazy(() =>
  import("./Components/Courses/Intermediate.jsx")
);
const Launchpad = lazy(() => import("./Components/Courses/Launchpad.jsx"));
const Zerotohero = lazy(() => import("./Components/Courses/Zerotohero.jsx"));
const BE = lazy(() => import("./Components/Service/BE.jsx"));
const Servicemain = lazy(() => import("./Components/Service/Servicemain.jsx"));
const Businessnetworking = lazy(() =>
  import("./Components/Service/Businessnetworking.jsx")
);

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BE" element={<BE />} />
        <Route path="/Aimain" element={<Aimain />} />
        <Route path="/Dm" element={<Dm />} />
        <Route path="/Ms" element={<Ms />} />
        <Route path="/Cs" element={<Cs />} />
        <Route path="/Vfx" element={<Vfx />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/student" element={<StudentForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digitalMarketing" element={<DM />} />
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Professional" element={<Professional />} />
        <Route path="/Advancedmastery" element={<Advancedmastery />} />
        <Route path="/Advancedvfx" element={<Advancedvfx />} />
        <Route path="/Backend" element={<Backend />} />
        <Route path="/Beginner" element={<Beginner />} />
        <Route path="/Frontenddev" element={<Frontenddev />} />
        <Route path="/Fullstack" element={<Fullstack />} />
        <Route path="/Icsp" element={<Icsp />} />
        <Route path="/Intermediate" element={<Intermediate />} />
        <Route path="/Launchpad" element={<Launchpad />} />
        <Route path="/Zerotohero" element={<Zerotohero />} />
        <Route path="/servicemain" element={<Servicemain />} />
        <Route path="/Businessnetworking" element={<Businessnetworking />} />
        <Route path="/Members" element={<Members />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </Router>
  );
}

export default App;
