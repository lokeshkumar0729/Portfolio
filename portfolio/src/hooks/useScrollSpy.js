import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0] || "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      let currentSection = sectionIds[0];

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveId(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds.join("|")]);

  return activeId;
};

export default useScrollSpy;