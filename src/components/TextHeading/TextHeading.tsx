import classes from "./TextHeading.module.scss";

type TextHeadingProps = {
  children: string;
};

const TextHeading = ({ children }: TextHeadingProps) => {
  return <h3 className={classes.heading}>{children}</h3>;
};
export default TextHeading;
