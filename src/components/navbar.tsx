import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

function NavIcon({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: any;
}) {
  const isExternal = href.startsWith("http");

  const content = (
    <span className="theme-button flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:text-foreground">
      <Icon className="h-5 w-5" />
    </span>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {isExternal ? (
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            {content}
          </a>
        ) : (
          <Link href={href} aria-label={label}>
            {content}
          </Link>
        )}
      </TooltipTrigger>

      <TooltipContent
        side="top"
        sideOffset={8}
        className="theme-section-badge rounded-xl px-4 py-2 text-sm text-foreground"
      >
        <p className="capitalize">{label}</p>
        <TooltipArrow className="fill-[rgba(246,131,24,0.9)]" />
      </TooltipContent>
    </Tooltip>
  );
}

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-30 flex justify-center px-4">
      <div className="theme-glow-card flex items-center gap-3 rounded-2xl px-3 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
        {DATA.navbar.map((item) => (
          <NavIcon
            key={item.href}
            href={item.href}
            label={item.label}
            Icon={item.icon}
          />
        ))}

        <Separator className="mx-1 h-6 w-px bg-white/10" />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => (
            <NavIcon
              key={`social-${name}-${index}`}
              href={social.url}
              label={social.name}
              Icon={social.icon}
            />
          ))}
      </div>
    </div>
  );
}