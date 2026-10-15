import React, { useEffect, useState } from "react";
import { profile } from "./data/profile.js";

const navItems = [
  { href: "#origin-heading", sectionId: "origin", label: "Origin story" },
  { href: "#files-heading", sectionId: "case-files", label: "Case files" },
  { href: "#skills-heading", sectionId: "utility-belt", label: "Utility belt" },
  { href: "#training-heading", sectionId: "training", label: "Training grounds" },
  { href: "#contact-heading", sectionId: "contact", label: "Call signal" },
];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow-icon arrow-icon--diagonal" : "arrow-icon"}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M3.25 8h9.5M8.25 3.5l4.5 4.5-4.5 4.5" />
    </svg>
  );
}

function SocialIcon({ label }) {
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.77 1.14 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.7v11.6H3.4V9Zm6 0h3.5v1.6h.05A3.85 3.85 0 0 1 16.4 8.7c3.75 0 4.45 2.46 4.45 5.66v6.24h-3.7v-5.53c0-1.32-.02-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92v5.63H9.4V9Z" />
      </svg>
    );
  }

  if (label === "LeetCode") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m14.6 2.5-7.1 7.1a5.25 5.25 0 0 0 0 7.42l1.35 1.35a5.25 5.25 0 0 0 7.42 0l4.1-4.1-1.63-1.63-4.1 4.1a2.95 2.95 0 0 1-4.16 0l-1.35-1.35a2.95 2.95 0 0 1 0-4.16l7.1-7.1-1.62-1.63Z" />
        <path d="M10.05 11.05h9.7v2.3h-9.7zM12.45 3.3l1.63-1.63 1.78 1.78-1.63 1.63z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.24l-4.89-7.12L5.85 22H2.7l7.25-8.28L2.3 2h6.4l4.42 6.56L18.9 2Zm-1.1 17.9h1.73L7.78 3.98H5.92L17.8 19.9Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.7 2.8h2.8l1.4 4.5-1.8 1.8a15.3 15.3 0 0 0 5.8 5.8l1.8-1.8 4.5 1.4v2.8a2 2 0 0 1-2.1 2A16.8 16.8 0 0 1 4.7 4.9a2 2 0 0 1 2-2.1Z" />
    </svg>
  );
}

function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links${compact ? " social-links--compact" : ""}`}>
      {profile.socialLinks.map((link) =>
        link.href ? (
          <a
            className="social-link"
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <span className="social-link__mark" aria-hidden="true"><SocialIcon label={link.label} /></span>
            {!compact && <span>{link.label}</span>}
            {!compact && <ArrowIcon diagonal />}
          </a>
        ) : (
          <span
            className="social-link social-link--unavailable"
            key={link.label}
            aria-label={`${link.label} link not configured`}
            title={`${link.label} URL not provided`}
          >
            <span className="social-link__mark" aria-hidden="true"><SocialIcon label={link.label} /></span>
            {!compact && <span>{link.label}</span>}
          </span>
        ),
      )}
    </div>
  );
}

function SectionHeading({ eyebrow, title, plainLabel, number, id, anchorId }) {
  return (
    <div className="section-heading" id={anchorId}>
      <div className="section-heading__index">
        <span>{number}</span>
        <span className="section-heading__rule" />
        <span>{eyebrow}</span>
      </div>
      <h2 id={id}>
        {title} <span className="section-heading__plain">/ {plainLabel}</span>
      </h2>
    </div>
  );
}

function Header({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Sanshay Patiyal, home">
        <span className="brand__text">SANS<span>HAY</span></span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        <span />
        <span />
      </button>
      <nav
        className={`primary-nav${menuOpen ? " primary-nav--open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <a
            href={item.href}
            key={item.href}
            className={activeSection === item.sectionId ? "is-active" : ""}
            aria-current={activeSection === item.sectionId ? "location" : undefined}
            onClick={() => {
              onNavigate(item.sectionId);
              setMenuOpen(false);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      {profile.resumeHref ? (
        <a className="header-resume" href={profile.resumeHref} target="_blank" rel="noreferrer">
          View resume <ArrowIcon diagonal />
        </a>
      ) : (
        <span className="header-resume header-resume--pending" title="Resume PDF not provided">
          Resume <span className="header-resume__dot" aria-hidden="true" />
        </span>
      )}
    </header>
  );
}

function Skyline() {
  return (
    <div className="skyline" aria-hidden="true">
      <div className="skyline__beam" />
      <svg className="skyline__illustration" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="facade" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#503328" />
            <stop offset=".5" stopColor="#221713" />
            <stop offset="1" stopColor="#0b0a0a" />
          </linearGradient>
          <radialGradient id="city-glow">
            <stop stopColor="#f2a274" stopOpacity=".3" />
            <stop offset="1" stopColor="#f2a274" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="1120" cy="445" rx="510" ry="365" fill="url(#city-glow)" />
        <path d="M0 900V370l76-42 62 23 0-86 87-61 93 47v139l81 39v471Z" fill="url(#facade)" />
        <path d="M408 900V500l98-45v-97l91-57 84 42v109l87 39v409Z" fill="#17110f" />
        <path d="M764 900V440l90-38 34-151 40 112 103 43v494Z" fill="url(#facade)" />
        <path d="M1013 900V361l99-49 0-95 92-67 84 44v126l93 43v537Z" fill="#1b1310" />
        <path d="M1320 900V330l75-43V177l94-84 111 88v135l83 46v538Z" fill="url(#facade)" />
        <g fill="#d99169" opacity=".28">
          <path d="M63 455h18v47H63zm37 0h18v47h-18zm37 0h18v47h-18zm0 77h18v47h-18zm323-4h19v43h-19zm38 0h19v43h-19zm77-113h19v43h-19zm38 0h19v43h-19zm77 125h19v45h-19zm38 0h19v45h-19zm243-94h18v49h-18zm37 0h18v49h-18zm38 0h18v49h-18zm145-175h18v47h-18zm38 0h18v47h-18zm38 0h18v47h-18zm0 83h18v47h-18z" />
        </g>
        <path d="M0 820 151 761l103 25 152-93 129 58 142-74 114 38 133-72 131 36 126-91 116 27 103-62v347H0Z" fill="#090909" opacity=".86" />
      </svg>
      <div className="skyline__ground" />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Skyline />
      <div className="hero__content page-shell">
        <p className="eyebrow hero__eyebrow"><span className="status-dot" /> CASE FILE 001 · BACKEND ENGINEERING</p>
        <h1 id="hero-title">
          <span>THE SIGNAL</span>
          <span className="hero__name">{profile.name}</span>
        </h1>
        <p className="hero__intro">{profile.objective}</p>
        <div className="hero__actions">
          <a className="button button--signal" href="#files-heading">
            Explore case files <ArrowIcon />
          </a>
          {profile.resumeHref ? (
            <a className="button button--quiet" href={profile.resumeHref} target="_blank" rel="noreferrer">
              View resume <ArrowIcon diagonal />
            </a>
          ) : (
            <span className="button button--quiet button--disabled" aria-disabled="true" title="Resume PDF not provided">
              Resume PDF pending <span className="download-icon" aria-hidden="true">↓</span>
            </span>
          )}
        </div>
        <SocialLinks />
        <div className="hero__scroll" aria-hidden="true"><span /> Scroll to investigate</div>
      </div>
      <div className="hero__coordinates" aria-hidden="true">GOTHAM CITY&nbsp; · &nbsp;EST. 2026</div>
      <div className="hero__edge" aria-hidden="true" />
    </section>
  );
}

function Education() {
  return (
    <section className="section section--origin" id="origin" aria-labelledby="origin-title">
      <div className="page-shell">
        <SectionHeading
          anchorId="origin-heading"
          id="origin-title"
          number="01"
          eyebrow="THE BEGINNING"
          title="Origin story"
          plainLabel="Education"
        />
        <div className="education-layout">
          <div className="education-intro">
            <p className="section-lede">Every great story starts somewhere.</p>
            <p className="muted-copy">
              Building a strong foundation in computer science at Chitkara University.
            </p>
            <div className="education-stat">
              <span className="education-stat__value">9.94</span>
              <span className="education-stat__label">CGPA <i>/ 10</i></span>
              <span className="education-stat__caption">CURRENT ACADEMIC RECORD</span>
            </div>
          </div>
          <div className="timeline">
            {profile.education.map((item, index) => (
              <article className="timeline-item" key={`${item.institution}-${item.qualification}`}>
                <span className="timeline-item__marker" aria-hidden="true" />
                <div className="timeline-item__top">
                  {item.dates && <p className="timeline-item__date">{item.dates}</p>}
                  {index === 0 && <span className="pill pill--current">IN PROGRESS</span>}
                </div>
                <h3>{item.institution}</h3>
                <p className="timeline-item__qualification">{item.qualification}</p>
                <div className="timeline-item__meta">
                  <span>{item.detail}</span>
                  {item.highlight && <span className="timeline-item__grade">{item.highlight}{item.highlightLabel && <small> {item.highlightLabel}</small>}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseFile({ project, index }) {
  return (
    <a
      className="case-file"
      href={project.href}
      aria-label={`Open ${project.name}: ${project.title}`}
    >
      <div className="case-file__topline">
        <span className="case-file__number">FILE&nbsp; 0{index + 1}</span>
        <span className="case-file__year">{project.year}</span>
      </div>
      <div className="case-file__title-row">
        <div>
          <p className="case-file__type">{project.title}</p>
          <h3>{project.name}<span className="case-file__period">.</span></h3>
        </div>
        <span className="case-file__stamp" aria-hidden="true">LIVE</span>
      </div>
      <p className="case-file__summary">{project.summary}</p>
      <ul className="case-file__details">
        {project.bullets.slice(1).map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
      <div className="case-file__footer">
        <span className="case-file__external">
          Visit live project <ArrowIcon diagonal />
        </span>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section className="section section--files" id="case-files" aria-labelledby="files-title">
      <div className="page-shell">
        <SectionHeading
          anchorId="files-heading"
          id="files-title"
          number="02"
          eyebrow="FIELD REPORTS"
          title="Case files"
          plainLabel="Projects"
        />
        <div className="section-intro-row">
          <p className="section-lede">Proof is in the build.</p>
          <p className="muted-copy">Selected projects · 2026</p>
        </div>
        <div className="case-files">
          {profile.projects.map((project, index) => <CaseFile key={project.id} project={project} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section--skills" id="utility-belt" aria-labelledby="skills-title">
      <div className="page-shell">
        <SectionHeading
          anchorId="skills-heading"
          id="skills-title"
          number="03"
          eyebrow="TOOLS OF THE TRADE"
          title="Utility belt"
          plainLabel="Technical Skills"
        />
        <div className="skills-layout">
          <div>
            <p className="section-lede">The right tool for the right challenge.</p>
            <p className="muted-copy">A growing toolkit for building reliable, useful software.</p>
          </div>
          <div className="skill-groups">
            {profile.skills.map((group, index) => (
              <div className="skill-group" key={group.category}>
                <div className="skill-group__heading">
                  <span>0{index + 1}</span>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-group__items">
                  {group.items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section className="section section--training" id="training" aria-labelledby="training-title">
      <div className="page-shell">
        <SectionHeading
          anchorId="training-heading"
          id="training-title"
          number="04"
          eyebrow="ALWAYS IN TRAINING"
          title="Training grounds"
          plainLabel="Learning & Development"
        />
        <div className="section-intro-row">
          <p className="section-lede">The work behind the work.</p>
          <p className="muted-copy">Curiosity is part of the toolkit.</p>
        </div>
        <div className="training-grid">
          {profile.learningTracks.map((track) => (
            <article className="training-card" key={track.number}>
              <span className="training-card__number">{track.number}</span>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <div className="training-card__tags">
                {track.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="page-shell contact-layout">
        <div>
          <SectionHeading
            anchorId="contact-heading"
            id="contact-title"
            number="05"
            eyebrow="YOUR MOVE"
            title="Call signal"
            plainLabel="Contact"
          />
          <p className="contact__headline">Have a good case?</p>
          <p className="muted-copy contact__copy">Open to learning, building, and working on meaningful projects.</p>
          <div className="contact__actions">
            {profile.contact.email ? (
              <a className="button button--signal" href={`mailto:${profile.contact.email}`}>
                Email me <ArrowIcon />
              </a>
            ) : (
              <span className="button button--quiet button--disabled" aria-disabled="true">Email not provided</span>
            )}
          </div>
        </div>
        <aside className="contact-card" aria-label="Contact details">
          <span className="contact-card__label">DIRECT LINE</span>
          <div className="contact-card__row">
            <span className="contact-card__icon" aria-hidden="true">@</span>
            <div>
              <span>Email</span>
              <strong>
                {profile.contact.email ? (
                  <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                ) : "Not provided"}
              </strong>
            </div>
          </div>
          <div className="contact-card__row">
            <span className="contact-card__icon" aria-hidden="true"><PhoneIcon /></span>
            <div>
              <span>Phone</span>
              <strong>
                {profile.contact.phone ? (
                <a href={`tel:${profile.contact.phone.replace(/\D/g, "")}`}>{profile.contact.phone} · Tap to call</a>
                ) : "Not provided"}
              </strong>
            </div>
          </div>
          <div className="contact-card__divider" />
          <SocialLinks compact />
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Built with intent <i aria-hidden="true">·</i> No capes required</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navItems
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter(Boolean);
    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.3;
      let currentSection = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top > activationLine) break;
        currentSection = section.id;
      }
      setActiveSection(currentSection);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main id="main">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
