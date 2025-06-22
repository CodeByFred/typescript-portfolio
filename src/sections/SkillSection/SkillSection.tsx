import classes from "./SkillSection.module.scss";
// import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useTools } from "../../context/ToolsContext";
import Subheading from "../../components/Subheading/Subheading";
import TextHeading from "../../components/TextHeading/TextHeading";

const SkillSection = () => {
  const toolsMap = useTools();

  return (
    <section className={classes.skills} /*id="skill"*/>
      {/* <SectionHeading>Skillset</SectionHeading> */}
      <div className={classes.container}>
        <div className={classes.third_container}>
          <Subheading>Education</Subheading>
          <div className={classes.education}>
            <div className={classes.group}>
              <TextHeading>Macquarie University</TextHeading>
              <p>Bachelor of Engineering (Honours)</p>
              <p>Software Engineering</p>
            </div>
            <div className={classes.group}>
              <TextHeading>University of Texas at Arlington</TextHeading>
              <p>Bachelor of Arts (B.A)</p>
              <p>Psychology</p>
            </div>
          </div>
        </div>
        <div className={classes.third_container}>
          <Subheading>Tech Stack</Subheading>
          <div className={classes.icons}>
            {Array.from(toolsMap.values()).map((tool) => (
              <div key={tool.id} className={classes.icon}>
                <img src={tool.image} alt={tool.title} title={tool.title} />
                <p>{tool.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.third_container}>
          <Subheading>Certifications</Subheading>
          <div className={classes.group}>
            <TextHeading>_nology</TextHeading>
            <p>Pathway to Tech Program</p>
            <p>Full Stack Engineer Program</p>
          </div>
          <div className={classes.group}>
            <TextHeading>AWS</TextHeading>
            <p>Certified Cloud Practitioner</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillSection;
