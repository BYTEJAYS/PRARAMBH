import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-mark"><img src="/assets/logo.png" alt="PRARAMBH GROUP" /><p>Real estate as craft.</p></div>
      <div className="footer-links"><p>Explore</p><Link href="/projects">Projects</Link><Link href="/about">About</Link><Link href="/testimonials">Stories</Link><Link href="/gallery">Gallery</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-contact"><p>Begin a conversation</p><a href="tel:+919978948105">+91 99789 48105</a><a href="mailto:inframr02@gmail.com">inframr02@gmail.com</a><span>Vadodara, Gujarat</span></div>
      <div className="footer-bottom"><span>© 2026 PRARAMBH GROUP</span><span>Built with intention.</span></div>
    </footer>
  );
}
