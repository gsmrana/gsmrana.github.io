import { FolderGit2 } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-secondary/30">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          description="A snapshot of products and systems I've architected and shipped over the last decade."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-base p-6 hover:border-primary/40 hover:shadow-md flex flex-col"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <FolderGit2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-primary">
                    {p.domain}
                    {p.role ? ` · ${p.role}` : ""}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground flex-1">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
