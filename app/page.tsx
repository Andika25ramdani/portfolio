import ContactSection from '@/components/sections/Contact'
import FirstSection from '@/components/sections/FirstSection'
import ProjectSection from '@/components/sections/ProjectSection'
import SkillAndToolsSection from '@/components/sections/SkillAndTools'
import WorkExperientsSection from '@/components/sections/WorkExperients'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <FirstSection />
      <ProjectSection />
      <SkillAndToolsSection />
      <WorkExperientsSection />
      <ContactSection useSocialLink={true} />
    </main>
  )
}
