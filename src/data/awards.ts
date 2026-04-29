export interface Award {
  title: string;
  event: string;
  year: number;
  location: string;
}

export interface Patent {
  title: string;
  description: string;
  authority: string;
  year: number;
}

export const awards: Award[] = [
  {
    title: "1st Runner-Up — Autonomous Robot",
    event: "International Autonomous Robotic Competition (IARC)",
    year: 2013,
    location: "Dhaka, Bangladesh",
  },
  {
    title: "Champion — Poster Session",
    event:
      "International Conference on Information & Communication Technology (EICT)",
    year: 2014,
    location: "Khulna, Bangladesh",
  },
];

export const patents: Patent[] = [
  {
    title: "Universal Smart Energy Meter with Automatic Load Management",
    description: "New invention — universal smart energy meter with automatic load management.",
    authority:
      "Department of Patents, Design & Trademark, Ministry of Industry, Bangladesh",
    year: 2015,
  },
];
