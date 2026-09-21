import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import IntroOverlay from "@/components/IntroOverlay";
import BlueprintReveal from "@/components/BlueprintReveal";
import { galleryImages, projects } from "@/lib/site-data";

export default function Home() {
  return (
    <PageFrame>
      <IntroOverlay />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src="/assets/build3.png" alt="PRARAMBH residential architecture at golden hour" />
          <div className="hero-shade" />
          <div className="hero-kicker"><span>01</span> Vadodara, Gujarat</div>
          <div className="hero-copy">
            <p className="eyebrow">15+ years of crafting spaces</p>
            <h1 id="hero-title">Building<br /><em>what lasts.</em></h1>
            <div className="hero-bottom">
              <p>Spaces shaped by experience.<br />Built for generations.</p>
              <Link className="text-link light" href="/projects">Explore our projects <span>↗</span></Link>
            </div>
          </div>
          <div className="scroll-cue"><span /> Scroll to discover</div>
        </section>

        <section className="statement section-pad">
          <p className="section-index">02 — Our perspective</p>
          <div className="statement-grid">
            <h2>More than<br /><em>15 years</em><br />of experience.</h2>
            <div className="statement-aside"><span className="lotus-mark">✦</span><p>More than a decade and a half of understanding land, people and possibility — translated into places with lasting value.</p><Link className="text-link" href="/about">Our story <span>↗</span></Link></div>
          </div>
        </section>

        <section className="story-split">
          <div className="story-image"><img src="/assets/buildsquare1.jpeg" alt="Prarambh 51 entrance architecture" /><span>Architecture rooted in place</span></div>
          <div className="story-copy"><p className="section-index">03 — Real estate as craft</p><h2>Every project begins with a simple belief.</h2><p>The spaces we build become part of people’s lives. That responsibility asks for care at every scale — from the first line on paper to the feeling of arriving home.</p><Link className="text-link" href="/about">Discover our approach <span>↗</span></Link></div>
        </section>

        <section className="legacy section-pad">
          <p className="section-index">04 — Built through time</p>
          <div className="legacy-top"><h2>Experience gives<br /><em>form to trust.</em></h2><p>Measured not in noise, but in relationships sustained, neighbourhoods shaped and the quiet confidence to keep evolving.</p></div>
          <div className="stats-row"><div><strong>15<span>+</span></strong><p>Years of<br />experience</p></div><div><strong>1000<span>+</span></strong><p>Clients<br />served</p></div><div><strong>03</strong><p>Documented<br />developments</p></div><div><strong>01</strong><p>Shared<br />standard</p></div></div>
        </section>

        <section className="featured-projects">
          <div className="projects-heading section-pad"><p className="section-index">05 — Selected developments</p><h2>Places we’ve<br /><em>imagined and shaped.</em></h2></div>
          <div className="project-list">
            {projects.map((project) => (
              <Link href={`/projects/${project.slug}`} className="project-row" key={project.slug}>
                <div className="project-photo"><img src={project.hero} alt={`${project.name} architectural render`} /></div>
                <span className="project-number">{project.accent}</span>
                <div className="project-title"><p>{project.type}</p><h3>{project.name}</h3></div>
                <div className="project-meta"><span>{project.location}</span><b>View project ↗</b></div>
              </Link>
            ))}
          </div>
        </section>

        <BlueprintReveal />

        <section className="future section-pad">
          <div className="future-copy"><p className="section-index">09 — What’s next</p><h2>The next chapter is<br /><em>being drawn.</em></h2><p>Future PRARAMBH developments will be revealed here when their plans and materials are ready to share.</p></div>
          <div className="future-drawing" aria-label="Upcoming project concept"><span className="drawing-floor f1" /><span className="drawing-floor f2" /><span className="drawing-floor f3" /><span className="drawing-floor f4" /><b>Details coming soon</b></div>
        </section>

        <section className="gallery-preview section-pad">
          <div className="gallery-head"><div><p className="section-index">10 — Architectural gallery</p><h2>Made to be<br /><em>experienced.</em></h2></div><Link className="text-link" href="/gallery">View the gallery <span>↗</span></Link></div>
          <div className="gallery-strip">{galleryImages.slice(0, 4).map((image, index) => <figure key={image.src} className={`gallery-tile tile-${index + 1}`}><img src={image.src} alt={`${image.project} — ${image.category}`} /><figcaption><span>{image.project}</span><b>{image.category}</b></figcaption></figure>)}</div>
        </section>

        <section className="principles section-pad">
          <p className="section-index">11 — The PRARAMBH way</p>
          <div className="principles-grid"><h2>Why<br /><em>PRARAMBH.</em></h2><ol><li><span>01</span><div><h3>Experience, applied.</h3><p>15+ years of learning translated into clearer decisions and considered delivery.</p></div></li><li><span>02</span><div><h3>Attention at every scale.</h3><p>From neighbourhood planning to the detail you touch every day.</p></div></li><li><span>03</span><div><h3>Built for real life.</h3><p>Architecture that makes room for people, routines and generations.</p></div></li></ol></div>
        </section>

        <section className="testimonial-placeholder"><p className="section-index">12 — Client stories</p><blockquote>“Our work is ultimately measured by how it is lived in.”</blockquote><p>Verified client stories will be added here after approval.</p></section>

        <section className="final-cta"><p className="section-index">The next beginning</p><h2>Let’s build<br /><em>what comes next.</em></h2><p>Tell us what you’re looking for.</p><Link className="outline-button" href="/contact">Start a conversation <span>↗</span></Link></section>
      </main>
    </PageFrame>
  );
}
