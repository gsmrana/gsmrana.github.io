import { Briefcase, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey"
          description="From firmware engineer to technical lead — building reliable embedded products end-to-end."
        />

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.company}>
              {/* Company header */}
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.location}
                    {exp.hq ? ` · ${exp.hq}` : ""}
                  </p>
                </div>
                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Visit site <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Roles timeline */}
              <ol className="relative space-y-8 border-l border-border pl-6">
                {exp.roles.map((role) => (
                  <li key={role.title} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[31px] top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background"
                    >
                      <Briefcase className="h-2.5 w-2.5 text-primary" />
                    </span>
                    <div className="card-base p-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-lg font-semibold text-foreground">
                          {role.title}
                        </h4>
                        <span className="text-sm font-medium text-primary">
                          {role.period}
                        </span>
                      </div>
                      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-primary">
                        {role.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
