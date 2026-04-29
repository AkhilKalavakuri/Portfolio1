// ─── App.jsx ──────────────────────────────────────────────────────────────
// RENDERING ONLY — no content lives here.
// All text, projects, skills, blogs, experience, and education
// are imported from /src/data/*.js files.
// ──────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./App.css";

// Data imports — edit these files to update content
import { HERO, CONTACT, ABOUT } from "./data/hero";
import { PROJECTS }             from "./data/projects";
import { SKILLS }               from "./data/skills";
import { BLOGS }                from "./data/blog";
import { EXPERIENCE }           from "./data/experience";
import { EDUCATION }            from "./data/education";

// ─── SHARED PRIMITIVES ────────────────────────────────────────────────────

/** Scroll-triggered fade-in wrapper */
const FadeIn = ({ children, delay = 0, y = 24 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/** Reusable section heading with label + underline bar */
const SectionTitle = ({ label, title, dark = false }) => (
  <FadeIn>
    <div className="section-title-wrapper">
      <div className={`section-title-label${dark ? " dark" : ""}`}>{label}</div>
      <h2 className={`section-title-h2${dark ? " dark" : ""}`}>{title}</h2>
      <div className={`section-title-bar${dark ? " dark" : ""}`} />
    </div>
  </FadeIn>
);

/** Coloured risk badge — bg/color are data-driven, stay inline */
const RiskBadge = ({ level }) => {
  const map = { High: ["#C0392B", "#fff"], Medium: ["#2E6DA4", "#fff"], Low: ["#2D7D46", "#fff"] };
  const [bg, fg] = map[level] ?? ["#E8EDF2", "#0D2545"];
  return (
    <span className="risk-badge" style={{ background: bg, color: fg }}>
      {level} Risk
    </span>
  );
};

// ─── NAVBAR ───────────────────────────────────────────────────────────────

const NAV_LINKS = ["Home", "Projects", "Skills", "Blog", "Experience", "Education", "About", "Contact"];

const NavBar = ({ active }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled ? "#0D2545" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="navbar-inner">
        <span className="navbar-logo">
          {HERO.name.split(" ").map(n => n[0]).join(".")}
        </span>

        <div className="desk-nav">
          {NAV_LINKS.map((l) => (
            <button
              key={l}
              className={`nav-btn${active === l.toLowerCase() ? " active" : ""}`}
              onClick={() => scrollTo(l)}
            >
              {l}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {[0, 1, 2].map(i => <span key={i} className="hamburger-bar" />)}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {NAV_LINKS.map(l => (
              <button key={l} className="mobile-menu-btn" onClick={() => scrollTo(l)}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-inner">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-eyebrow">{HERO.eyebrow}</div>
        <h1 className="hero-name">{HERO.name}</h1>
        <h2 className="hero-title">{HERO.title}</h2>
        <p className="hero-positioning">{HERO.positioning}</p>

        <div className="hero-strengths">
          {HERO.strengths.map(s => (
            <div key={s} className="hero-strength-pill">{s}</div>
          ))}
        </div>

        <div className="hero-ctas">
          <button
            className="btn-primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
          </button>
          <button
            className="btn-outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

// ─── PROJECTS ─────────────────────────────────────────────────────────────

const ProjectCard = ({ p, idx }) => {
  const [open, setOpen] = useState(false);
  const verdictColor = { Approve: "#81C784", Monitor: "#FFD54F", Reject: "#FF8A80" };

  return (
    <FadeIn delay={idx * 0.07}>
      <div
        className="project-card"
        style={{ boxShadow: open ? "0 8px 32px rgba(13,37,69,0.10)" : "0 2px 8px rgba(13,37,69,0.05)" }}
      >
        <div className="project-card-header" onClick={() => setOpen(!open)}>
          <div className="project-card-meta">
            <div className="project-meta-top">
              <span className="project-industry">{p.industry}</span>
              <RiskBadge level={p.riskTag} />
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-insight">{p.insight}</p>
          </div>
          <motion.div
            className="expand-btn"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            +
          </motion.div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="project-body">

                <div className="project-summary">
                  <div className="field-label">Project Summary</div>
                  <p className="project-summary-text">{p.summary}</p>
                </div>
                <div className="project-link">
                  <a href={p.modelUrl} target="blank" className="UrlLink">URL for googlesheets</a>
                </div>

                <div className="project-outcome">
                  <div className="field-label">Quantifiable Outcome</div>
                  <p className="project-outcome-text">{p.outcome}</p>s
                </div>

                <div className="project-tools">
                  <div className="field-label" style={{ marginBottom: 10 }}>Tools & Skills</div>
                  <div className="tools-grid">
                    {p.tools.map(t => <span key={t} className="tool-tag">{t}</span>)}
                  </div>
                </div>

                <div className="credit-insight">
                  <div className="credit-insight-header">
                    <span className="recommendation-label">Lending Recommendation</span>
                    <span
                      className="recommendation-value"
                      style={{ color: verdictColor[p.recommendation] ?? "#fff" }}
                    >
                      {p.recommendation}
                    </span>
                  </div>
                  <div className="key-risks-body">
                    <div className="field-label" style={{ marginBottom: 10 }}>Key Risks</div>
                    {p.keyRisks.map((r, i) => (
                      <div key={i} className="risk-item">
                        <span className="risk-bullet">▸</span>
                        <span className="risk-text">{r}</span>
                      </div>
                    ))}
                    <div className="reasoning-block">
                      <strong>Reasoning: </strong>{p.reasoning}
                    </div>
                    {p.pdfLink && (
                      <div className="pdf-link-wrapper">
                        <a href={p.pdfLink} target="_blank" rel="noopener noreferrer" className="pdf-link">
                          View Full Memo (PDF)
                        </a>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
};

const Projects = () => (
  <section id="projects" className="section-tinted">
    <div className="section-inner section-inner--900">
      <SectionTitle label="Portfolio" title="Credit Analysis Projects" />
      <div className="projects-list">
        {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} idx={i} />)}
      </div>
    </div>
  </section>
);

// ─── SKILLS ───────────────────────────────────────────────────────────────

const Skills = () => (
  <section id="skills" className="section-light">
    <div className="section-inner section-inner--1100">
      <SectionTitle label="Competencies" title="Skills & Expertise" />
      <div className="skills-grid">
        {Object.entries(SKILLS).map(([category, items], ci) => (
          <FadeIn key={category} delay={ci * 0.1}>
            <div className="skill-card">
              <div className="skill-category-label">{category}</div>
              {items.map((s, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-name">{s.name}</div>
                  <div className="skill-detail">{s.detail}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── BLOG ─────────────────────────────────────────────────────────────────

const BlogPost = ({ b, idx }) => {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={idx * 0.1}>
      <div className="blog-post">
        <div className="blog-post-header" onClick={() => setOpen(!open)}>
          <h3 className="blog-title">{b.title}</h3>
          <p className="blog-preview">{b.context.slice(0, 160)}…</p>
          <button className="blog-toggle-btn">{open ? "Collapse ↑" : "Read analysis ↓"}</button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35 }}
              style={{ overflow: "hidden" }}
            >
              <div className="blog-body">
                {[{ label: "Context", text: b.context }, { label: "Analysis", text: b.analysis }].map(({ label, text }) => (
                  <div key={label} className="blog-section">
                    <div className="field-label">{label}</div>
                    <p className="blog-section-text">{text}</p>
                  </div>
                ))}
                <div className="blog-implications">
                  <div className="field-label">Credit Implications</div>
                  <p className="blog-implications-text">{b.implications}</p>
                </div>
                <div className="blog-takeaway">
                  <span className="blog-takeaway-label">Key Takeaway: </span>
                  <span className="blog-takeaway-text">{b.takeaway}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeIn>
  );
};

const Blog = () => (
  <section id="blog" className="section-tinted">
    <div className="section-inner section-inner--800">
      <SectionTitle label="Thought Leadership" title="Credit Market Insights" />
      {BLOGS.map((b, i) => <BlogPost key={i} b={b} idx={i} />)}
    </div>
  </section>
);

// ─── EXPERIENCE ───────────────────────────────────────────────────────────

const Experience = () => (
  <section id="experience" className="section-light">
    <div className="section-inner section-inner--900">
      <SectionTitle label="Career" title="Work Experience" />
      <div className="timeline">
        <div className="timeline-line" />
        {EXPERIENCE.map((e, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-dates">{e.dates}</div>
              <h3 className="timeline-role">{e.role}</h3>
              <div className="timeline-company">{e.company}</div>
              {e.responsibilities.map((r, j) => (
                <div key={j} className="responsibility-item">
                  <span className="resp-bullet">▸</span>
                  <span className="resp-text">{r}</span>
                </div>
              ))}
              <div className="skill-tags">
                {e.skills.map(s => <span key={s} className="skill-tag">{s}</span>)}
              </div>
              <div className="impact-box">
                <strong>Impact: </strong>{e.outcome}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

// ─── EDUCATION ────────────────────────────────────────────────────────────

const Education = () => (
  <section id="education" className="section-tinted">
    <div className="section-inner section-inner--900">
      <SectionTitle label="Academic Background" title="Education" />
      {EDUCATION.map((e, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <div className="edu-card">
            <div className="edu-card-header">
              <div>
                <h3 className="edu-degree">{e.degree}</h3>
                <div className="edu-institution">{e.institution}</div>
              </div>
              <div className="edu-meta-right">
                <div className="edu-dates">{e.dates}</div>
                <div className="edu-grade">{e.grade}</div>
              </div>
            </div>

            <div className="edu-modules">
              <div className="field-label">Key Modules</div>
              <div className="modules-grid">
                {e.modules.map(m => <span key={m} className="module-tag">{m}</span>)}
              </div>
            </div>

            {e.dissertation && (
              <div className="dissertation">
                <strong>Dissertation: </strong>{e.dissertation}
              </div>
            )}

            {e.certifications?.length > 0 && (
              <div className="edu-certifications">
                <div className="field-label">Certifications</div>
                {e.certifications.map((cert, ci) => (
                  <div key={ci} className="cert-item">
                    <span className="cert-check">✓</span>
                    <span className="cert-text">{cert}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

// ─── ABOUT ────────────────────────────────────────────────────────────────

const About = () => (
  <section id="about" className="section-dark">
    <div className="section-inner section-inner--800">
      <SectionTitle label="About" title="Who I Am" dark />
      {ABOUT.map((item, i) => (
        <FadeIn key={i} delay={i * 0.08}>
          <div className="about-item">
            <div className="about-label">{item.label}</div>
            <p className="about-text">{item.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

// ─── CONTACT ──────────────────────────────────────────────────────────────

const Contact = () => (
  <section id="contact" className="section-light">
    <div className="section-inner section-inner--700">
      <SectionTitle label="Get in Touch" title="Contact" />
      <FadeIn delay={0.1}>
        <div className="contact-card">
          <p className="contact-cta-quote">"{CONTACT.cta}"</p>
          <div className="contact-links">
            <a href={`mailto:${CONTACT.email}`} className="contact-link">
              <span className="contact-link-icon">✉</span> {CONTACT.email}
            </a>
            <a href={CONTACT.linkedinUrl} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon--bold">in</span> {CONTACT.linkedin}
            </a>
          </div>
          <div className="contact-download">
            <a href={CONTACT.cvUrl} className="cv-btn">Download CV</a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

// ─── FOOTER ───────────────────────────────────────────────────────────────

const Footer = () => (
  <footer className="footer">
    <p className="footer-text">
      © {new Date().getFullYear()} {HERO.name} · {HERO.title}
    </p>
  </footer>
);

// ─── ACTIVE SECTION TRACKER ───────────────────────────────────────────────

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.toLowerCase());
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return active;
}

// ─── ROOT APP ─────────────────────────────────────────────────────────────

export default function App() {
  const active = useActiveSection();

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400&display=swap";
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <NavBar active={active} />
      <Hero />
      <Projects />
      <Skills />
      <Blog />
      <Experience />
      <Education />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
