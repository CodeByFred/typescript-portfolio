import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeSection from "./sections/HomeSection/HomeSection";
import SkillSection from "./sections/SkillSection/SkillSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import ContactSection from "./sections/ContactSection/ContactSection";

function App() {
  return (
    <main>
      <Sidebar />
      <HomeSection />
      <SkillSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}

export default App;
