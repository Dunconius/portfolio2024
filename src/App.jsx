import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";



const App = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<About />} />
                <Route path="experience" element={<Experience />} />
                <Route path="skills" element={<Skills />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
};

export default App;