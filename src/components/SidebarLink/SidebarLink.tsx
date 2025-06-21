import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SidebarLink.module.scss";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type SidebarLinkProps = {
  icon: IconProp;
  label: string;
  href: string;
  isActive: boolean;
  isOpen: boolean;
};

const SidebarLink = ({ icon, label, href, isActive, isOpen }: SidebarLinkProps) => {
  return (
    <a
      className={`${classes.page_link} ${isActive ? classes.active : ""} ${
        isOpen ? classes.open : classes.close
      }`}
      href={`#${href}`}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
      {isOpen ? <span>{label}</span> : ""}
    </a>
  );
};
export default SidebarLink;
