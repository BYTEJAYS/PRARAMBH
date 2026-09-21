import PageFrame from "@/components/PageFrame";
import ParallaxImage from "@/components/ParallaxImage";

export default function AboutPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero about-hero"><p>About PRARAMBH</p><h1>Experience<br /><em>with intention.</em></h1><span>15+ years of shaping spaces in and around Vadodara.</span></section>
    <section className="about-manifesto section-pad"><p className="section-index">Our beginning</p><h2>A local understanding.<br />A long view.</h2><div><p>PRARAMBH GROUP’s work begins with the realities of place — the land, climate, neighbourhood and the lives that will unfold there.</p><p>Across more than fifteen years, that foundation has grown into a body of residential and mixed-use work grounded in trust, clarity and enduring value.</p></div></section>
    <section className="about-image"><ParallaxImage className="about-parallax" src="/assets/build1.png" alt="Prarambh 51 entrance" /><p>We do not merely create buildings. We shape the threshold between architecture and everyday life.</p></section>
    <section className="timeline section-pad"><p className="section-index">Built through time</p><div className="timeline-line"><article><span>01</span><h3>The beginning</h3><p>A real-estate practice rooted in Vadodara.</p></article><article><span>02</span><h3>Experience</h3><p>More than fifteen years of local learning.</p></article><article><span>03</span><h3>Today</h3><p>Residential and mixed-use developments across Waghodia.</p></article><article><span>04</span><h3>Next</h3><p>The next generation of PRARAMBH spaces.</p></article></div></section>
    <section className="philosophy section-pad"><p className="section-index">Our philosophy</p><h2>Real estate<br /><em>as craft.</em></h2><div><p>Understand before drawing.</p><p>Build for the life beyond handover.</p><p>Let detail carry the promise.</p></div></section>
  </main></PageFrame>;
}
