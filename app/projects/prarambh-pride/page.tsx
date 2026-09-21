import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/site-data";
export default function Page() { return <ProjectDetail project={projects[1]} />; }
