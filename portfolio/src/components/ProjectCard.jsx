import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
  const hasGithub =
    project.githubUrl && project.githubUrl !== "#";

  const hasLiveDemo =
    project.liveUrl && project.liveUrl !== "#";

  return (
    <article className="project-row">
      <span className="project-row-number">
        {project.number}
      </span>

      <div className="project-row-info">
        <h3 className="project-row-title">
          {project.title}
        </h3>

        <p className="project-row-category">
          {project.category}
        </p>
      </div>

      <div className="project-row-links">
        {hasLiveDemo && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-row-link"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={14} />
          </a>
        )}

        {hasGithub && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-row-link"
          >
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;