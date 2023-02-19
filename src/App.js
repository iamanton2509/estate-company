import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Project from "./pages/Project/Project";
import Career from "./pages/Career/Career";
import Privacy from "./pages/Privacy/Privacy";
import Footer from "./components/footer/Footer";

import ScrollToTop from "./utils/scrollToTop.js";

import "./styles/reset.css";
import "./styles/darkMode.css";
import "./styles/common.css";

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop />
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/career" element={<Career />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/project/:id" element={<Project />} />
            </Routes>

            <Footer />
        </Router>
    </div>
  );
}

export default App;