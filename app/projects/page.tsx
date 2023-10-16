import { NextPage } from "next";

import Container from "@/components/layouts/container";
import Typography from "@/components/typography";
import ProjectDetails from "@/components/project-details";

import { PROJECTS } from "@/constants/projects";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <h2 className="section-header-text">Projects</h2>
        <Typography
          variant="subtitle"
          className="max-w-xl text-center text-gray-600"
        >
          Take a look at a sample of my projects.
        </Typography>
      </div>

      {PROJECTS?.map((project, index) => (
        <ProjectDetails
          key={index}
          {...project}
          layoutType={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
};

export default About;
