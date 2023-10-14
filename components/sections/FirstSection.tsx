import Image from "next/image";
import Container from "../layouts/container";
import Typography from "../typography";
import Link from "next/link";
import { headerMenuLinks } from "@/constants/headerMenuLinks";

const FirstSection = () => {
  return (
    <Container id="first">
      <div className="flex flex-col gap-12 md:flex-row items-center">
        {/* Image */}
        <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
          <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
            <Image
              src="/next.svg"
              alt="Headshot of Andika"
              className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
              style={{ objectFit: "cover" }}
              width={240}
              height={320}
            ></Image>
            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-accent max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
          <div className="flex flex-col gap-2 px-2 sm:px-0">
            <Typography variant="h1">
              Hi, I&apos;m Andika{" "}
              {/* <span className="inline-block animate-waving-hand">👋</span> */}
            </Typography>
            <Typography>
              I&lsquo;m a passionate and dedicated software developer who
              thrives on challenges and constantly seeks out new opportunities
              to grow. My journey as a developer has been marked by my
              unwavering commitment to transforming ideas into beautiful,
              intuitive, and user-friendly applications.
            </Typography>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href={headerMenuLinks[1].path}
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
            >
              Explore My Work
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FirstSection;
