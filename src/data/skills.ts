import {
  SiC,
  SiCplusplus,
  SiPython,
  SiArm,
  SiStmicroelectronics,
  SiEspressif,
  SiArduino,
  SiRaspberrypi,
  SiLinux,
  SiBluetooth,
  SiZigbee,
  SiMqtt,
  SiGit,
  SiGitlab,
  SiDocker,
  SiGnu,
} from "react-icons/si";
import {
  Cpu,
  Radio,
  Satellite,
  Database,
  Wrench,
  ShieldCheck,
  Network,
  HardDrive,
  Usb,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";

export type SkillIcon = IconType | LucideIcon;

export interface SkillItem {
  name: string;
  icon?: SkillIcon;
}

export interface SkillCategory {
  title: string;
  description?: string;
  icon: LucideIcon;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: Terminal,
    items: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Python", icon: SiPython },
      { name: "Embedded Assembly" },
    ],
  },
  {
    title: "MCUs & Platforms",
    icon: Cpu,
    items: [
      { name: "ARM Cortex-M", icon: SiArm },
      { name: "STM32", icon: SiStmicroelectronics },
      { name: "Atmel / Microchip" },
      { name: "PIC" },
      { name: "OKI" },
      { name: "Renesas" },
      { name: "Lapis" },
      { name: "TI" },
      { name: "ESP32", icon: SiEspressif },
    ],
  },
  {
    title: "Cellular & Location",
    icon: Satellite,
    items: [
      { name: "GSM / GPRS" },
      { name: "2G / 3G / 4G" },
      { name: "LTE-M / CAT-M" },
      { name: "GPS / GNSS" },
      { name: "Cellular Triangulation" },
    ],
  },
  {
    title: "RF Protocols",
    icon: Radio,
    items: [
      { name: "BLE", icon: SiBluetooth },
      { name: "Wi-Fi" },
      { name: "Zigbee", icon: SiZigbee },
      { name: "815 / 915 MHz ISM" },
      { name: "2.4 GHz ISM" },
    ],
  },
  {
    title: "RTOS / OS",
    icon: Cpu,
    items: [
      { name: "FreeRTOS" },
      { name: "Embedded Windows CE 5.0" },
      { name: "Embedded Linux", icon: SiLinux },
    ],
  },
  {
    title: "Comm Protocols",
    icon: Network,
    items: [
      { name: "UART" },
      { name: "I²C" },
      { name: "SPI" },
      { name: "CAN" },
      { name: "USB CDC / MSC", icon: Usb },
      { name: "MQTT", icon: SiMqtt },
      { name: "TCP/IP" },
      { name: "Sockets" },
      { name: "Protobuf" },
      { name: "Base64" },
    ],
  },
  {
    title: "Memory & Storage",
    icon: HardDrive,
    items: [
      { name: "EEPROM" },
      { name: "Flash Memory" },
      { name: "USB Drive", icon: Usb },
      { name: "FAT File System" },
      { name: "PDF Generation" },
    ],
  },
  {
    title: "IDEs & Frameworks",
    icon: Wrench,
    items: [
      { name: "IAR Embedded Workbench" },
      { name: "Microchip Studio (ASF)" },
      { name: "STM32 HAL", icon: SiStmicroelectronics },
      { name: "Keil MDK" },
      { name: "Renesas CS+ for CC" },
      { name: "OKI U8" },
      { name: "Arduino", icon: SiArduino },
      { name: "GCC / WinAVR", icon: SiGnu },
    ],
  },
  {
    title: "Linux & SBCs",
    icon: Terminal,
    items: [
      { name: "Buildroot" },
      { name: "Yocto Project" },
      { name: "Raspberry Pi", icon: SiRaspberrypi },
      { name: "BeagleBone Black" },
      { name: "Kernel Integration", icon: SiLinux },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: Database,
    items: [
      { name: "Git", icon: SiGit },
      { name: "SVN" },
      { name: "GitLab CI/CD", icon: SiGitlab },
      { name: "Docker (cross-compile)", icon: SiDocker },
      { name: "GDB" },
      { name: "JTAG / SWD" },
    ],
  },
  {
    title: "Bootloader & Updates",
    icon: Cpu,
    items: [
      { name: "USB Bootloader", icon: Usb },
      { name: "Serial Bootloader" },
      { name: "OTA Firmware Upgrade" },
      { name: "FTM Test Support" },
    ],
  },
  {
    title: "Safety Standards",
    icon: ShieldCheck,
    items: [
      { name: "MISRA-C" },
      { name: "ISO 26262 (ASIL-B)" },
      { name: "IEC 62304" },
      { name: "DO-178C" },
    ],
  },
];
