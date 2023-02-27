import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/nav/Nav";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Project from "./pages/Project/Project";
import Wishlist from "./pages/Wishlist/Wishlist";
import NewsItem from "./pages/NewsItem/NewsItem";
import Career from "./pages/Career/Career";
import Privacy from "./pages/Privacy/Privacy";

import Footer from "./components/footer/Footer";

import ScrollToTop from "./utils/scrollToTop.js";

import projectsList from "./helpers/projectsList";
import news from "./helpers/newsList";

import "./styles/reset.css";
import "./styles/darkMode.css";
import "./styles/common.css";

function App() {
    const [projects, setProjects] = useState(projectsList);
    const [wishlist, setWishlist] = useState([]);

    const addToWishList = (id) => {
        setWishlist((wishlist) => {
            return [
                ...wishlist,
                projects[id]
            ]
        })
    }

    const deleteFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    }

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home projects={projects} setProjects={setProjects} addToWishList={addToWishList} />} />
                    <Route path="/projects" element={<Projects projects={projects} setProjects={setProjects} addToWishList={addToWishList} />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/project/:id" element={<Project projects={projects} setProjects={setProjects} addToWishList={addToWishList}/>} />
                    <Route path="/wishlist" element={<Wishlist wishlist={wishlist} deleteFromWishlist={deleteFromWishlist}/>} />
                    <Route path="/news/:id" element={<NewsItem news={news}/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;