import { StaticImageData } from "next/image"

import dinda1 from "/public/projects/dinda/1.jpg"
import dinda2 from "/public/projects/dinda/2.jpg"
import dinda3 from "/public/projects/dinda/3.jpg"
import dinda4 from "/public/projects/dinda/4.jpg"

import dilelang1 from "/public/projects/dilelang/1.jpg"
import dilelang2 from "/public/projects/dilelang/2.jpg"
import dilelang3 from "/public/projects/dilelang/3.jpg"
import dilelang4 from "/public/projects/dilelang/4.jpg"

import epa1 from "/public/projects/epa/1.jpg"
import epa2 from "/public/projects/epa/2.jpg"
import epa3 from "/public/projects/epa/3.jpg"
import epa4 from "/public/projects/epa/4.jpg"

import epel1 from "/public/projects/epel/1.jpg"
import epel2 from "/public/projects/epel/2.jpg"
import epel3 from "/public/projects/epel/3.jpg"
import epel4 from "/public/projects/epel/4.jpg"

import malabar1 from "/public/projects/malabar/1.jpg"
import malabar2 from "/public/projects/malabar/2.jpg"

import pakasep1 from "/public/projects/pakasep/1.jpg"
import pakasep2 from "/public/projects/pakasep/2.jpg"
import pakasep3 from "/public/projects/pakasep/3.jpg"
import pakasep4 from "/public/projects/pakasep/4.jpg"

import pakumara1 from "/public/projects/pakumara/1.jpg"
import pakumara2 from "/public/projects/pakumara/2.jpg"

import petra1 from "/public/projects/petra/1.jpg"
import petra2 from "/public/projects/petra/2.jpg"
import petra3 from "/public/projects/petra/3.jpg"
import petra4 from "/public/projects/petra/4.jpg"

import pgn1 from "/public/projects/pgn/1.jpg"

import sigita1 from "/public/projects/sigita/1.jpg"
import sigita2 from "/public/projects/sigita/2.jpg"
import sigita3 from "/public/projects/sigita/3.jpg"
import sigita4 from "/public/projects/sigita/4.jpg"

import vv1 from "/public/projects/vv/1.jpg"
import vv2 from "/public/projects/vv/2.jpg"
import vv3 from "/public/projects/vv/3.jpg"
import vv4 from "/public/projects/vv/4.jpg"

import aestech_saas1 from "/public/projects/aestech_saas/1.jpg"

import aestech_landing1 from "/public/projects/aestech_landing/1.jpg"

export type Project = {
  title: string
  subtitle: string
  description: string
  url: string
  images: StaticImageData[]
  technologies: string[]
  created?: Date
  status?: "" | "progress" | "dummy" | "cancel"
  highlight?: true | false
  appColor: string
  appForeground: string
}

export const PROJECTS: Project[] = [
  {
    title: "Aestech SaaS",
    subtitle: "SaaS",
    description:
      "All-in-one SaaS platform for healthcare and beauty enterprises, unifying master data management, daily transaction processing, and automated reporting into a centralized operational dashboard.",
    url: "",
    images: [aestech_saas1],
    technologies: ["HTML", "CSS", "TailwindCSS", "Vue"],
    created: new Date(2023, 12),
    highlight: true,
    appColor: "#0ea5e9",
    appForeground: "black",
  },
  {
    title: "Aestech Website",
    subtitle: "Company Profile",
    description:
      "Redesigned the company profile and landing page for an enterprise SaaS platform (2025 release), modernizing the brand identity and layout to introduce specialized software solutions to healthcare and beauty management systems.",
    url: "https://aestech.co.id",
    images: [aestech_landing1],
    technologies: ["HTML", "CSS", "TailwindCSS", "Vue", "Nuxt"],
    created: new Date(2024, 6),
    highlight: false,
    appColor: "#f97316",
    appForeground: "black",
  },
  {
    title: "SIGITA (Sistem Informasi Agenda Digital Adhyaksa)",
    subtitle: "Event Reminder",
    description:
      "Private digital scheduling and event reminder platform for prosecutorial agency workflows, eliminating schedule overlaps by converting manual task tracking into a clutter-free, high-contrast mobile notification pipeline.",
    url: "https://apps.apple.com/app/sigita/id6463731807",
    images: [sigita1, sigita2, sigita3, sigita4],
    technologies: ["Swift", "SwiftUI", "Firebase", "iOS"],
    created: new Date(2023, 7),
    highlight: true,
    appColor: "#1ae875",
    appForeground: "black",
  },
  {
    title: "PETRa",
    subtitle: "Messaging App",
    description:
      "Secure and real-time messenger that not only ensures reliable communication but also promotes cross-platform compatibility. The iOS version has been developed to support a wider range of devices and user accessibility.",
    url: "",
    images: [petra1, petra2, petra3, petra4],
    technologies: ["Swift", "SwiftUI", "iOS"],
    created: new Date(2022, 11),
    status: "progress",
    appColor: "#bf3d4b",
    appForeground: "white",
  },
  {
    title: "EPA (Elektronik saPA)",
    subtitle: "Messaging App",
    description:
      "Built a multi-device encrypted messenger for secure team communication in Flutter and Dart, resolving cross-platform layout, spacing, and state inconsistencies across web, iOS, and Android with unified chat views and instant message delivery indicators.",
    url: "",
    images: [epa1, epa2, epa3, epa4],
    technologies: ["Dart", "Flutter", "iOS", "Android"],
    created: new Date(2022, 6),
    highlight: false,
    appColor: "#eb055c",
    appForeground: "white",
  },
  {
    title: "Desktop Jumpa",
    subtitle: "Video Conference App",
    description:
      "Desktop video conferencing platform tailored for in-house company use, with a future plan to expand into the public domain. It offers seamless communication within the organization and aims to provide these services to a broader audience as it goes public.",
    url: "",
    images: [dinda2, dinda1, dinda3, dinda4],
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "VueJS",
      "Electron JS",
    ],
    created: new Date(2021, 11),
    status: "cancel",
    highlight: true,
    appColor: "#9e272a",
    appForeground: "white",
  },
  {
    title: "Koperasi Mitra Malabar",
    subtitle: "Company Profile",
    description:
      "Rebranded the company profile for an Indonesian coffee cooperative (koperasi), designing a modernized web platform to showcase their brand identity, story, and premium coffee catalog (2021 release).",
    url: "http://koperasimitramalabar.com",
    images: [malabar1, malabar2],
    technologies: ["HTML", "CSS", "TailwindCSS", "Laravel"],
    created: new Date(2021, 9),
    appColor: "#0c94a4",
    appForeground: "white",
  },
  {
    title: "Yayasan Putra Garuda Nusantara",
    subtitle: "Company Profile",
    description:
      "Rebranded the company profile for an Indonesian cooperative (koperasi), designing a modern web platform to highlight their brand identity, human capital development programs, and local community initiatives.",
    url: "https://yayasanpgn.com/",
    images: [pgn1],
    technologies: ["Wordpress"],
    created: new Date(2021, 8),
    appColor: "#ffffff",
    appForeground: "black",
  },
  {
    title: "Pakasep (Perkumpulan Ahli KPR Subsidi Perumahan)",
    subtitle: "Housing Showcase",
    description:
      "This application was supports the BAKTI PADAMU GURU (BATARU) program launched by the West Java Provincial Government to provide subsidized housing for education providers.",
    url: "https://play.google.com/store/apps/details?id=com.marketpreneur.pakasep",
    images: [pakasep1, pakasep2, pakasep3, pakasep4],
    technologies: ["Dart", "Flutter", "Firebase"],
    created: new Date(2021, 2),
    appColor: "#8f98fd",
    appForeground: "black",
  },
  {
    title: "Virtual Verbal",
    subtitle: "Games Blog & News Website",
    description:
      "Rebrand web platform for gaming enthusiasts that integrates live news and blog feeds with real-time IGDB (Internet Game Database) API sync to deliver up-to-date game metrics and content updates.",
    url: "https://virtualverbal.com/",
    images: [vv1, vv2, vv3, vv4],
    technologies: ["HTML", "CSS", "Bootstrap", "Laravel", "Firebase"],
    created: new Date(2021, 1),
    status: "progress",
    appColor: "#7441d0",
    appForeground: "white",
  },
  {
    title: "Pakumara",
    subtitle: "College Gallery Showcase",
    description:
      "Media and event display platform that showcases curated client work and fixture portfolios, featuring a single-impression schedule highlight that presents upcoming events cleanly without repeating redundant calendar data.",
    url: "http://pakumara2019.com/",
    images: [pakumara1, pakumara2],
    technologies: ["Wordpress"],
    created: new Date(2020, 12),
    appColor: "#f9c255",
    appForeground: "black",
  },
  {
    title: "diLelang",
    subtitle: "Online Auction Platform",
    description:
      "Interactive online auction platform engineered specifically as an academic assessment, presenting real-time bidding workflows, listing displays, and auction management within a streamlined design system.",
    url: "",
    images: [dilelang1, dilelang2, dilelang3, dilelang4],
    technologies: ["HTML", "CSS", "JavaScript", "CodeIgniter"],
    created: new Date(2020, 2),
    status: "dummy",
    appColor: "#fe3f47",
    appForeground: "white",
  },
  {
    title: "E-Pelayanan",
    subtitle: "Public Documents Makers",
    description:
      "Web portal for public document requests at Kelurahan Kebon Jeruk that eliminated manual paper form processing under administrative constraints by delivering custom document forms.",
    url: "",
    images: [epel1, epel2, epel3, epel4],
    technologies: ["HTML", "CSS", "Bootstrap", "CodeIgniter"],
    created: new Date(2019, 9),
    status: "dummy",
    highlight: true,
    appColor: "#fc7e14",
    appForeground: "black",
  },
]
