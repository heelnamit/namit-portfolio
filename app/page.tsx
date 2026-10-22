'use client';

import {
  ArrowDownRight,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import About from './components/About';
import Approach from './components/Approach';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Skills from './components/Skills';

export default function Home() {
  const [open, setOpen] = useState(false);
  const animationScopeRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!animationScopeRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const scope = animationScopeRef.current;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = gsap.timeline({ delay: 0.15 });

        intro
          .fromTo(
            '.hero-title-line > span',
            { yPercent: 110, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              duration: 0.9,
              ease: 'power4.out',
              stagger: 0.14,
            },
          )
          .fromTo(
            ['.hero-sub', '.actions > *'],
            { y: 18, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.65,
              ease: 'power3.out',
              stagger: 0.12,
            },
            '-=0.3',
          )
          .fromTo(
            '.code-card',
            { y: 18, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.8,
              ease: 'power3.out',
            },
            '-=0.5',
          )
          .fromTo(
            '.marquee',
            { y: 12, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: 'power2.out',
            },
            '-=0.15',
          );

        const revealEachOnScroll = (
          selector: string,
          { x = 0, y = 24 }: { x?: number; y?: number } = {},
        ) => {
          scope.querySelectorAll<HTMLElement>(selector).forEach((element) => {
            gsap.fromTo(
              element,
              { x, y, autoAlpha: 0 },
              {
                x: 0,
                y: 0,
                autoAlpha: 1,
                duration: 0.75,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: element,
                  start: 'top 88%',
                  once: true,
                },
              },
            );
          });
        };

        gsap.fromTo(
          '.experience-timeline-line',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.project-grid',
              start: 'top 78%',
              end: 'bottom 55%',
              scrub: 0.5,
            },
          },
        );
        revealEachOnScroll('.project-grid > .project', { x: -28 });

        gsap.fromTo(
          '.skill-grid > .skill',
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: '.skill-grid',
              start: 'top 82%',
              once: true,
            },
          },
        );

        revealEachOnScroll(
          '.about-copy > p:not(.section-kicker), .about-copy .socials',
        );

        gsap.fromTo(
          '.principles-list > div',
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: '.principles-list',
              start: 'top 82%',
              once: true,
            },
          },
        );

        const contact = gsap.timeline({
          scrollTrigger: {
            trigger: '.contact',
            start: 'top 78%',
            once: true,
          },
        });

        contact
          .fromTo(
            '.contact-red > .section-kicker, .contact-red h2',
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: 'power3.out',
              stagger: 0.12,
            },
          )
          .fromTo(
            '.contact-info > p:not(.replace-note), .contact-info .email, .contact-info .socials',
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.12,
            },
            '-=0.35',
          );

        gsap.fromTo(
          '.footer > *',
          { y: 12, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: '.footer',
              start: 'top 94%',
              once: true,
            },
          },
        );
      });

      return () => media.revert();
    }, animationScopeRef);

    return () => context.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });

    setOpen(false);
  };

  return (
    <main ref={animationScopeRef}>
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

          <h1 aria-label="I BUILD DIGITAL PRODUCTS THAT WORK.">
            <span className="hero-title-line" aria-hidden="true">
              <span>I BUILD</span>
            </span>
            <span className="hero-title-line" aria-hidden="true">
              <span><em>DIGITAL</em></span>
            </span>
            <span className="hero-title-line" aria-hidden="true">
              <span>PRODUCTS</span>
            </span>
            <span className="hero-title-line" aria-hidden="true">
              <span>THAT WORK<span className="hero-title-dot">.</span></span>
            </span>
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