import "./App.scss";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection";
import HomeSection from "./components/HomeSection/HomeSection";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import SideNav from "./components/SideNav/SideNav";
import SkillSection from "./components/SkillSection/SkillSection";

function App() {
  return (
    <main>
      <SideNav />
      <HomeSection />
      <SkillSection />
      <AboutSection />
      <ProjectContainer />
      <ContactSection />
    </main>
  );
}

export default App;
