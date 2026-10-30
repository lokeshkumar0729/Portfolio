import { useState, Fragment } from "react";
import portrait from "./assets/portrait.jpg";
import flashImg from "./assets/flash-sale.jpg";
import emsImg from "./assets/ems-team.jpg";
import { useTheme } from "./hooks/useTheme";
import {
  profile, socials, projects, problemSolving, stackFlow, skillGroups, coreSkills, timeline, certifications, apiConsole, about,
} from "./data/site-data";

const NAV = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

function Console() {
  const [who, setWho] = useState("admin");
  const c = apiConsole.callers[who];
  return (
    <div className="console" aria-label="Flash Sale API access by role">
      <div className="console-head">
        <span>Flash Sale API: who gets in?</span>
        <span className="console-role">role: {c.role}</span>
      </div>
      <div className="console-tabs" role="group" aria-label="Choose a caller">
        {Object.entries(apiConsole.callers).map(([k, v]) => (
          <button key={k} type="button" aria-pressed={who === k}
            className={who === k ? "tab on" : "tab"} onClick={() => setWho(k)}>
            {v.label}
          </button>
        ))}
      </div>
      {c.rows.map((r) => (
        <div className="crow" key={r.m + r.p}>
          <span>{r.m} {r.p}</span>
          <span className={r.s < 300 ? "ok" : r.s === 403 ? "warn" : "bad"}>{r.s} {r.t}</span>
        </div>
      ))}
    </div>
  );
}

function Thumb({ p }) {
  if (p.key === "flash") {
    return (
      <div className="thumb flash">
        <img src={flashImg} alt="Flash Sale storefront with a discount badge and countdown" loading="lazy" />
        <span className="badge">{p.badge}</span>
      </div>
    );
  }
  return (
    <div className="thumb ems photo">
      <img src={emsImg} alt="Three teammates working on laptops and notes" loading="lazy" />
      <div className="ems-copy">
        <div className="thumb-name">{p.name}</div>
        <div className="thumb-tag">{p.tagline}</div>
      </div>
    </div>
  );
}

export default function App() {
  const { theme, toggle } = useTheme();
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState(false);

  const copyEmail = () => {
    const done = () => { setCopied(true); setTimeout(() => setCopied(false), 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(profile.email).then(done).catch(() => {});
  };

  return (
    <>
      <a className="skip" href="#projects">Skip to projects</a>

      <header className="nav">
        <div className="wrap nav-in">
          <a className="logo" href="#top">Lokesh<span>.</span>K</a>
          <nav className="links" aria-label="Sections">
            {NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          </nav>
          <div className="nav-actions">
            <button type="button" className="icon-btn" onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {theme === "dark"
                  ? <g><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></g>
                  : <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />}
              </svg>
            </button>
            <a className="btn dark" href={profile.resumeFile} target="_blank" rel="noreferrer">Resume</a>
            <button type="button" className="icon-btn menu-btn" onClick={() => setMenu((m) => !m)}
              aria-expanded={menu} aria-controls="mobile-menu" aria-label={menu ? "Close menu" : "Open menu"}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {menu ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {menu && (
          <nav className="mobile-menu" id="mobile-menu" aria-label="Sections">
            {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setMenu(false)}>{l}</a>)}
          </nav>
        )}
      </header>

      <main id="top">
        <section className="wrap hero">
          <div className="rise">
            <div className="pill"><span className="dot" />{profile.status}</div>
            <h1>{profile.heroTitle}</h1>
            <p className="lede">{profile.heroLede}</p>
            <div className="cta">
              <a className="btn accent" href="#projects">View projects</a>
              <a className="btn ghost" href={profile.resumeFile} target="_blank" rel="noreferrer">View resume</a>
            </div>
            <div className="social">
              <a href={socials.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={socials.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
              <a href={profile.resumeFile} download={profile.resumeDownloadName}>Download PDF</a>
            </div>
          </div>
          <div className="hero-side rise d2">
            <Console />
            <div className="me">
              <img src={portrait} alt="Portrait of Lokesh Kumar" width="56" height="56" />
              <div><b>{profile.name}</b><br />{profile.location}</div>
            </div>
          </div>
        </section>

        <section className="wrap section" id="about">
          <div className="eyebrow">ABOUT ME</div>
          <h2>The part of software you don't see</h2>
          <div className="about">
            <img className="about-photo" src={portrait} alt="Lokesh Kumar" loading="lazy" />
            <div>
              <div className="about-text">
                {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              <dl className="facts">
                {about.facts.map((f) => (
                  <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="wrap section" id="projects">
          <div className="eyebrow">PROJECTS</div>
          <h2>Two full stack apps, live and deployed</h2>
          <p className="note">The demos run on free hosting, so the first load can take up to a minute to wake up.</p>
          <div className="cards">
            {projects.map((p) => (
              <article className="card" key={p.key}>
                <Thumb p={p} />
                <div className="card-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <ul className="tags" aria-label="Tech stack">
                    {p.stack.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                  <div className="card-links">
                    <a href={p.liveDemo} target="_blank" rel="noreferrer">Live demo</a>
                    <a href={p.source} target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap">
          <div className="banner">
            <div>
              <div className="eyebrow light">PROBLEM SOLVING</div>
              <h2 className="b-title">{problemSolving.headline}</h2>
              <p>{problemSolving.text}</p>
            </div>
            <div className="b-actions">
              <a className="btn white" href={problemSolving.leetcode} target="_blank" rel="noreferrer">LeetCode profile</a>
              <a className="btn outline" href={problemSolving.repo} target="_blank" rel="noreferrer">DSA repo</a>
            </div>
          </div>
        </section>

        <section className="wrap section" id="skills">
          <div className="eyebrow">SKILLS</div>
          <h2>The stack behind my projects</h2>
          <div className="flow" role="list" aria-label="How a request moves through my stack">
            {stackFlow.map((f, i) => (
              <Fragment key={f.name}>
                {i > 0 && <span className="arrow" aria-hidden="true">&rarr;</span>}
                <span role="listitem" className={f.key ? "fnode key" : "fnode"}>{f.name}</span>
              </Fragment>
            ))}
          </div>
          <div className="skill-cols">
            {skillGroups.map((g) => (
              <div key={g.group}>
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((t) => (
                    <li key={t} className={coreSkills.includes(t) ? "core" : undefined}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap section two" id="experience">
          <div>
            <div className="eyebrow">EXPERIENCE AND EDUCATION</div>
            <div className="panel">
              {timeline.map((t, i) => (
                <div className={i ? "tl sep" : "tl"} key={t.title}>
                  <small>{t.when}</small>
                  <b>{t.title}</b>
                  <span>{t.org}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="eyebrow">CERTIFICATIONS</div>
            <ul className="certs">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span className="cert-ic" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                  </span>
                  <span><b>{c.name}</b><small>{c.issuer}</small></span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="wrap" id="contact">
          <div className="cta-band">
            <h2>Let's build something together</h2>
            <p>Open to backend and full stack roles.</p>
            <div className="b-actions center">
              <a className="btn white" href={"mailto:" + profile.email}>{profile.email}</a>
              <button type="button" className="btn outline" onClick={copyEmail}>
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>{profile.name}, {profile.location}</span>
        <span>Built with React and Vite</span>
      </footer>
    </>
  );
}
