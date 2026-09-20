const ExperienceItem = ({ experience }) => {
  return (
    <article className="timeline-item">
      <div className="timeline-header">
        <h3 className="timeline-role">
          {experience.role}
        </h3>

        <span className="timeline-period">
          {experience.period}
        </span>
      </div>

      <p className="timeline-company">
        {experience.company}
      </p>

      <p className="timeline-location">
        {experience.location}
      </p>

      <p className="timeline-description">
        {experience.description}
      </p>

      {experience.achievements?.length > 0 && (
        <ul className="timeline-list">
          {experience.achievements.map((achievement) => (
            <li key={achievement}>
              {achievement}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ExperienceItem;