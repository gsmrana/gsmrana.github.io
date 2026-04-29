import { Github } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { openSourceProjects } from "@/data/opensource";

export function OpenSource() {
  return (
    <section id="opensource" className="section-pad">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Open Source"
          title="Tools & Side Projects"
          description="Hardware and tooling I've built and shared with the embedded community."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {openSourceProjects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="card-base p-6 transition-all hover:border-primary/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="flex items-center gap-2 text-primary">
                <Github className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Repository
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
