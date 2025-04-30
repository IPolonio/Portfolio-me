import HeroSection from "@/components/hero-section"
import ProjectsGrid from "@/components/projects-grid"
import PrototypeZone from "@/components/prototype-zone"
import WorkflowTimeline from "@/components/workflow-timeline"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <ProjectsGrid />
      <PrototypeZone />
      <WorkflowTimeline />
      <ContactSection />
    </main>
  )
}
