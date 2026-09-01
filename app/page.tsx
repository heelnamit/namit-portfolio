'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Menu,
  X,
  Sparkles,
  Layers3,
  Smartphone,
  Globe2,
  Server,
  Database,
  GitBranch,
  Youtube,
  ArrowDownToLine,
  ArrowDownToLineIcon
} from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    number: '01',
    title: 'Drinkit',
    category: 'Full-stack product concept',
    description:
      'A fast, mobile-first quick-commerce platform concept designed around local-store partnerships, product discovery and a 10–15 minute delivery experience.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    className: 'project-red',
  },
  {
    number: '02',
    title: 'Finance UI',
    category: 'Trading dashboard',
    description:
      'A market-focused dashboard concept designed to make price structure, market data and trading decisions easier to understand and scan.',
    tags: ['React', 'Next.js', 'Data UI', 'UX'],
    className: 'project-blue',
  },
  {
    number: '03',
    title: 'Portfolio System',
    category: 'Personal brand',
    description:
      'A responsive developer portfolio built to communicate technical skills, projects and problem-solving ability clearly to recruiters and potential clients.',
    tags: ['Next.js', 'TypeScript', 'Responsive'],
    className: 'project-white',
  },
];

const skills = [
  [
    '01',
    'React',
    'Component-driven interfaces built with reusable, scalable and maintainable architecture.',
  ],
  [
    '02',
    'Next.js',
    'Modern full-stack React applications with performance-focused architecture and scalable structure.',
  ],
  [
    '03',
    'Node.js',
    'Backend services, APIs and server-side application logic using Node.js.',
  ],
  [
    '04',
    'Express.js',
    'REST APIs and backend services designed around clean and practical architecture.',
  ],
  [
    '05',
    'Postgres / MongoDB',
    'Working with relational and NoSQL databases for application data and backend systems.',
  ],
  [
    '06',
    'TypeScript / JavaScript',
    'Building reliable, scalable applications with modern JavaScript and strongly typed TypeScript.',
  ],
  [
    '07',
    'AI Development Tools',
    'Daily use of Claude Code, GitHub Copilot and AI agents to accelerate development, testing and productivity.',
  ],
  [
    '08',
    'AWS / Cloud',
    'Experience working with AWS fundamentals, cloud-based applications and modern deployment workflows.',
  ],
  [
    '09',
    'HTML / CSS',
    'Strong foundation in HTML and CSS, with experience using SCSS, Bootstrap, Material UI and modern styling techniques to build responsive interfaces.',
  ],
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setOpen(false);
  };

  return (
    <main>
      <div className="grain" />

      {/* NAVIGATION */}
      <header className="nav-wrap">
        <nav className="nav container">
          <button
            className="brand"
            onClick={() => scrollTo('top')}
            aria-label="Go to top"
          >
            N<span>M</span>
          </button>

          <div className={`nav-links ${open ? 'open' : ''}`}>
            {['work', 'skills', 'about', 'contact'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)}>
                {item}
              </button>
            ))}
          </div>

          <button
            className="menu"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          <button
            className="status"
            onClick={() => scrollTo('contact')}
          >
            <i />
            available for opportunities
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="hero container">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Full Stack Developer
          </div>

          <h1>
            I BUILD
            <br />
            <em>DIGITAL</em>
            <br />
            PRODUCTS
            <br />
            THAT WORK<span>.</span>
          </h1>

          <p className="hero-sub">
            I&apos;m <strong>Namit Mahajan</strong>, a Senior Full Stack Developer
            building modern web applications with{' '}
            <strong>
              React, Next.js, Node.js & TypeScript
            </strong>
            .
          </p>

          <div className="actions">
            <button
              className="primary"
              onClick={() => scrollTo('work')}
            >
              View my work
              <ArrowUpRight />
            </button>

            <button
              className="text-link"
              onClick={() => scrollTo('contact')}
            >
              Let&apos;s connect
              <ArrowDownRight />
            </button>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-1" />
          <div className="orbit orbit-2" />

          <div className="code-card">
            <div className="dots">
              <i />
              <i />
              <i />
            </div>

            <div className="code-line">
              <b>const</b> developer = {'{'}
            </div>

            <div className="code-line indent">
              name: <span>&quot;Namit Mahajan&quot;</span>,
            </div>

            <div className="code-line indent">
              role: <span>&quot;Senior Full Stack Developer&quot;</span>,
            </div>

            <div className="code-line indent">
              frontend: [<span>&quot;React&quot;</span>,
            </div>

            <div className="code-line indent2">
              <span>&quot;Next.js&quot;</span>,
            </div>

            <div className="code-line indent2">
              <span>&quot;TypeScript&quot;</span>],
            </div>

            <div className="code-line indent">
              backend: [<span>&quot;Node.js&quot;</span>,
            </div>

            <div className="code-line indent2">
              <span>&quot;Express&quot;</span>],
            </div>

            <div className="code-line indent">
              focus: <span>&quot;building products&quot;</span>
            </div>

            <div className="code-line">{'}'}</div>

            <div className="cursor" />
          </div>

          <div className="hero-label">
            01 — FRONTEND / BACKEND / PRODUCT
          </div>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="marquee">
        <div>
          REACT <span>✦</span> NEXT.JS <span>✦</span> NODE.JS{' '}
          <span>✦</span> TYPESCRIPT <span>✦</span> EXPRESS.JS{' '}
          <span>✦</span> MONGODB <span>✦</span> REACT <span>✦</span>{' '}
          NEXT.JS <span>✦</span> NODE.JS <span>✦</span>
        </div>
      </section>

     {/* EXPERIENCE */}
<section id="work" className="section container">
  <div className="section-head">
    <div>
      <p className="section-kicker">01 / professional journey</p>

      <h2>
        EXPERIENCE
        <br />
        <span>THAT SHAPED HOW I BUILD.</span>
      </h2>
    </div>

    <p className="section-note">
      8+ years of experience building modern web applications,
      enterprise platforms and client-facing solutions across
      frontend, backend and cloud technologies.
    </p>
  </div>

  <div className="project-grid">
    {/* EXPERIENCE 01 */}
    <article className="project project-red">
      <div className="project-top">
        <span>01</span>
        <span>WIPRO · 2018—2021</span>
      </div>

      <div className="project-visual">
      <img src="images/wipro.png" className='project-visual-img'/>
      </div>

      <div className="project-bottom">
        <div>
          <h3>Frontend Foundation</h3>

          <p>
            Started my professional development journey building
            responsive and accessible web applications across
            multiple client projects using HTML, CSS, JavaScript
            and React.
          </p>
        </div>

        <div className="tags">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>SCSS</span>
        </div>
      </div>
    </article>

    {/* EXPERIENCE 02 */}
    <article className="project project-blue">
      <div className="project-top">
        <span>02</span>
        <span>COGNIZANT · 2021—2022</span>
      </div>

      <div className="project-visual">
        <img src="images/cogni.webp" className='project-visual-img'/>
      </div>

      <div className="project-bottom">
        <div>
          <h3>Titan E-commerce Ecosystem</h3>

          <p>
          Worked across multiple e-commerce websites including Titan,
          Tanishq, Mia and Zoya, contributing to frontend development,
          shopping workflows, reusable components and secure user
          authentication.
          </p>
        </div>

        <div className="tags">
          <span>React</span>
          <span>Redux</span>
          <span>OAuth</span>
          <span>Storybook</span>
          <span>GitLab</span>
        </div>
      </div>
    </article>

    {/* EXPERIENCE 03 */}
    <article className="project project-white">
      <div className="project-top">
        <span>03</span>
        <span>T-SYSTEMS · 2022—2024</span>
      </div>

      <div className="project-visual">
      <img src="images/t-logo.jpg" className='project-visual-img'/>
      </div>

      <div className="project-bottom">
        <div>
          <h3>Cloud Migration Platform</h3>

          <p>
            Led frontend architecture for a cloud migration platform,
            building API-driven dashboards, real-time experiences
            and micro-frontend architecture while guiding the
            frontend team and engineering standards.
          </p>
        </div>

        <div className="tags">
          <span>React</span>
          <span>Next.js</span>
          <span>Micro-frontends</span>
          <span>AWS</span>
          <span>REST APIs</span>
        </div>
      </div>
    </article>

    {/* EXPERIENCE 04 */}
    <article className="project project-red">
      <div className="project-top">
        <span>04</span>
        <span>COGNIZANT · 2025—PRESENT</span>
      </div>

      <div className="project-visual">
      <img src="images/cogni.webp" className='project-visual-img'/>
      </div>

      <div className="project-bottom">
        <div>
          <h3>Macy&apos;s + AMEX</h3>

          <p>
            Currently working on enterprise client projects including
            AI-powered chatbot integration for Macy&apos;s and an
            Angular-to-React migration for AMEX using modern
            micro-frontend architecture.
          </p>
        </div>

        <div className="tags">
          <span>React</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>AI</span>
          <span>AWS</span>
          <span>CI/CD</span>
        </div>
      </div>
    </article>
  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="section dark-section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="section-kicker">
                02 / technical skills
              </p>

              <h2>
                MY <span>STACK.</span>
              </h2>
            </div>

            <p className="section-note">
              I work across the frontend and backend to build complete
              web experiences — from interface to API and application
              logic.
            </p>
          </div>

          <div className="skill-grid">
            {skills.map(([n, title, desc]) => (
              <article className="skill" key={n}>
                <span className="skill-no">{n}</span>

                <div className="skill-icon">
                  {n === '01' || n === '09' ? (
                    <Code2 />
                  ) : n === '02' ? (
                    <Globe2 />
                  ) : n === '03' ? (
                    <Server />
                  ) : n === '04' ? (
                    <GitBranch />
                  ) : n === '05' ? (
                    <Database />
                  ) : n === '06' ? (
                    <Layers3 />
                  ) : n === '07' ? (
                    <Sparkles />
                  ) : (
                    <Github />
                  )}
                </div>

                <h3>{title}</h3>

                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* ABOUT */}
<section id="about" className="section container about">
  <div className="about-stamp">
    <span>DEVELOP</span>
    <b>✦</b>
    <span>CREATE</span>
    <b>✦</b>
    <span>TRAVEL</span>
    <b>✦</b>
    <span>EXPLORE</span>
  </div>

  <div className="about-copy">
    <p className="section-kicker">03 / about me</p>

    <h2>
      CODE.
      <br />
      <em>CREATE.</em>
      <br />
      EXPLORE.
    </h2>

    <p>
      I&apos;m <strong>Namit Mahajan</strong>, a Full Stack Developer
      focused on building modern, responsive and practical web
      applications. I work across the complete development process —
      from creating polished interfaces with React and Next.js to
      developing backend services and APIs using Node.js.
    </p>

    <p>
      I enjoy solving real-world problems through technology and
      building products that are fast, maintainable and easy to use.
      I&apos;m constantly exploring new technologies, AI development
      tools and better ways to improve the development process.
    </p>

    <p>
      Outside of development, I&apos;m a <strong>TRAVEL ENTHUSIAST </strong>
       who loves exploring new places, experiencing different cultures
      and creating memories along the way. Travel gives me a chance to
      step away from the screen, discover new perspectives and keep
      learning beyond technology.
    </p>

    <p>
      I also create <strong>travel vlogs and content</strong> for
      YouTube and Instagram, documenting my journeys and sharing my
      experiences with others. It&apos;s something I enjoy because it
      combines my passion for travel, creativity and storytelling.
    </p>

    <div className="socials">
            {/* Replace GitHub URL */}
            <a
              href="#"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>

            {/* Replace LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/namit-mahajan-2106/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              href="https://www.youtube.com/@NMsVoyage"
              aria-label="youtube"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>
          </div>
  </div>
  
</section>


      {/* APPROACH */}
      <section className="principles">
        <div className="container principles-inner">
          <div>
            <p className="section-kicker">04 / my approach</p>

            <h2>
              GOOD CODE IS
              <br />
              <span>BUILT TO LAST.</span>
              <br />
              GOOD UX IS
              <br />
              <em>OBVIOUS.</em>
            </h2>
          </div>

          <div className="principles-list">
            <div>
              <b>01</b>

              <h3>Understand the problem</h3>

              <p>
                Before writing code, I focus on understanding the
                user, the business requirement and the actual
                problem that needs to be solved.
              </p>
            </div>

            <div>
              <b>02</b>

              <h3>Build across the stack</h3>

              <p>
                I think beyond individual screens — connecting
                frontend interfaces with APIs, backend logic and
                application data.
              </p>
            </div>

            <div>
              <b>03</b>

              <h3>Keep it clean and scalable</h3>

              <p>
                I prefer simple architecture, reusable components
                and code that can evolve as the product grows.
              </p>
            </div>

            <div>
              <b>04</b>

              <h3>Ship and improve</h3>

              <p>
                Build a useful version, test it, learn from it and
                continuously improve the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact container">
        <div className="contact-red">
          <div className="big-dot" />

          <p className="section-kicker">
            05 / let&apos;s connect
          </p>

          <h2>
            HAVE A PROJECT
            <br />
            IN MIND?
          </h2>

          <h2 className="red">LET&apos;S TALK.</h2>
        </div>

        <div className="contact-info">
          <p>
            Looking for a Full Stack Developer for your next web
            product, internship, freelance project or full-time
            opportunity?
          </p>

          {/* Replace this email */}
          <a
            className="email"
            href="mailto:namitmahajan11@gmail.com"
          >
            <Mail />
            namitmahajan11@gmail.com
          </a>

          <div className="socials">
            {/* Replace GitHub URL */}
            <a
              href="#"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>

            {/* Replace LinkedIn URL */}
            <a
              href="https://www.linkedin.com/in/namit-mahajan-2106/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:namitmahajan11@gmail.com"
              aria-label="Email"
            >
              <Mail />
            </a>
            <a href="/Namit_Mahajan_2026.pdf" download="Namit_Resume.pdf" aria-label='download'>
              <ArrowDownToLineIcon />
            </a>
          </div>

          <p className="replace-note">
            Update the email, GitHub and LinkedIn links with your
            real details before publishing.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container">
        <span>
          © {new Date().getFullYear()} Namit MAHAJAN
        </span>

        <span>BUILT WITH REACT + NEXT.JS + NODE.JS</span>

        <button onClick={() => scrollTo('top')}>
          BACK TO TOP ↑
        </button>
      </footer>
    </main>
  );
}