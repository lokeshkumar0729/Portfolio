import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import ExperienceItem from "../components/ExperienceItem";
import EducationItem from "../components/EducationItem";
import { experience } from "../data/experience";
import { education } from "../data/education";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <SectionHeading
          label="04 / Background"
          title="Experience"
          mutedTitle=" / Education"
        />

        <div className="experience-grid">
          {/* Experience */}
          <div>
            <div className="timeline-title">
              <span>Experience</span>
              <span>01</span>
            </div>

            {experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ExperienceItem experience={item} />
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <div className="timeline-title">
              <span>Education</span>
              <span>03</span>
            </div>

            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <EducationItem education={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;