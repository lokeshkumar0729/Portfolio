import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">01 / About</span>

            <h2 className="about-heading">
              Turning ideas into
              <span> reliable software.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about-intro">
              I'm <strong>Lokesh Kumar</strong>, a Computer Science
              Engineering student and Java Full Stack Developer focused
              on building secure and scalable web applications.
            </p>

            <p>
              My primary development stack combines{" "}
              <strong>Java, Spring Boot, Spring Security, React</strong>,
              and relational databases. I enjoy working across the
              application stack — from designing REST APIs and
              authentication systems to creating responsive user
              interfaces.
            </p>

            <p>
              Alongside development, I actively practice Data Structures
              and Algorithms to strengthen my problem-solving and
              programming fundamentals.
            </p>

            <a href="#projects" className="about-link">
              Explore my work
              <ArrowUpRight size={15} />
            </a>
          </motion.div>
        </div>

        {/* Bottom points */}
        <motion.div
          className="about-points"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-point">
            <span>01</span>
            <div>
              <h3>Backend Engineering</h3>
              <p>
                Spring Boot, REST APIs, Spring Security, JWT,
                JPA and Hibernate.
              </p>
            </div>
          </div>

          <div className="about-point">
            <span>02</span>
            <div>
              <h3>Frontend Development</h3>
              <p>
                React applications with responsive interfaces,
                reusable components and modern UI patterns.
              </p>
            </div>
          </div>

          <div className="about-point">
            <span>03</span>
            <div>
              <h3>Problem Solving</h3>
              <p>
                140+ DSA problems covering core data structures,
                algorithms and complexity analysis.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;