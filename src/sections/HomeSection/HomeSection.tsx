import classes from "./HomeSection.module.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const HomeSection = () => {
  return (
    <section className={classes.home} id="home">
      <div className={classes.container}>
        <SectionHeading>
          Hi I'm <span>Fred.</span>
        </SectionHeading>
        <h3>/* Full Stack Software Engineer */</h3>
        <p>{`{I design and develop software that makes things work better}`}</p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/unsplash.jpg?alt=media&token=545a536c-b97a-40f7-bf4d-0721c56b6ced"
          alt="screen"
        />
      </div>
    </section>
  );
};
export default HomeSection;
