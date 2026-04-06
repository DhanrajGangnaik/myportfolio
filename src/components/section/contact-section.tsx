import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="theme-glow-card relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12">
      <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2">
        <div className="theme-section-badge rounded-full px-4 py-1.5">
          <span className="text-sm font-medium text-foreground">Contact</span>
        </div>
      </div>

      <div className="absolute inset-0 top-0 h-1/2 overflow-hidden rounded-3xl">
        <FlickeringGrid
          className="h-full w-full opacity-50"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 pt-10 text-center">
        <h2 className="theme-title text-3xl font-bold tracking-tight sm:text-5xl">
          Let’s Connect
        </h2>

        <p className="theme-subtext mx-auto max-w-2xl text-balance text-base leading-relaxed">
          I’m actively seeking opportunities in Cloud Engineering, DevOps, Site
          Reliability Engineering, and platform-focused infrastructure roles. If
          you’re hiring or building systems in cloud, automation, Kubernetes, or
          self-hosted infrastructure, feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="theme-button rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Email Me
          </Link>

          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-button rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            LinkedIn
          </Link>

          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="theme-button rounded-full px-5 py-2.5 text-sm font-medium text-foreground"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}