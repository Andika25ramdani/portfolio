import { StaticImageData } from "next/image";

import dinda1 from "/public/projects/dinda/1.jpg";
import dinda2 from "/public/projects/dinda/2.jpg";
import dinda3 from "/public/projects/dinda/3.jpg";
import dinda4 from "/public/projects/dinda/4.jpg";

import epa1 from "/public/projects/epa/1.jpg";
import epa2 from "/public/projects/epa/2.jpg";
import epa3 from "/public/projects/epa/3.jpg";
import epa4 from "/public/projects/epa/4.jpg";

import epel1 from "/public/projects/epel/1.jpg";
import epel2 from "/public/projects/epel/2.jpg";
import epel3 from "/public/projects/epel/3.jpg";
import epel4 from "/public/projects/epel/4.jpg";

import malabar1 from "/public/projects/malabar/1.jpg";

import pakasep1 from "/public/projects/pakasep/1.jpg";
import pakasep2 from "/public/projects/pakasep/2.jpg";

import pakumara1 from "/public/projects/pakumara/1.jpg";
import pakumara2 from "/public/projects/pakumara/2.jpg";

import petra1 from "/public/projects/petra/1.jpg";
import petra2 from "/public/projects/petra/2.jpg";
import petra3 from "/public/projects/petra/3.jpg";
import petra4 from "/public/projects/petra/4.jpg";

import pgn1 from "/public/projects/pgn/1.jpg";

import sigita1 from "/public/projects/sigita/1.jpg";
import sigita2 from "/public/projects/sigita/2.jpg";
import sigita3 from "/public/projects/sigita/3.jpg";
import sigita4 from "/public/projects/sigita/4.jpg";

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  images: StaticImageData[];
  technologies: string[];
  created?: Date;
  status?: "" | "progress" | "dummy" | "cancel";
  highlight?: true | false;
};

export const PROJECTS: Project[] = [
  {
    title: "SIGITA",
    subtitle: "Sistem Informasi Agenda Digital Adhyaksa",
    description:
      "This is a reminder application platform designed specifically for prosecutorial agencies to help schedule activities, remind about important tasks, and manage work-related events.",
    url: "https://apps.apple.com/app/sigita/id6463731807",
    images: [sigita1, sigita2, sigita3, sigita4],
    technologies: ["Swift", "SwiftUI", "Firebase", "iOS"],
    created: new Date(2023, 7),
    highlight: true,
  },
  {
    title: "PETRa",
    subtitle: "Secure Messaging App",
    description:
      "This app is a secure and real-time messenger that not only ensures reliable communication but also promotes cross-platform compatibility. The iOS version has been developed to support a wider range of devices and user accessibility.",
    url: "",
    images: [petra1, petra2, petra3, petra4],
    technologies: ["Swift", "SwiftUI", "iOS"],
    created: new Date(2022, 11),
    status: "progress",
  },
  {
    title: "EPA",
    subtitle: "Elektronik saPA",
    description:
      "This app is a versatile and secure messenger designed to bridge communication across multiple platforms. Offering real-time messaging capabilities, it ensures instant and reliable conversations while prioritizing user data security. Whether you're on a mobile device and website platform.",
    url: "",
    images: [epa1, epa2, epa3, epa4],
    technologies: ["Dart", "Flutter", "iOS", "Android"],
    created: new Date(2022, 6),
    highlight: true,
  },
  {
    title: "Desktop Jumpa",
    subtitle: "Company Video Conference App",
    description:
      "This app is a desktop video conferencing platform tailored for in-house company use, with a future plan to expand into the public domain. It offers seamless communication within the organization and aims to provide these services to a broader audience as it goes public.",
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
  },
  {
    title: "Koperasi Mitra Malabar",
    subtitle: "Rebrand Company Profile Website",
    description:
      "This app represents a rebranding of client existing company profile",
    url: "http://koperasimitramalabar.com",
    images: [malabar1],
    technologies: ["HTML", "CSS", "TailwindCSS", "Laravel"],
    created: new Date(2021, 9),
  },
  {
    title: "Yayasan Putra Garuda Nusantara",
    subtitle: "Company Profile Website Landing",
    description:
      "This app represents a rebranding of client existing company profile",
    url: "https://yayasanpgn.com/",
    images: [pgn1],
    technologies: ["Wordpress"],
    created: new Date(2021, 8),
  },
  {
    title: "Pakasep",
    subtitle: "Perkumpulan Ahli KPR Subsidi Perumahan",
    description:
      "This application was supports the BAKTI PADAMU GURU (BATARU) program launched by the West Java Provincial Government to provide subsidized housing for education providers.",
    url: "https://play.google.com/store/apps/details?id=com.marketpreneur.pakasep",
    images: [pakasep1, pakasep2],
    technologies: ["Dart", "Flutter", "Firebase"],
    created: new Date(2021, 2),
  },
  {
    title: "Virtual Verbal",
    subtitle: "Games Blog & News Website Rebrand",
    description:
      'This app serves as a dynamic platform for gaming enthusiasts, offering a combination of a games blog, news updates, and real-time game database updates sourced from "IGDB" (Internet Game Database).',
    url: "https://virtualverbal.com/",
    images: [pgn1],
    technologies: ["HTML", "CSS", "Bootstrap", "Laravel", "Firebase"],
    created: new Date(2021, 1),
    status: "progress",
  },
  {
    title: "Pakumara",
    subtitle: "Work Gallery Showcase",
    description:
      "This app functions as a gallery showcasing client work and event fixtures, with a one-time display of scheduled events.",
    url: "http://pakumara2019.com/",
    images: [pakumara1, pakumara2],
    technologies: ["Wordpress"],
    created: new Date(2020, 12),
  },
//   {
//     title: "diLelang",
//     subtitle: "Online Auction Platform",
//     description:
//       "This app serves as an online auction platform designed specifically for school tasks and assignments.",
//     url: "",
//     images: [pakumara1, pakumara2],
//     technologies: ["HTML", "CSS", "JavaScript", "CodeIgniter"],
//     created: new Date(2020, 2),
//     status: "dummy",
//   },
  {
    title: "E-Pelayanan",
    subtitle: "Population Documents Makers",
    description:
      "This app was crafted with the goal of streamlining document creation for population-related needs. It's your efficient tool for generating vital documents, cutting down the time and effort required",
    url: "",
    images: [epel1, epel2, epel3, epel4],
    technologies: ["HTML", "CSS", "Bootstrap", "CodeIgniter"],
    created: new Date(2019, 9),
    status: "dummy",
    highlight: true,
  },
];
