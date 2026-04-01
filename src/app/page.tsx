/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col gap-3">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              yOffset={8}
              className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
              text={DATA.name}
            />
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 1.2}
              className="text-base text-muted-foreground md:text-lg lg:text-xl"
              text={DATA.description}
            />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>

          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={`${education.school}-${index}`}
                delay={BLUR_FADE_DELAY * 5 + index * 0.05}
              >
                <Link
                  href={education.href}
                  target={education.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    education.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between gap-x-3"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-x-3">
                    {education.logoUrl ? (
                      <img
                        src={education.logoUrl}
                        alt={education.school}
                        className="size-8 flex-none overflow-hidden rounded-full border p-1 object-contain shadow ring-2 ring-border md:size-10"
                      />
                    ) : (
                      <div className="size-8 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10" />
                    )}

                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <div className="flex items-center gap-2 font-semibold leading-none">
                        {education.school}
                        {education.href !== "#" && (
                          <ArrowUpRight
                            className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                            aria-hidden
                          />
                        )}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-none items-center gap-1 text-right text-xs tabular-nums text-muted-foreground">
                    <span>
                      {education.start} - {education.end}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <h2 className="text-xl font-bold">Core Skills</h2>
          </BlurFade>

          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, index) => {
              const SkillIcon = "icon" in skill ? skill.icon : undefined;

              return (
                <BlurFade
                  key={skill.name}
                  delay={BLUR_FADE_DELAY * 7 + index * 0.05}
                >
                  <div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                    {SkillIcon ? (
                      <SkillIcon className="size-4 overflow-hidden rounded object-contain" />
                    ) : null}
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <ProjectsSection />
      </BlurFade>

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}