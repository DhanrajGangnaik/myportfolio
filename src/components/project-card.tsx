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
      <div className="theme-image-frame flex h-48 w-full items-center justify-center bg-muted text-xs text-muted-foreground">
        Preview
      </div>
    );
  }

  return (
    <div className="theme-image-frame overflow-hidden rounded-t-2xl">
      <img
        src={src}
        alt={alt}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        onError={() => setImageError(true)}
      />
    </div>
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
    <div className="theme-image-frame overflow-hidden rounded-t-2xl">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
    </div>
  ) : image ? (
    <ProjectImage src={image} alt={title} />
  ) : (
    <div className="theme-image-frame flex h-48 w-full items-center justify-center bg-muted text-xs text-muted-foreground">
      Preview
    </div>
  );

  return (
    <article
      className={cn(
        "theme-glow-card group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_70px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      {/* Media */}
      <div className="relative shrink-0">
        {primaryHref ? (
          <Link href={primaryHref} target="_blank" className="block">
            {media}
          </Link>
        ) : (
          media
        )}

        {links && links.length > 0 && (
          <div className="absolute right-3 top-3 flex gap-2">
            {links.map((projectLink, idx) => (
              <Link
                href={projectLink.href}
                key={`${projectLink.type}-${idx}`}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge className="rounded-full border border-white/10 bg-black/60 px-2 py-0.5 text-[10px] text-white backdrop-blur hover:bg-black/80">
                  {projectLink.icon}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Title Row */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="theme-title text-base font-semibold leading-tight">
              {title}
            </h3>
            <p className="theme-subtext text-[11px] mt-1">{dates}</p>
          </div>

          {primaryHref && (
            <Link href={primaryHref} target="_blank">
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        {/* Description (fixed bullets) */}
        <div className="flex-1 text-[13px] leading-relaxed text-muted-foreground space-y-2">
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
                <p className="text-muted-foreground">{children}</p>
              ),
            }}
          >
            {description}
          </Markdown>
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}