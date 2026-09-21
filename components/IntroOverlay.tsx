"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setVisible(false); return; }
    const timer = window.setTimeout(() => setVisible(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return <div className="intro-overlay" aria-hidden="true"><img src="/assets/logo.png" alt="" /><p>15+ years of crafting spaces</p><span /></div>;
}
