export interface Publication {
  title: string;
  venue: string;
  year: number;
  publisher?: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title:
      "MedBot: An IoT Based Real-Time Healthcare Monitoring and Telemedicine Solution System",
    venue: "CIIR 2023, India",
    year: 2023,
    publisher: "Springer",
  },
  {
    title:
      "Design and Implementation of a Remote-Controlled Robotic Arm Based on Industrial Application Perspective",
    venue: "ICMIME 2013, RUET",
    year: 2013,
  },
  {
    title:
      "Design and Implementation of a GSM Based Remote Home Security and Appliance Control System",
    venue: "ICAEE 2013, IUB",
    year: 2013,
    publisher: "IEEE Xplore",
  },
  {
    title:
      "Design & Implementation of a Robot for Maze-Solving with Turning Indicators using PID Controller",
    venue: "ICIEV 2013, DU",
    year: 2013,
    publisher: "IEEE Xplore",
  },
  {
    title:
      "Development of a Remote-Control System for an Unmanned Vehicle Using Mobile Phone Based Network",
    venue: "ICMERE 2013, CUET",
    year: 2013,
  },
  {
    title:
      "Implementation of Drive-by-Wire Technology Replacing the Conventional Vehicle Control System",
    venue: "ICMIME 2013, RUET",
    year: 2013,
  },
];
