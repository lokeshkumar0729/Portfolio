const SectionHeading = ({
  label,
  title,
  mutedTitle,
  dark = false,
}) => {
  return (
    <div className={`section-heading-wrapper ${dark ? "section-heading-dark" : ""}`}>
      {label && <span className="section-label">{label}</span>}

      <h2 className="section-heading">
        {title}
        {mutedTitle && (
          <span className="section-heading-muted">{mutedTitle}</span>
        )}
      </h2>
    </div>
  );
};

export default SectionHeading;