"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function BlueprintReveal() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const raw = (window.innerHeight - rect.top) / (window.innerHeight + rect.height * .45);
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <section className="blueprint" ref={ref}>
      <div className="blueprint-sticky">
        <div className="blueprint-media">
          <img className="blueprint-base" src="/assets/build2.png" alt="Architectural blueprint transforming into Prarambh Pride" />
          <div className="blueprint-final" style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}><img src="/assets/build2.png" alt="" /></div>
          <div className="blueprint-grid" />
        </div>
        <div className="blueprint-copy">
          <p className="section-index">08 — Signature study</p>
          <h2>From line.<br /><em>To life.</em></h2>
          <div className="blueprint-meter"><span style={{ width: `${progress * 100}%` }} /></div>
          <p>Every home begins as a measured idea. Scroll to move from architectural intent to a place made for living.</p>
          <Link className="text-link" href="/projects/prarambh-pride">Explore Prarambh Pride <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}
