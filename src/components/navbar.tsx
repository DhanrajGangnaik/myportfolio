import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 flex justify-center px-4">
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card/90 px-3 py-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const IconComponent = item.icon;

          const content = (
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <IconComponent className="h-5 w-5" />
            </span>
          );

          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                {isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    {content}
                  </a>
                ) : (
                  <Link href={item.href} aria-label={item.label}>
                    {content}
                  </Link>
                )}
              </TooltipTrigger>

              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground"
              >
                <p className="capitalize">{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator
          orientation="vertical"
          className="mx-1 h-6 w-px bg-border"
        />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;

            const content = (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <IconComponent className="h-5 w-5" />
              </span>
            );

            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  {isExternal ? (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={social.url} aria-label={social.name}>
                      {content}
                    </Link>
                  )}
                </TooltipTrigger>

                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground"
                >
                  <p>{social.name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}

        <Separator
          orientation="vertical"
          className="mx-1 h-6 w-px bg-border"
        />

        <Tooltip>
          <TooltipTrigger asChild>
            <span className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <ModeToggle className="h-5 w-5 cursor-pointer" />
            </span>
          </TooltipTrigger>

          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}