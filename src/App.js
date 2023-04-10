import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useGetProjectsQuery} from './store/projectsApi';
import Nav from "./components/nav/Nav";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Project from "./pages/Project/Project";
import Wishlist from "./pages/Wishlist/Wishlist";
import NewsItem from "./pages/NewsItem/NewsItem";
import Career from "./pages/Career/Career";
import Privacy from "./pages/Privacy/Privacy";
import Loader from "./components/UI/loader/Loader";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/scrollToTop.js";
import news from "./helpers/newsList";
import "./styles/reset.css";
import "./styles/darkMode.css";
import "./styles/common.css";

function App() {
    const {data = [], isLoading} = useGetProjectsQuery();

    if (isLoading){
        <Loader />
    } 

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Nav />
                <Routes>
                    <Route path="/" element={<Home projects={data}  />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/news/:id" element={<NewsItem news={news}/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;