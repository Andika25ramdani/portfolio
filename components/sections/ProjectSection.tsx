import { PROJECTS } from "@/constants/projects";
import Container from "../layouts/container";
import ProjectDetails from "../project-details";
import Typography from "../typography";

const ProjectSection = () => {
  return (
    <Container id="work" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <h2 className="section-header-text">Projects</h2>
        <Typography
          variant="subtitle"
          className="max-w-xl text-center text-gray-600"
        >
          Take a look at a sample of my projects.
        </Typography>
      </div>

      {PROJECTS?.filter(item => item.highlight).map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
};

export default ProjectSection;
