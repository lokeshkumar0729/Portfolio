import { ExternalLink } from "lucide-react";

const FeaturedProject = ({ project }) => {
  return (
    <article className="featured-project">
      <div className="project-info">
        <div>
          <span className="project-number">
            {project.number}
          </span>

          <p className="project-category">
            {project.category}
          </p>

          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-tags">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              <span>GitHub</span>
              
            </a>
          )}
        </div>
      </div>

      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default FeaturedProject;