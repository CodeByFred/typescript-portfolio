import classes from "./AboutSection.module.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const AboutSection = () => {
  return (
    <section className={classes.about} id="about">
      <SectionHeading>About Me</SectionHeading>
      <div className={classes.container}>
        <img
          className={classes.image}
          src="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/headshot.jpg?alt=media&token=b97c0861-9ad1-46e0-97cf-5aabce8f97ad"
          alt="Fred"
        />
        <div className={classes.text_container}>
          <p className={classes.text}>
            My career started with a curiosity about human behaviour, which led me to
            study psychology in the US. That experience sharpened my communication skills
            and gave me a unique way of understanding people, something I now bring into
            the tech world.
          </p>

          <p className={classes.text}>
            After moving to Australia, I studied electrical engineering to broaden my
            interests. It was during a programming course that everything clicked. That
            spark turned into a new career goal, and I shifted gears to pursue an honours
            degree in software engineering.
          </p>

          <p className={classes.text}>
            These days, I’m blending behavioural insights with technical skills to build
            intuitive, human-focused solutions that aim to make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
