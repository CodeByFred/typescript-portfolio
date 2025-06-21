import { useState } from "react";
import classes from "./SocialMedia.module.scss";

type SocialMediaLinkProps = {
  href: string;
  imgLight: string;
  imgDark: string;
};

const SocialMediaLink = ({ href, imgLight, imgDark }: SocialMediaLinkProps) => {
  const [isLight, setIsLight] = useState(true);

  return (
    <a
      className={classes.external_link}
      href={href}
      onMouseEnter={() => setIsLight(false)}
      onMouseLeave={() => setIsLight(true)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {isLight ? (
        <img className={classes.light_icon} src={imgLight} />
      ) : (
        <img className={classes.dark_icon} src={imgDark} />
      )}
    </a>
  );
};
export default SocialMediaLink;
