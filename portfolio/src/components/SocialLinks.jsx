import { Mail, Code2 } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const GitHubIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.06A9.1 9.1 0 0 1 12 6.18c.85 0 1.71.12 2.51.36 1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.77 0 3.96-2.35 4.83-4.58 5.09.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.48A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9.2h3.8V21H3.3V9.2Zm6.2 0h3.6v1.6h.05c.5-.95 1.73-1.95 3.56-1.95 3.8 0 4.5 2.5 4.5 5.75V21h-3.8v-5.67c0-1.35-.02-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21H9.5V9.2Z" />
  </svg>
);

const iconMap = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  LeetCode: Code2,
  Email: Mail,
};

const SocialLinks = ({ dark = false }) => {
  return (
    <div className={`social-links ${dark ? "social-links-dark" : ""}`}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.name];

        return (
          <a
            key={social.name}
            href={social.url}
            target={social.name === "Email" ? undefined : "_blank"}
            rel={social.name === "Email" ? undefined : "noreferrer"}
            aria-label={social.name}
          >
            <Icon size={16} />
            <span>{social.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;