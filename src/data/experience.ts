export interface ExperienceRole {
  title: string;
  period: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  location: string;
  hq?: string;
  url?: string;
  roles: ExperienceRole[];
}

export const experiences: Experience[] = [
  {
    company: "ReliSource Technologies Ltd.",
    location: "Dhaka, Bangladesh",
    hq: "Headquartered: Bedford, MA, USA",
    url: "https://www.relisource.com",
    roles: [
      {
        title: "Principal Embedded Software Engineer",
        period: "Sep 2022 – Present",
        bullets: [
          "Served as Technical Lead, guiding the embedded team through architectural decisions, providing technical direction, conducting code reviews, and mentoring engineers to ensure high-quality deliverables.",
          "Designed and developed a file-system corruption protection system for a USB MSC device.",
          "Designed firmware architecture from scratch for a temperature & humidity data logger and location tracker device.",
          "Implemented device drivers for GSM/LTE cellular modems, GPS/GNSS real-time location, and NDIR CO₂ sensors.",
          "Designed and deployed bootloaders for Microchip SAM4S for firmware upgrade over USB and OTA, with FTM testing support.",
          "Integrated USB CDC driver into an Embedded Windows CE 5.0 handheld device used as a portable data collector.",
        ],
      },
      {
        title: "Senior Embedded Software Engineer",
        period: "Dec 2018 – Sep 2022",
        bullets: [
          "Implemented sensor drivers for temperature and humidity monitoring devices used in cold-chain monitoring.",
          "Implemented low-level drivers for SPI, I²C, UART across multiple MCU families.",
          "Enhanced features of a wireless sensor network, wireless repeaters, and gateway system solutions.",
        ],
      },
      {
        title: "Embedded Software Engineer",
        period: "Oct 2015 – Dec 2018",
        bullets: [
          "Developed new features and bug fixes for a proprietary-protocol RF network and node control devices.",
          "Enhanced driver firmware of 915 MHz and 2.4 GHz radio chips for RF communication.",
          "Built a desktop tool and supporting firmware for analyzing packets in a large-scale wireless sensor deployment.",
        ],
      },
    ],
  },
  {
    company: "Pi Labs Bangladesh Ltd.",
    location: "Dhaka, Bangladesh",
    roles: [
      {
        title: "Product Development & Research Engineer",
        period: "May 2014 – Oct 2015",
        bullets: [
          "Developed firmware for the Prohori vehicle tracking system — designed and manufactured entirely in Bangladesh.",
          "Investigated feasibility of integrating a car's OBD port with the VTS device for remote diagnostics.",
          "Designed and developed a digital weight machine (hardware + firmware) with server-side weight reporting (used by Rokomari.com).",
        ],
      },
    ],
  },
];
