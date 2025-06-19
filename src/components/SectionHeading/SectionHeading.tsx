import classes from "./SectionHeading.module.scss";

type HeadingProps = {
  children: string;
};

const SectionHeading = ({ children }: HeadingProps) => {
  return (
    <>
      <h2 className={classes.heading}>{children}</h2>
    </>
  );
};
export default SectionHeading;
