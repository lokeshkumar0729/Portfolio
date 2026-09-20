import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <SectionHeading
            label="03 / Technical Stack"
            title="Skills"
            mutedTitle=" / Tools I work with"
          />

          <p className="skills-intro">
            A practical stack focused on building secure backend systems,
            responsive interfaces, and reliable full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >
              <SkillCard
                skillCategory={category}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;