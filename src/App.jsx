import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Template />}>
                <Route index element={<HomePage />} />
                {/* <Route path="about" element={<AboutPage />} />
                <Route path="experience" element={<ExperiencePage />} />
                <Route path="skills" element={<SkillsPage />} />
                <Route path="projects" element={<ProjectPage />} />
                <Route path="contact" element={<ContactPage />} /> */}
            </Route>
        </Routes>
    );
};

export default App;