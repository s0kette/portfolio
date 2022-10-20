import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import "./styles/App.css";
import Skills from "./components/Skills";
import BackToTop from "./components/subcomponents/BackToTop";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
