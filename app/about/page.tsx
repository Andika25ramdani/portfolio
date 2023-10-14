import { NextPage } from "next";

import ContactSection from "@/components/sections/Contact";
import SkillAndToolsSection from "@/components/sections/SkillAndTools";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <div>
      <SkillAndToolsSection />
      <ContactSection />
    </div>
  );
};

export default About;
