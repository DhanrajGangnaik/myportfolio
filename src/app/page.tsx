/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import CurrentlyWorkingOn from "@/components/section/currently-working-on";

// import MyHomelab from "@/components/section/my-homelab";

import { ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-16">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10">

        {/* HERO */}
        <section id="hero">
          <div className="w-full space-y-8">
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

        {/* ABOUT */}
        <section id="about" className="mt-10">
          <div className="flex flex-col gap-y-4">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <h2 className="text-xl font-bold">About</h2>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="prose max-w-3xl text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
                <Markdown>{DATA.summary}</Markdown>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mt-12">
          <div className="flex flex-col gap-y-6">
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
                          className="size-8 md:size-10 rounded-full border p-1 object-contain shadow ring-2 ring-border"
                        />
                      ) : (
                        <div className="size-8 md:size-10 rounded-full border bg-muted shadow ring-2 ring-border" />
                      )}

                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 font-semibold">
                          {education.school}
                          {education.href !== "#" && (
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition" />
                          )}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {education.degree}
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      {education.start} - {education.end}
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-12">
          <div className="flex flex-col gap-y-4">
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
                    <div className="flex items-center gap-2 rounded-xl border px-4 h-8 bg-background ring-2 ring-border/20">
                      {SkillIcon && <SkillIcon className="size-4" />}
                      <span className="text-sm font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-14">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <ProjectsSection />
          </BlurFade>
        </section>


        {/* CURRENT WORK */}
        <section id="currently-working-on" className="mt-14">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <CurrentlyWorkingOn />
          </BlurFade>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-14">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <ContactSection />
          </BlurFade>
        </section>

      </div>
    </main>
  );
}