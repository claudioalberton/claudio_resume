"use client"

import { motion } from "framer-motion"
import { Code2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume-data"

export function SkillsSection() {
  return (
    <section className="py-16 bg-secondary/20 print:bg-none print:py-8 print-break-avoid">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {resumeData.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
