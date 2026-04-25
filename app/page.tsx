import Image from "next/image";
import Script from "next/script";
import { DeviceCarousel } from "@/components/device-carousel";
import { SectionHeading } from "@/components/section-heading";
import { portfolioData, type Project } from "@/lib/portfolio-data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.person.name,
  jobTitle: portfolioData.person.title,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Perinthalmanna",
    addressRegion: "Kerala",
    addressCountry: "India",
  },
  email: portfolioData.person.email,
  telephone: portfolioData.person.phone,
  sameAs: [
    portfolioData.person.links.github,
    portfolioData.person.links.linkedin,
    portfolioData.person.links.website,
  ],
  knowsAbout: portfolioData.skills.flatMap((group) => group.items),
};

export default function HomePage() {
  return (
    <main id="content">
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker-row">
              <span className="availability-pill">Open to Work — Flutter Developer</span>
            </div>

            <h1 className="hero-title">
              <span className="text-gradient">{portfolioData.person.name}</span>
              <br />
              {portfolioData.person.title}
            </h1>

            <p className="hero-lead">
              {portfolioData.person.introduction}
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Work
              </a>
              <a
                className="button button-secondary"
                href={portfolioData.person.links.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              <a className="button button-tertiary" href="#contact">
                Get in Touch
              </a>
            </div>

            <div className="hero-mini-grid">
              <div className="hero-mini-card">
                <span>Apps Shipped</span>
                <strong>4</strong>
              </div>
              <div className="hero-mini-card">
                <span>Backend Platforms</span>
                <strong>2+</strong>
              </div>
              <div className="hero-mini-card">
                <span>Immediate Joiner</span>
                <strong>Now</strong>
              </div>
            </div>
          </div>

          <aside className="hero-visual">
            <div className="hero-profile-wrapper">
              <div className="hero-profile-image">
                <Image
                  src="/assets/logo_cv.png"
                  alt="Mohammed Dilshad P - Flutter Developer"
                  width={400}
                  height={500}
                  priority
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="shell section" id="skills">
        <SectionHeading
          eyebrow="Toolkit"
          title="Core Technologies"
          description="A specialized stack for high-performance mobile application development."
        />

        <div className="skills-grid">
          {portfolioData.skills.map((group) => (
            <article className="skill-card" key={group.category}>
              <h3>{group.category}</h3>
              <ul className="skill-pills">
                {group.items.map((item) => (
                  <li key={item} className="skill-pill">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="tech-showcase">
          {portfolioData.featuredTech.map((tech) => (
            <div className="tech-card" key={tech.name}>
              <div className="tech-icon">
                <Image
                  src={tech.icon}
                  alt={`${tech.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="shell section" id="projects">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
        />

        <div className="project-stack">
          {portfolioData.projects.map((project, index) => (
            <ProjectShowcase key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="shell section" id="experience">
        <SectionHeading
          eyebrow="Track Record"
          title="Background"
          description="A professional journey of continuous learning and successful project shipping."
        />

        <div className="background-grid">
          <div className="experience-timeline">
            <h3 className="section-subheading">Experience</h3>
            <div className="timeline-items">
              {portfolioData.experience.map((item) => (
                <article className="timeline-item" key={item.role}>
                  <div className="period-badge">{item.period}</div>
                  <div className="timeline-content">
                    <h3>{item.role}</h3>
                    <p className="company-info">{item.company} • {item.location}</p>
                    <ul className="experience-list">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="education-sidebar">
            <h3 className="section-subheading">Education</h3>
            <div className="education-stack">
              {portfolioData.education.map((item) => (
                <article className="education-card" key={item.title}>
                  <div className="education-visual">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="80px"
                    />
                  </div>
                  <div className="education-info">
                    <strong>{item.title}</strong>
                    <span>{item.org}</span>
                    <small>{item.period}</small>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="shell section section-last" id="contact" style={{ marginTop: '4rem' }}>
        <div className="cta-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build premium Flutter experiences that feel finished.</h2>
            <p className="cta-copy">
              I&apos;m open to collaboration on Flutter apps, admin dashboards, backend-connected
              mobile systems, and production-focused product interfaces.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button button-primary" href={`mailto:${portfolioData.person.email}`}>
              Email Me
            </a>
            <a className="button button-secondary" href={`tel:${portfolioData.person.phone}`}>
              Call {portfolioData.person.phone}
            </a>
            <a
              className="button button-tertiary"
              href={portfolioData.person.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="shell site-footer">
        <div className="footer-content">
          <p>© 2026 {portfolioData.person.name}</p>
          <div className="footer-links">
            <a href="https://github.com/mhd-dilshad-p" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="separator">|</span>
            <a href="https://linkedin.com/in/mhd-dilshad-p" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="footer-small">Built with Next.js · Deployed on Vercel</p>
        </div>
      </footer>
    </main>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={`project-showcase ${index % 2 === 1 ? "project-showcase-reverse" : ""}`}
    >
      <div className="project-visual">
        <DeviceCarousel shots={project.gallery} mode="project" />
      </div>

      <div className="project-copy">
        <div className="project-head">
          <div className="project-logo-wrap">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
          <div>
            <p className="project-category">{project.category}</p>
            <h3>{project.name}</h3>
          </div>
        </div>

        <p className="project-summary">{project.summary}</p>
        <p className="project-description">{project.description}</p>

        <ul className="chip-list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="project-columns">
          <div>
            <h4>Highlights</h4>
            <ul className="detail-list">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Objectives</h4>
            <ul className="detail-list">
              {project.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="project-links">
          {project.name === "Adam Travels" ? (
            <div className="private-repo-badge">
              <span className="badge">🔒 Private Repository</span>
              <p className="note"><em>Client project — source code available on request.</em></p>
            </div>
          ) : (
            project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))
          )}
          {(project.name === "FuelDost" || project.name === "NaDodi") && (
            <div className="download-apk-wrapper">
              <a href="#" className="download-apk-btn">
                Download APK
              </a>
              <span className="apk-tooltip">Coming Soon</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
