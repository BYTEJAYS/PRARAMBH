import PageFrame from "@/components/PageFrame";
import GalleryExperience from "@/components/GalleryExperience";

export default function GalleryPage() {
  return <PageFrame><main className="inner-page">
    <section className="inner-hero gallery-hero"><h1>Light. Material.<br /><em>Life.</em></h1><span>A curated view of the supplied PRARAMBH project renders.</span></section>
    <section className="gallery-page section-pad"><GalleryExperience /></section>
  </main></PageFrame>;
}
