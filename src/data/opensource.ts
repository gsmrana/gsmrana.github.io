export interface OpenSourceProject {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

const GITHUB = "https://github.com/gsmrana";

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: "Table Tennis Scoreboard",
    description:
      "Hardware and firmware for a table-tennis scoreboard built from scratch with a dot-matrix display and RF-based remote control.",
    tech: ["Embedded C", "Dot-Matrix LED", "RF 2.4 GHz"],
    link: GITHUB,
  },
  {
    title: "Serial COM Desktop Tool",
    description:
      "Cross-platform desktop tool for UART, USB CDC and serial communication — extremely handy for embedded firmware development and debugging.",
    tech: ["C#", "WPF", "UART", "USB CDC"],
    link: GITHUB,
  },
  {
    title: "USB MSC Disk Drive Analyzer",
    description:
      "Desktop tool to analyze USB Mass Storage devices — block-level inspection, partition probing, and FAT debugging for firmware developers.",
    tech: ["C#", "USB MSC", "FAT"],
    link: GITHUB,
  },
];
