import classes from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import HomeSection from "./sections/HomeSection/HomeSection";
import SkillSection from "./sections/SkillSection/SkillSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import { useEffect, useState } from "react";
import { debounce } from "./utils/debounce";
import SectionDivider from "./components/SectionDivider/SectionDivider";
import { ToolsProvider } from "./context/ToolsProvider";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = debounce(() => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "home";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < minDistance) {
          minDistance = distance;
          currentSectionId = section.getAttribute("id") || "home";
        }
      });

      setActiveSection(currentSectionId);
    }, 150);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ToolsProvider>
      <main className={`${classes.main} ${isOpen ? classes.open : classes.close}`}>
        <aside className={classes.sidebar}>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} activeSection={activeSection} />
        </aside>

        <div className={classes.content}>
          <HomeSection />
          <SectionDivider />
          <AboutSection />
          {/* <SectionDivider /> */}
          <SkillSection />
          <SectionDivider />
          <ProjectSection />
          <SectionDivider />
          <ContactSection />
        </div>
      </main>
    </ToolsProvider>
  );
}

export default App;
