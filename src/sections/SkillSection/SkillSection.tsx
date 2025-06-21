import classes from "./SkillSection.module.scss";
// import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { useTools } from "../../context/ToolsContext";

const SkillSection = () => {
  const toolsMap = useTools();

  return (
    <section className={classes.skills} /*id="skill"*/>
      {/* <SectionHeading>Skillset</SectionHeading> */}
      <div className={classes.container}>
        <div className={classes.education_container}>
          <h2>Education</h2>
          <div className={classes.education}>
            <div className={classes.university}>
              <h3>Macquarie University</h3>
              <p>Bachelor of Engineering (Honours)</p>
              <p>Software Engineering</p>
            </div>
            <div className={classes.university}>
              <h3>University of Texas at Arlington</h3>
              <p>Bachelor of Arts (B.A)</p>
              <p>Psychology</p>
            </div>
          </div>
        </div>

        <div className={classes.tech_container}>
          <h2>Tech Stack</h2>
          <div className={classes.icons}>
            {Array.from(toolsMap.values()).map((tool) => (
              <div key={tool.id} className={classes.icon}>
                <img src={tool.image} alt={tool.title} title={tool.title} />
                <p>{tool.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillSection;
