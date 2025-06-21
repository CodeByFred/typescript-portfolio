import classes from "./ProjectSection.module.scss";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import { getAllProjects } from "../../service/projectsService";
import type { Project, Tool } from "../../types/types";
import { useTools } from "../../context/ToolsContext";

const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const toolsMap = useTools();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getAllProjects();
      if (data) {
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className={classes.section} id="project">
      <SectionHeading>My Projects</SectionHeading>
      <div className={classes.container}>
        {projects?.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            tools={project.tools
              .map((title) => toolsMap.get(title))
              .filter((tool): tool is Tool => !!tool)}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectSection;
