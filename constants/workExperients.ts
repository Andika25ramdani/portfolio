import dmkLogo from '/public/comp/dmk.svg'
import dmkDarkLogo from '/public/comp/dmk-dark.svg'
import jumpaLogo from '/public/comp/jumpa.svg'
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
        logo: dmkLogo,
        logoDark: dmkDarkLogo,
        logoAlt: "Digital Muda Kreatif",
        position: "Software Developer",
        startDate: new Date(2020, 6),
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
        startDate: new Date(2021, 11),
        endDate: new Date(2022, 11),
        summary: [
            'Worked as a front-end developer',
            'Worked with a variety of technologies, including HTML, CSS, TailwindCSS, Bootstrap, and others.',
        ]
    },
    {
        logo: jumpaLogo,
        logoAlt: "jumpa.id",
        position: "iOS Developer",
        startDate: new Date(2022, 11),
        currentlyWorkHere: true,
        summary: [
            'Developed iOS Application with Swift, and SwiftUI',
            'Deployed iOS Application into Apple Store',
            'Maintened iOS Application',
        ]
    },
]