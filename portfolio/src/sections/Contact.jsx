import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">05 / Contact</span>

          <h2 className="contact-title">
            Let's build
            <br />
            something <span>useful.</span>
          </h2>

          <p className="contact-copy">
            I'm open to software engineering opportunities,
            full-stack development roles, and interesting projects.
          </p>

          <div className="contact-links">
            <a
              href="mailto:lokeshkumar07012914@gmail.com"
              className="contact-email"
            >
              <Mail size={18} />
              <span>lokeshkumar07012914@gmail.com</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="/resume/Lokesh_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact-resume"
            >
              View Resume
              <ArrowUpRight size={15} />
            </a>
          </div>

          <SocialLinks dark />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;