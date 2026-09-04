import {
  Code2,
  Database,
  Github,
  Globe2,
  GitBranch,
  Layers3,
  Server,
  Sparkles,
} from 'lucide-react';

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

export default function Skills() {
  return (
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
  );
}