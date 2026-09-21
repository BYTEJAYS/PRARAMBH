"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 42);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  const close = () => setOpen(false);
  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Link className="brand" href="/" aria-label="PRARAMBH GROUP home" onClick={close}>
          <img src="/assets/logo.png" alt="" />
          <span>PRARAMBH<br />GROUP</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/team">Team</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link>
        </nav>
        <Link className="nav-enquire" href="/contact">Enquire <span>↗</span></Link>
        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><i /><i /></button>
      </header>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <p>Explore PRARAMBH</p>
        <nav aria-label="Mobile navigation">
          <Link onClick={close} href="/projects"><span>01</span>Projects</Link>
          <Link onClick={close} href="/about"><span>02</span>About</Link>
          <Link onClick={close} href="/team"><span>03</span>Team</Link>
          <Link onClick={close} href="/gallery"><span>04</span>Gallery</Link>
          <Link onClick={close} href="/contact"><span>05</span>Contact</Link>
        </nav>
        <small>Vadodara, Gujarat · +91 99789 48105</small>
      </div>
    </>
  );
}
