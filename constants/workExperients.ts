import aestechLogo from "/public/comp/aestech.svg"
import aestechDarkLogo from "/public/comp/aestech-dark.svg"
import dmkLogo from "/public/comp/dmk.svg"
import dmkDarkLogo from "/public/comp/dmk-dark.svg"
import jumpaLogo from "/public/comp/jumpa.svg"
import kebonJerukLogo from "/public/comp/bandung.svg"
import { StaticImageData } from "next/image"

export interface WorkExperient {
  logo: string | StaticImageData
  logoDark?: string | StaticImageData
  logoAlt: string
  position: string
  startDate: Date
  endDate?: Date
  currentlyWorkHere?: boolean
  summary: string[]
}

export const workExperients: WorkExperient[] = [
  {
    logo: kebonJerukLogo,
    logoAlt: "Kelurahan Kebon Jeruk",
    position: "IT Support (Intern)",
    startDate: new Date(2019, 6),
    endDate: new Date(2019, 8),
    summary: [
      "IT Support & Developer Intern handling public administration workflow automation.",
      "Digitized physical paper document filing into automated queue tracking portals for local public services.",
      "Built administrative request forms and tracking dashboards using CodeIgniter, PHP, Bootstrap, and MySQL.",
    ],
  },
  {
    logo: dmkLogo,
    logoDark: dmkDarkLogo,
    logoAlt: "Digital Muda Kreatif",
    position: "Software Developer",
    startDate: new Date(2020, 5, 20),
    endDate: new Date(2021, 10),
    summary: [
      "Software Developer operating in a client-driven freelance environment.",
      "Implemented unified interfaces and chat screens using Dart and Flutter across iOS, Android, and Web.",
      "Translated custom client requirements into responsive web and mobile layouts using Laravel, Bootstrap, and TailwindCSS.",
      "Shifted focus from basic functional builds to strict visual accuracy and cross-device interface consistency.,",
    ],
  },
  {
    logo: jumpaLogo,
    logoAlt: "jumpa.id",
    position: "Front-end Developer",
    startDate: new Date(2021, 10, 16),
    endDate: new Date(2023, 9, 23),
    summary: [
      "Frontend Developer handling complex client-side state and realtime streaming interfaces.",
      "Built multi-participant video conference interfaces in Vue.js and wrapped them into Electron.js desktop containers.",
      "Developed declarative UI screens in SwiftUI, adhering to Apple standards.",
      "Wired real-time event listeners and managed app publishing pipelines directly to Apple Store Connect.",
    ],
  },
  {
    logo: aestechLogo,
    logoDark: aestechDarkLogo,
    logoAlt: "Aestech",
    position: "Front-end Developer",
    startDate: new Date(2023, 9, 24),
    endDate: new Date(2026, 8, 7),
    summary: [
      "Frontend Developer focused on design system engineering and B2B clinical SaaS architecture.",
      "Converted complex corporate Figma specifications into a zeroredundancy, production-ready Vue.js 3 component library.",
      "Synchronized design tokens and TailwindCSS variables to enforce 100% visual and layout consistency across healthcare forms and data tables.",
      "Eliminated UI/UX component drift and accelerated delivery timelines for new feature deployments.",
    ],
  },
]
