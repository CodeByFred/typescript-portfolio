import classes from "./HomeSection.module.scss";
import SectionHeading from "../SectionHeading/SectionHeading";

const HomeSection = () => {
  return (
    <section className={classes.home}>
      <SectionHeading>Hi I'm Fred</SectionHeading>
    </section>
  );
};
export default HomeSection;
