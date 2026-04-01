/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="flex h-48 w-full items-center justify-center bg-muted text-sm text-muted-foreground">
        Project Preview
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  const primaryHref = href && href !== "#" ? href : undefined;

  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
    />
  ) : image ? (
    <ProjectImage src={image} alt={title} />
  ) : (
    <div className="flex h-48 w-full items-center justify-center bg-muted text-sm text-muted-foreground">
      Project Preview
    </div>
  );

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      <div className="relative shrink-0 overflow-hidden">
        {primaryHref ? (
          <Link
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {media}
          </Link>
        ) : (
          media
        )}

        {links && links.length > 0 && (
          <div className="absolute right-2 top-2 flex flex-wrap gap-2">
            {links.map((projectLink, idx) => (
              <Link
                href={projectLink.href}
                key={`${projectLink.type}-${idx}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90">
                  {projectLink.icon}
                  {projectLink.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>

          {primaryHref ? (
            <Link
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          ) : null}
        </div>

        <div className="prose max-w-full flex-1 text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>

        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="h-6 w-fit border-border px-2 text-[11px] font-medium"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}