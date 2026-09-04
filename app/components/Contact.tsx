import {
  ArrowDownToLineIcon,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

export default function Contact() {
  return (
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

        <a
          className="email"
          href="mailto:namitmahajan11@gmail.com"
        >
          <Mail />
          namitmahajan11@gmail.com
        </a>

        <div className="socials">
          <a
            href="https://github.com/heelnamit"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
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
            href="mailto:namitmahajan11@gmail.com"
            aria-label="Email"
          >
            <Mail />
          </a>
          <a
            href="/Namit_Mahajan_2026.pdf"
            download="Namit_Resume.pdf"
            aria-label="download"
          >
            <ArrowDownToLineIcon />
          </a>
        </div>

        <p className="replace-note">
          Update the email, GitHub and LinkedIn links with your
          real details before publishing.
        </p>
      </div>
    </section>
  );
}