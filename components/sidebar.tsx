"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Linkedin, Download, Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { resumeData } from "@/data/resume-data"
import { Button } from "@/components/ui/button"

interface ProgressBarProps {
  label: string
  percentage: number
}

function ProgressBar({ label, percentage }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground/90">{label}</span>
        <span className="text-sm font-semibold text-primary">{percentage}%</span>
      </div>
      <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
        />
      </div>
    </div>
  )
}

function LanguageProgress({ label, percentage, index }: ProgressBarProps & { index: number }) {
  const gradientId = `gradient-${index}`
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground/90">{label}</span>
        <span className="text-sm font-semibold text-primary">{percentage}%</span>
      </div>
      <div className="relative w-24 h-24 mx-auto">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle
            cx="48"
            cy="48"
            r="42"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-secondary"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="42"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 42}`}
            strokeLinecap="round"
            initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
            animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - percentage / 100) }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--primary) / 0.8)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-primary">{percentage}%</span>
        </div>
      </div>
    </div>
  )
}

function getLanguagePercentage(level: string): number {
  const levelMap: Record<string, number> = {
    Native: 100,
    "Full Professional": 95,
    "Professional Working": 70,
    "Elementary": 50,
    "Basic": 15,
  }
  return levelMap[level] || 75
}

function getSkillPercentage(skill: string): number {
  // You can customize these percentages based on your actual skill levels
  const skillLevels: Record<string, number> = {
    ".NET C#": 90,
    "Full Stack Development": 90,
    "SQL Server": 90,
    AWS: 70,
    "ERP Systems": 80,
    "Software Architecture": 90,
    "Image Processing": 85,
    "OCR Technology": 85,
    "Scrum/Agile": 90,
    "Active Directory": 85,
    "Database Administration": 90,
    Networking: 80,
    Communication: 95,
    "Infrastructure Management": 90,
    "AI Tools (Programming, Code Generation, Planning)": 85,
    "AI-Assisted Development": 85,
    "AI-Powered Planning & Automation": 85,
  }
  return skillLevels[skill] || 75
}

export function Sidebar() {
  const topSkills = resumeData.skills.slice(0, 10)
  const languages = resumeData.languages
  const [imageError, setImageError] = useState(false)

  return (
    <aside className="w-full lg:w-80 xl:w-96 bg-card border-r border-border print:w-full print:border-0 print:bg-transparent">
      <div className="sticky top-0 h-screen overflow-y-auto print:static print:h-auto">
        <div className="p-6 lg:p-8 space-y-8 print:p-4">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4 bg-gradient-to-br from-primary/20 to-primary/10">
              {!imageError ? (
                <Image
                  src="/images/profile-photo.jpg"
                  alt={resumeData.name}
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-primary/60">
                  <div className="text-center">
                    <div className="text-5xl mb-2">👤</div>
                    <div className="text-xs font-medium">Add your photo</div>
                    <div className="text-xs text-muted-foreground mt-1">public/images/profile-photo.jpg</div>
                  </div>
                </div>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-center mb-2">
              {resumeData.name}
            </h1>
            <p className="text-sm lg:text-base text-muted-foreground text-center mb-6">
              {resumeData.title}
            </p>
          </motion.div>

          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Personal Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{resumeData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${resumeData.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  {resumeData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Linkedin className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href={`https://${resumeData.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <LanguageProgress
                  key={index}
                  index={index}
                  label={language.name}
                  percentage={getLanguagePercentage(language.level)}
                />
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Technical Skills</h3>
            <div className="space-y-2">
              {topSkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill}
                  percentage={getSkillPercentage(skill)}
                />
              ))}
            </div>
          </motion.div>

          {/* Other Knowledge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="print:hidden"
          >
            <h3 className="text-lg font-semibold mb-4 text-foreground">Other Knowledge</h3>
            <div className="space-y-2">
              {resumeData.skills.slice(10).map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-4 print:hidden"
          >
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.print()}
            >
              <Download className="h-4 w-4 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </aside>
  )
}

