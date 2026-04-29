import { SectionHeader } from "@/components/section-header";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-secondary/30">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Toolbox"
          description="A decade of hands-on work spanning bare-metal firmware, RTOS, wireless protocols, and Linux systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={cat.title}
                className="card-base p-5 hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <CatIcon className="h-4 w-4" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className="chip">
                        {Icon && <Icon className="h-3.5 w-3.5 text-primary" />}
                        <span>{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
