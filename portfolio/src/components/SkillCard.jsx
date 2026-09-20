const SkillCard = ({ skillCategory, index }) => {
  return (
    <article className="skill-card">
      <div className="skill-card-title">
        <span>{skillCategory.title}</span>

        <span className="skill-card-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="skill-list">
        {skillCategory.skills.map((skill) => (
          <span className="tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SkillCard;