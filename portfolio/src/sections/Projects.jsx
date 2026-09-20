import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <SectionHeading
            label="02 / Selected Work"
            title="Projects"
            mutedTitle=" / What I've built"
          />

          <span className="projects-count">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
          >
            <FeaturedProject project={featuredProject} />
          </motion.div>
        )}

        <div className="project-list">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;