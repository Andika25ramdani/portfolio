import Image from "next/image";

import { technologies } from "@/constants/technologies";
import Container from "../layouts/container";
import Typography from "../typography";

const SkillAndToolsSection = () => {
  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <h2 className="section-header-text">Skill and Tools</h2>
        <Typography
          variant="subtitle"
          className="max-w-xl text-center text-gray-600"
        >
          The skills, tools and technologies I am used to work:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {technologies.map((technology, index) => (
          <div
            className="flex flex-col justify-center items-center gap-3"
            key={index}
          >
            <Image src={technology.logo} alt={technology.label} height={64} />
            <Typography variant={"body1"} className="text-gray-600 text-center">
              {technology.label}
            </Typography>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SkillAndToolsSection;
