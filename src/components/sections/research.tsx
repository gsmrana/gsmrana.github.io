import { BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { publications } from "@/data/publications";

export function Research() {
  return (
    <section id="research" className="section-pad bg-secondary/30">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Research"
          title="Publications"
          description="Peer-reviewed papers across IoT healthcare, robotics, embedded systems and automotive control."
        />

        <ul className="space-y-4">
          {publications.map((pub) => (
            <li
              key={pub.title}
              className="card-base p-5 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {pub.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.venue}
                    {pub.publisher ? ` · ${pub.publisher}` : ""}
                  </p>
                </div>
                <span className="shrink-0 rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                  {pub.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
