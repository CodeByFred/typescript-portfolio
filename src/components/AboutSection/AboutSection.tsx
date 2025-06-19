import classes from "./AboutSection.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const AboutSection = () => {
  return (
    <section className={classes.about}>
      <SectionHeading>About Me</SectionHeading>
    </section>
  );
};
export default AboutSection;
