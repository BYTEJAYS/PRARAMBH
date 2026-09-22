import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero"><h1>Places with<br /><em>purpose.</em></h1><span>Residential and mixed-use developments in Vadodara.</span></section>
    <section className="projects-archive section-pad">
      <div className="archive-head"><p>Each project is presented with only the information verified in the supplied company material.</p></div>
      {projects.map((project) => <Link className="archive-project" href={`/projects/${project.slug}`} key={project.slug}><span>{project.accent}</span><div><p>{project.type}</p><h2>{project.name}</h2><small>{project.location}</small></div><img src={project.hero} alt="" /><b>Explore ↗</b></Link>)}
    </section>
  </main></PageFrame>;
}
