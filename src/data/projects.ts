export interface Project {
  title: string;
  role?: string;
  description: string;
  domain: string;
  tech: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: "USB MSC Disk Corruption Protection",
    role: "Architect & Lead Developer",
    description:
      "Architected a robust corruption-protection layer for a USB Mass Storage Class device, ensuring file-system integrity across power-loss and unsafe ejects.",
    domain: "USB / Storage",
    tech: ["C", "USB MSC", "FAT", "ARM Cortex-M"],
  },
  {
    title: "Temperature & Humidity Data Logger + Tracker",
    role: "Firmware Architect",
    description:
      "Greenfield firmware architecture for a battery-powered logger with cellular connectivity, real-time location and on-device PDF report generation.",
    domain: "IoT / Cold Chain",
    tech: ["C", "FreeRTOS", "STM32", "GSM/LTE", "GPS", "PDF"],
  },
  {
    title: "GSM/LTE + GNSS Tracker Drivers",
    description:
      "Designed reliable AT-command drivers for GSM/LTE modems and GPS/GNSS receivers with reconnect, fallback, and triangulation strategies.",
    domain: "Cellular / Location",
    tech: ["AT Commands", "TCP/IP", "MQTT", "Protobuf"],
  },
  {
    title: "SAM4S USB & OTA Bootloader",
    description:
      "Designed and deployed bootloaders for Microchip SAM4S supporting USB and OTA firmware upgrade and FTM testing workflows.",
    domain: "Bootloader",
    tech: ["C", "SAM4S", "USB", "OTA", "ASF"],
  },
  {
    title: "NDIR CO₂ Sensor Driver",
    description:
      "Production driver for an NDIR CO₂ sensor with calibration, temperature compensation, and integration into a logging firmware stack.",
    domain: "Sensors",
    tech: ["C", "I²C", "UART", "FreeRTOS"],
  },
  {
    title: "Embedded Windows CE 5.0 Handheld",
    description:
      "Integrated USB CDC driver and data-collection app into an Embedded Windows CE 5.0 handheld used as a portable data collector for non-real-time logging.",
    domain: "Handheld / OS",
    tech: ["WinCE 5.0", "USB CDC", "C++"],
  },
  {
    title: "Wireless Sensor Network & Gateway",
    description:
      "Enhanced large-scale wireless sensor network, repeaters, and gateway firmware — with proprietary RF protocol and packet analysis tooling.",
    domain: "Wireless / Cold Chain",
    tech: ["915 MHz", "2.4 GHz ISM", "Mesh", "Embedded C"],
  },
  {
    title: "Prohori Vehicle Tracking System",
    role: "Firmware Engineer",
    description:
      "Firmware for a fully-domestic vehicle tracking device (Bangladesh) with cellular telemetry and configurable geofencing.",
    domain: "Automotive / VTS",
    tech: ["C", "GSM/GPRS", "GPS", "UART"],
  },
  {
    title: "OBD-II Integration Feasibility",
    description:
      "Investigated and prototyped integration of a car's OBD-II port with the VTS device for remote vehicle diagnostics.",
    domain: "Automotive",
    tech: ["OBD-II", "CAN", "K-Line"],
  },
  {
    title: "Digital Weight Machine (Rokomari.com)",
    description:
      "Designed hardware + firmware for a digital weight machine with server-side weight reporting; deployed in commercial logistics.",
    domain: "IoT / Logistics",
    tech: ["C", "PIC", "UART", "HTTP"],
  },
];
