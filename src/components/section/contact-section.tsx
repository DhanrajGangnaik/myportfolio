import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="relative rounded-xl border p-10">
      <div className="absolute left-1/2 -top-4 z-10 -translate-x-1/2 rounded-xl border bg-primary px-4 py-1">
        <span className="text-sm font-medium text-background">Contact</span>
      </div>

      <div className="absolute inset-0 top-0 h-1/2 overflow-hidden rounded-xl">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let’s Connect
        </h2>

        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I’m actively seeking opportunities in Cloud Engineering, DevOps, and
          Site Reliability Engineering. If you’re hiring or working on
          infrastructure-focused projects, feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={`mailto:${DATA.contact.email}`}
            className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            Email Me
          </Link>

          <Link
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            LinkedIn
          </Link>

          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border px-5 py-2 text-sm font-medium hover:bg-muted transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}