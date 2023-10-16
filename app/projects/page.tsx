import { NextPage } from "next";

import Container from "@/components/layouts/Container";
import Typography from "@/components/Typography";
import ProjectDetails from "@/components/ProjectDetails";

import { PROJECTS } from "@/constants/projects";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <Container className="bg-gray-50">
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
