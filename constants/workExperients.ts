import aestechLogo from '/public/comp/aestech.svg'
import aestechDarkLogo from '/public/comp/aestech-dark.svg'
import dmkLogo from '/public/comp/dmk.svg'
import dmkDarkLogo from '/public/comp/dmk-dark.svg'
import jumpaLogo from '/public/comp/jumpa.svg'
import kebonJerukLogo from '/public/comp/bandung.svg'
import { StaticImageData } from 'next/image'

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
        startDate: new Date(2019, 7),
        endDate: new Date(2019, 9),
        summary: [
            'Worked for public instance client',
            'Worked as a IT Support and Front-end Receiption',
            'Worked with a variety of technologies, including HTML, CSS, CodeIgniter, and others.',
            'Create product to increase productivity at work',
        ]
    },
    {
        logo: dmkLogo,
        logoDark: dmkDarkLogo,
        logoAlt: "Digital Muda Kreatif",
        position: "Software Developer",
        startDate: new Date(2020, 6, 20),
        endDate: new Date(2021, 11),
        summary: [
            'Worked for various clients',
            'Worked as a front-end developer',
            'Worked with a variety of technologies, including HTML, CSS, TailwindCSS, Bootstrap, Wordpress, Laravel, Flutter, and others.',
        ]
    },
    {
        logo: jumpaLogo,
        logoAlt: "jumpa.id",
        position: "Front-end Developer",
        startDate: new Date(2021, 11, 16),
        endDate: new Date(2022, 11),
        summary: [
            'Worked with a variety of technologies, including HTML, CSS, TailwindCSS, Bootstrap, and others.',
        ]
    },
    {
        logo: jumpaLogo,
        logoAlt: "jumpa.id",
        position: "iOS Developer",
        startDate: new Date(2022, 11),
        endDate: new Date(2023, 10),
        summary: [
            'Developed iOS Application with Swift, and SwiftUI',
            'Deployed iOS Application into Apple Store',
            'Maintened iOS Application',
        ]
    },
    {
        logo: aestechLogo,
        logoDark: aestechDarkLogo,
        logoAlt: "Aestech",
        position: "Front-end Developer",
        startDate: new Date(2023, 10, 24),
        currentlyWorkHere: true,
        summary: [
            'Develop and maintain company product'
        ]
    },
]