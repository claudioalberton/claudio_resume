"use client"

import { motion } from "framer-motion"
import { Languages } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { resumeData } from "@/data/resume-data"

export function LanguagesSection() {
  return (
    <section className="py-16 print:py-8 print-break-avoid">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Languages className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Languages</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resumeData.languages.map((language, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">
                      {language.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language.level}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
