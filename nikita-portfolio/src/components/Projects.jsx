import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import MiniProjectCard from "./MiniProjectCard";
import { frontendProjects, fullStackProjects } from "../data/content";

export default function Projects() {
  const featured = fullStackProjects.find((p) => p.featured);
  const restFullStack = fullStackProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-28">
      <div className="container-wrap w-full">
        <SectionHeading
          label="projects/"
          title="Things I've built"
          description="From full-stack systems to focused frontend builds — everything here is designed, built, and shipped by me."
        />

        {/* 🔥 FULL STACK PROJECTS */}
        <div className="mt-12">
          <h3 className="text-lg sm:text-xl font-semibold text-ivory mb-6">
            Full Stack Projects
          </h3>

          <div className="space-y-8">
            {featured && <ProjectCard project={featured} />}

            {restFullStack.filter(Boolean).map((project, i) => (
              <ProjectCard project={project} index={i} key={project.id} />
            ))}
          </div>
        </div>

        {/* 🎨 FRONTEND PROJECTS */}
        <div className="mt-16">
          <h3 className="text-lg sm:text-xl font-semibold text-ivory mb-6">
            Frontend Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendProjects.filter(Boolean).map((project, i) => (
              <MiniProjectCard project={project} index={i} key={project.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
