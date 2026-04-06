import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import Image from "next/image";
import Markdown from "react-markdown";

export default function CurrentlyWorkingOn() {
  return (
    <section
      id="currently-working-on"
      className="flex min-h-0 flex-col gap-y-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="theme-section-badge mb-4 inline-flex rounded-full px-4 py-1.5 text-sm">
          Currently Working On
        </div>

        <h2 className="theme-title text-3xl font-bold tracking-tight sm:text-4xl">
          Building self-hosted delivery and AI platform systems
        </h2>

        <p className="theme-subtext mt-4 text-lg leading-relaxed">
          My current focus is on designing a self-hosted CI/CD pipeline and
          building a self-hosted MLOps platform with GPU-backed runtime,
          orchestration, and automation foundations across my homelab
          environment.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
        {DATA.currentlyWorkingOn.map((item, index) => (
          <BlurFade key={item.title} delay={0.08 * index} className="h-full">
            <article className="theme-glow-card group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
              <div className="theme-image-frame relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-muted">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                ) : (
                  <div className="h-full w-full bg-muted" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/20 to-transparent" />

                <div className="theme-section-badge absolute left-4 top-4 inline-flex rounded-full px-3 py-1 text-xs font-medium backdrop-blur">
                  {item.dates}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-2">
                  <h3 className="theme-title text-xl font-semibold leading-tight sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="theme-subtext text-sm">
                    {item.location}
                  </p>
                </div>

                <div className="theme-subtext flex-1 text-[13px] leading-relaxed">
                  <Markdown
                    components={{
                      ul: ({ children }) => (
                        <ul className="space-y-1.5">{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li className="flex items-start gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                          <span>{children}</span>
                        </li>
                      ),
                      p: ({ children }) => (
                        <p className="mb-3 last:mb-0">{children}</p>
                      ),
                    }}
                  >
                    {item.description}
                  </Markdown>
                </div>
              </div>
            </article>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}