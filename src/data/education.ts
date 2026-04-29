export interface Education {
  degree: string;
  institution: string;
  shortName: string;
  location: string;
  year: number;
}

export const education: Education[] = [
  {
    degree: "M.Sc. in Computer Science and Engineering",
    institution: "United International University",
    shortName: "UIU",
    location: "Dhaka, Bangladesh",
    year: 2025,
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Canadian University of Bangladesh",
    shortName: "CUB",
    location: "Dhaka, Bangladesh",
    year: 2023,
  },
  {
    degree: "B.Sc. in Mechanical Engineering",
    institution: "Khulna University of Engineering & Technology",
    shortName: "KUET",
    location: "Khulna, Bangladesh",
    year: 2014,
  },
];
