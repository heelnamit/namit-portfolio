import { Instagram, Linkedin, Youtube } from 'lucide-react';

export default function About() {
  return (
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
          <a
            href="https://www.instagram.com/heel_namit/"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>

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
            aria-label="YouTube"
            target="_blank"
            rel="noreferrer"
          >
            <Youtube />
          </a>
        </div>
      </div>
    </section>
  );
}