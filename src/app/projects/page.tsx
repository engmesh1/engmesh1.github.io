import { ProjectsGridPage } from "@/components/sections/projects-page";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="container-px py-10">
      <ProjectsGridPage />
    </div>
  );
}
