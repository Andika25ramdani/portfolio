import { workExperients } from "@/constants/workExperients";
import ExperienceDetails from "../ExperienceDetails";
import Container from "../layouts/Container";
import Typography from "../Typography";

const WorkExperientsSection = () => {
  return (
    <Container className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <h2 className="section-header-text">Employment History</h2>
        <Typography
          variant="subtitle"
          className="max-w-xl text-center px-4 sm:px-8 text-gray-600"
        >
          Welcome to my world of work, where I&lsquo;ve dedicated myself to
          diverse professional roles.
        </Typography>
      </div>

      {workExperients
        ?.sort((item1, item2) => {
          if (item1.startDate > item2.startDate) {
            return -1;
          }
          if (item1.startDate < item2.startDate) {
            return 1;
          }
          return 0;
        })
        .map((experience, index) => (
          <ExperienceDetails {...experience} key={index} />
        ))}
    </Container>
  );
};

export default WorkExperientsSection;
