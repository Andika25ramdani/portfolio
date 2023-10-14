import { NextPage } from "next";

import ContactSection from "@/components/sections/Contact";
import SkillAndToolsSection from "@/components/sections/SkillAndTools";
import WorkExperientsSection from "@/components/sections/WorkExperients";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <div>
      <SkillAndToolsSection />
      <WorkExperientsSection />
      <ContactSection useSocialLink={true} />
    </div>
  );
};

export default About;
