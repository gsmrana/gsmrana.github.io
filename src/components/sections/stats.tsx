import { useTheme } from "@/components/theme-provider";
import { SectionHeader } from "@/components/section-header";

export function Stats() {
  const { theme } = useTheme();
  const ghTheme = theme === "dark" ? "tokyonight" : "default";
  const leetTheme = theme === "dark" ? "dark" : "light";
  const username = "gsmrana";

  // cache_seconds via timestamp keeps images updating when theme switches
  const k = theme;

  return (
    <section id="stats" className="section-pad">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Coding Stats"
          title="GitHub & LeetCode"
          description="Live snapshots from my public profiles."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="card-base p-3 lg:col-span-2 flex items-center justify-center overflow-hidden">
            <img
              key={`gh-${k}`}
              src={`https://github-readme-stats-gsmrana.vercel.app/api?username=${username}&show_icons=true&hide_border=true&theme=${ghTheme}&count_private=true`}
              alt="GitHub stats"
              loading="lazy"
              className="max-w-full"
            />
          </div>
          <div className="card-base p-3 flex items-center justify-center overflow-hidden">
            <img
              key={`leet-${k}`}
              src={`https://leetcard.jacoblin.cool/${username}?theme=${leetTheme}&font=Inter&ext=heatmap`}
              alt="LeetCode stats"
              loading="lazy"
              className="max-w-full"
            />
          </div>
          <div className="card-base p-3 lg:col-span-2 flex items-center justify-center overflow-hidden">
            <img
              key={`top-${k}`}
              src={`https://github-readme-stats-gsmrana.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=${ghTheme}&langs_count=10`}
              alt="GitHub top languages"
              loading="lazy"
              className="max-w-full"
            />
          </div>
          <div className="card-base p-3 flex items-center justify-center overflow-hidden">
            <img
              key={`streak-${k}`}
              src={`https://streak-stats.demolab.com/?user=${username}&hide_border=true&theme=${ghTheme}`}
              alt="GitHub streak"
              loading="lazy"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
