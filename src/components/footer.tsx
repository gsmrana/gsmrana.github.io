import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-narrow flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground">{profile.name}</p>
          <p>
            {profile.title} · {profile.location}
          </p>
          <p className="mt-2">© {year} · Built with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
