import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-10">
        <div className="flex flex-col items-center justify-center gap-y-5 text-center">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-border to-transparent" />
            <div className="theme-section-badge z-10 rounded-full px-4 py-1.5">
              <span className="text-sm font-medium text-foreground">
                Featured Projects
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent via-border to-transparent" />
          </div>

          <div className="flex flex-col items-center justify-center gap-y-3 text-center">
            <h2 className="theme-title text-3xl font-bold tracking-tight sm:text-4xl">
              Infrastructure and platform engineering projects
            </h2>
            <p className="theme-subtext max-w-2xl text-base leading-relaxed md:text-lg">
              These projects reflect my work in self-hosted cloud
              infrastructure, Kubernetes, observability, automation, and CI/CD
              system design.
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[980px] auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
                className="h-full"
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}