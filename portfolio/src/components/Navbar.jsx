import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import useScrollSpy from "../hooks/useScrollSpy";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.href.substring(1));
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          LK<span>/</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links" aria-label="Primary navigation">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);

            return (
              <a
                key={item.label}
                href={item.href}
                className={`navbar-link ${
                  activeSection === sectionId ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Resume */}
        <a
          href="/resume/Lokesh_Kumar_Resume_2026.pdf"
          target="_blank"
          rel="noreferrer"
          className="navbar-resume"
        >
          Resume
          <ArrowUpRight size={14} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`navbar-mobile ${isOpen ? "open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className={activeSection === sectionId ? "mobile-active" : ""}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} />
              </a>
            );
          })}

          <a
            href="/resume/Lokesh_Kumar_Resume_2026.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={handleLinkClick}
          >
            <span>Resume</span>
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
