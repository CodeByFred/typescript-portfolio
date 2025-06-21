import classes from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  // faGraduationCap,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import SidebarLink from "../SidebarLink/SidebarLink";
import SocialMediaLink from "../SocialMediaLink/SocialMediaLink";

type SideBarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
};

const Sidebar = ({ isOpen, setIsOpen, activeSection }: SideBarProps) => {
  return (
    <nav className={`${classes.nav} ${isOpen ? classes.open : classes.close}`}>
      <Button variant="icon" onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} />
        )}
      </Button>
      <div className={classes.container}>
        <div className={classes.page_links}>
          <SidebarLink
            href="home"
            icon={faHouse}
            label="Home"
            isActive={activeSection === "home"}
            isOpen={isOpen}
          />
          <SidebarLink
            href="about"
            icon={faUser}
            label="About Me"
            isActive={activeSection === "about"}
            isOpen={isOpen}
          />
          {/* <SidebarLink
            href="skill"
            icon={faGraduationCap}
            label="Skillset"
            isActive={activeSection === "skill"}
            isOpen={isOpen}
          /> */}
          <SidebarLink
            href="project"
            icon={faBriefcase}
            label="Projects"
            isActive={activeSection === "project"}
            isOpen={isOpen}
          />
          <SidebarLink
            href="contact"
            icon={faEnvelope}
            label="Contact Me"
            isActive={activeSection === "contact"}
            isOpen={isOpen}
          />
        </div>
        <div className={classes.social}>
          <SocialMediaLink
            href="https://www.linkedin.com/in/frederick-jack-599b3537/"
            imgLight="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/LinkedIn.svg?alt=media&token=dc230b1a-2e93-4c5d-9b54-7647d998925c"
            imgDark="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/LinkedIn-Dark.svg?alt=media&token=ebee8e6c-af15-4af0-8dd0-d2f0d298bf7e"
          />
          <SocialMediaLink
            href="https://github.com/CodeByFred"
            imgLight="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/Github-Light.svg?alt=media&token=a916943d-e487-4d65-b59e-567975352c8d"
            imgDark="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/Github-Dark.svg?alt=media&token=f3e4278d-d72c-47d0-ae27-58db19811426"
          />
        </div>
        <Button variant={isOpen ? "cv" : "cv_closed"}>View My CV</Button>
      </div>
      <p className={classes.footer}>© 2025 | CodeByFred | All rights reserved</p>
    </nav>
  );
};
export default Sidebar;
