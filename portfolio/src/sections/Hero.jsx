import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SocialLinks from "../components/SocialLinks";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        {/* Left side */}
        <div className="hero-content">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Java Full Stack Developer
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Building
            <br />
            <span>digital</span>
            <br />
            experiences.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            I build secure, scalable full-stack applications using
            Java, Spring Boot, React, and modern web technologies.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowUpRight size={15} />
            </a>

            <a href="#contact" className="btn btn-outline">
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Right side */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-image-frame">
            <img
              src="/profile/profile.png"
              alt="Lokesh Kumar"
            />

            <div className="hero-image-label">
              <span>LK</span>
              <span>01 / 01</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom information */}
      <div className="container hero-bottom">
        <div className="hero-meta">
          <span>Based in India</span>
          <span>Available for opportunities</span>
        </div>

        <a href="#about" className="hero-scroll">
          <span>Scroll to explore</span>
          <ArrowDown size={14} />
        </a>

        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;