import classes from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faGraduationCap,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "../Button/Button";
import SidebarLink from "../SidebarLink/SidebarLink";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className={classes.sidenav}>
      <nav className={`${classes.nav} `}>
        <Button variant="transparent">
          <a className={classes.open_button} onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <FontAwesomeIcon icon={faChevronLeft} />
            ) : (
              <FontAwesomeIcon icon={faChevronRight} />
            )}
          </a>
        </Button>

        <div className={classes.container}>
          <div className={classes.page_links}>
            <SidebarLink href="home" icon={faHouse} label="Home" />
            <SidebarLink href="about" icon={faUser} label="About Me" />
            <SidebarLink href="skill" icon={faGraduationCap} label="Skillset" />
            <SidebarLink href="project" icon={faBriefcase} label="Projects" />
            <SidebarLink href="contact" icon={faEnvelope} label="Contact Me" />
          </div>
          <div className={classes.nav_box}>
            {/* <a
              className="nav__link-external"
              href="https://www.linkedin.com/in/frederick-jack-599b3537/"
            >
              <img
                class="nav__icon"
                id="linkedin"
                src="./assets/icons/LinkedIn.svg"
                alt="linkedin"
              />
              <img
                class="nav__icon"
                id="linkedin--dark"
                src="./assets/icons/LinkedIn-Dark.svg"
                alt="linkedin-light"
              />
            </a>
            <a class="nav__link-external" href="https://github.com/CodeByFred">
              <img
                class="nav__icon"
                id="github"
                src="./assets/icons/Github-Light.svg"
                alt="github"
              />
              <img
                class="nav__icon"
                id="github--dark"
                src="./assets/icons/Github-Dark.svg"
                alt="github-dark"
              />
            </a> */}
          </div>
          <button>View My CV</button>
        </div>
        <p className={classes.footer}>© 2025 | CodeByFred | All rights reserved</p>
      </nav>
    </aside>
  );
};
export default Sidebar;
