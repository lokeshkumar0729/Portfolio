import { ArrowUp } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} Lokesh Kumar
        </span>

        <div className="footer-links">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name === "Email" ? undefined : "_blank"}
              rel={social.name === "Email" ? undefined : "noreferrer"}
            >
              {social.name}
            </a>
          ))}

          <a href="#top" aria-label="Back to top">
            <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;