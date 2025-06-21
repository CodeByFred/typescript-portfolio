import type { Project, Tool } from "../../types/types";
import classes from "./ProjectCard.module.scss";

type CardProps = {
  project: Project;
  tools: Tool[];
};

const ProjectCard = ({ project, tools }: CardProps) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={project.image} />
      <div className={classes.body}>
        <h3 className={classes.title}>{project.title}</h3>
        <p className={classes.text}>{project.description}</p>
        <p>Tech Stack</p>
        <div className={classes.tool_container}>
          {tools.map((tool) => (
            <img
              key={tool.title}
              className={classes.tool}
              src={tool.image}
              alt={tool.title}
              title={tool.title}
            />
          ))}
        </div>
        <p>Links</p>
        <div className={classes.git_container}>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img
              className={classes.git}
              src="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/Github-Light.svg?alt=media&token=a916943d-e487-4d65-b59e-567975352c8d"
              alt=""
            />
          </a>
          <a href={project.page} target="_blank" rel="noopener noreferrer">
            <img
              className={classes.git}
              src="https://firebasestorage.googleapis.com/v0/b/fredjackportfolio.firebasestorage.app/o/play-button.svg?alt=media&token=7b95f5a6-f6aa-4890-9957-6bc90dae4260"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
