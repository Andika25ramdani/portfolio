import { technologies } from "@/constants/technologies";
import Container from "../layouts/container";
import Typography from "../typography";
import ImageWrapper from "../image-wrapper";

const SkillAndToolsSection = () => {
  return (
    <Container id="tech">
      <div className="flex flex-col items-center gap-4">
        <h2 className="section-header-text">Skill and Tools</h2>
        <Typography
          variant="subtitle"
          className="max-w-xl text-center text-gray-600"
        >
          The skills, tools, and technologies I am familiar with:
        </Typography>
      </div>

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {technologies.map((technology, index) => (
          <div
            className="flex flex-col justify-center items-center gap-3"
            key={index}
          >
            <ImageWrapper
              src={technology.logo}
              srcForDarkMode={technology.darkLogo}
              alt={technology.label}
              height={64}
              className="transition-transform duration-300 md:hover:scale-110"
            />

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
