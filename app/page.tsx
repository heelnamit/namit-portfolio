'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import About from './components/About';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';

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
      <Experience />

      {/* SKILLS */}
      <Skills />

      {/* ABOUT */}
      <About />


      {/* APPROACH */}
      <Approach />

      {/* CONTACT */}
      <Contact />

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