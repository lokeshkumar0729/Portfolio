const EducationItem = ({ education }) => {
  return (
    <article className="timeline-item">
      <div className="timeline-header">
        <h3 className="timeline-role">
          {education.degree}
        </h3>

        <span className="timeline-period">
          {education.period}
        </span>
      </div>

      <p className="timeline-company">
        {education.field}
      </p>

      <p className="timeline-location">
        {education.institution} · {education.location}
      </p>

      <p className="timeline-description">
        {education.score}
      </p>
    </article>
  );
};

export default EducationItem;