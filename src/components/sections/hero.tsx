import { Download, Mail, MapPin, Github, Linkedin, Code2, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { asset } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      {/* subtle background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.18,
        }}
      />

      <div className="container-narrow grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        {/* Profile image */}
        <div className="mx-auto lg:mx-0">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/40 to-sky-500/30 blur-xl" aria-hidden />
            <img
              src={asset(profile.profileImage)}
              alt={profile.name}
              width={224}
              height={224}
              className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full border-4 border-background object-cover shadow-xl ring-2 ring-primary/40"
            />
            {/* <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Available
            </span> */}
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {profile.title}
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <a
              href={profile.socials.email}
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={asset(profile.resumeFile)}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Me <ArrowRight className="h-4 w-4" />
            </a>
            <div className="ml-1 flex items-center gap-2">
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
            </div>
          </div>

          {/* Highlight stats */}
          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {profile.highlights.map((h) => (
              <div
                key={h.label}
                className="card-base p-4 text-center"
              >
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {h.label}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
