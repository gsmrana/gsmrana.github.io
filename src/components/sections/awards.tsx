import { Award as AwardIcon, Lightbulb } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { awards, patents } from "@/data/awards";

export function Awards() {
  return (
    <section id="awards" className="section-pad bg-secondary/30">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Awards & Patents"
          title="Recognition"
          description="Selected accolades and intellectual property from competitions and industry."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Awards */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <AwardIcon className="h-5 w-5 text-primary" /> Awards
            </h3>
            <ul className="space-y-3">
              {awards.map((a) => (
                <li key={a.event} className="card-base p-5">
                  <p className="text-base font-semibold text-foreground">{a.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.event}</p>
                  <p className="mt-1 text-xs text-primary font-medium">
                    {a.location} · {a.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Patents */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Lightbulb className="h-5 w-5 text-primary" /> Patents
            </h3>
            <ul className="space-y-3">
              {patents.map((p) => (
                <li key={p.title} className="card-base p-5">
                  <p className="text-base font-semibold text-foreground">{p.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  <p className="mt-2 text-xs text-primary font-medium">
                    {p.authority} · {p.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
