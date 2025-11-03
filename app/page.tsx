"use client"

import { useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { Sidebar } from "@/components/sidebar"
import { AchievementsSection } from "@/components/achievements-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { PatentsSection } from "@/components/patents-section"
import { PDFExportButton } from "@/components/pdf-export-button"

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <main className="min-h-screen flex flex-col lg:flex-row print:flex-row">
      <div ref={contentRef} className="flex flex-col lg:flex-row w-full">
        <Sidebar />
        <div className="flex-1">
          <HeroSection />
          <AchievementsSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <PatentsSection />

          <footer className="py-8 text-center text-sm text-muted-foreground border-t no-print">
            <div className="container mx-auto px-4">
              <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
              <p className="mt-2">Claudio Alberton Batista - 2025</p>
            </div>
          </footer>
        </div>
      </div>

      <PDFExportButton contentRef={contentRef} />
    </main>
  )
}
