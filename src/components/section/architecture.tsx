import Image from "next/image";

export default function Architecture() {
  return (
    <section className="flex flex-col gap-y-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex rounded-full border px-4 py-1 text-sm">
          Architecture
        </div>

        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Infrastructure and platform design
        </h2>

        <p className="mt-4 text-lg text-muted-foreground">
          A production-style self-hosted environment combining Kubernetes,
          observability, CI/CD, and data systems into a cohesive platform layer.
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="overflow-hidden rounded-2xl border bg-card shadow">
          <Image
            src="/projects/data-platform.png"
            alt="Infrastructure Architecture"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}