import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="section-pad">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Education"
          title="Academic Background"
          description="Cross-disciplinary training in computer science and mechanical engineering."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu) => (
            <article key={edu.institution + edu.year} className="card-base p-6 flex flex-col">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                  {edu.year}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground leading-snug">
                {edu.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-primary">
                {edu.institution} ({edu.shortName})
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{edu.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
