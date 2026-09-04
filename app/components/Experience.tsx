export default function Experience() {
  return (
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
            <img src="images/wipro.png" className="project-visual-img" />
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
            <img src="images/cogni.webp" className="project-visual-img" />
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
            <img src="images/t-logo.jpg" className="project-visual-img" />
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
            <img src="images/cogni.webp" className="project-visual-img" />
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
  );
}