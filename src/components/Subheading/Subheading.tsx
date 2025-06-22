import classes from "./Subheading.module.scss";

type SubheadingProps = {
  children: string;
};

const Subheading = ({ children }: SubheadingProps) => {
  return <h2 className={classes.heading}>{children}</h2>;
};
export default Subheading;
