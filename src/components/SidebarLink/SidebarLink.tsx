import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SidebarLink.module.scss";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type SidebarLinkProps = {
  icon: IconProp;
  label: string;
  href: string;
};

const SidebarLink = ({ icon, label, href }: SidebarLinkProps) => {
  return (
    <a className={classes.page_link} href={href}>
      <FontAwesomeIcon icon={icon} size="lg" style={{ marginLeft: "1rem" }} />
      <span>{label}</span>
    </a>
  );
};
export default SidebarLink;
