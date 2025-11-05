"use client"

import { useRef, useEffect, Suspense } from "react"
import { useReactToPrint } from "react-to-print"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { resumeData } from "@/data/resume-data"
import Image from "next/image"
import { useState } from "react"

function PrintPreviewContent() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [imageError, setImageError] = useState(false)
  const searchParams = useSearchParams()
  const autoExport = searchParams.get("autoExport") === "true"

  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Claudio_Alberton_Batista_Resume",
    pageStyle: `
      @page {
        size: A4 portrait;
        margin: 0;
      }
      @media print {
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
          box-sizing: border-box !important;
        }
        body {
          margin: 0 !important;
          padding: 0 !important;
          width: 21cm !important;
        }
        .print-page-one, .print-page-two {
          width: 21cm !important;
          max-width: 21cm !important;
          page-break-after: always;
          page-break-inside: avoid;
          display: flex !important;
          flex-direction: row !important;
        }
        .print-page-two:last-child {
          page-break-after: auto;
        }
        .print-page-one, .print-page-two {
          position: relative !important;
          overflow: hidden !important;
          display: flex !important;
          flex-direction: row !important;
          width: 21cm !important;
          max-width: 21cm !important;
        }
        aside {
          flex: 0 0 7.5cm !important;
          width: 7.5cm !important;
          min-width: 7.5cm !important;
          max-width: 7.5cm !important;
          overflow: hidden !important;
          padding: 9pt !important;
          margin: 0 !important;
          position: relative !important;
          box-sizing: border-box !important;
        }
        aside > div {
          margin-bottom: 6pt !important;
          margin-top: 0 !important;
        }
        aside > div:first-child {
          margin-top: 0 !important;
        }
        aside > div:last-child {
          margin-bottom: 0 !important;
        }
        aside h1 {
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1.1 !important;
        }
        aside h3 {
          margin: 0 0 3pt 0 !important;
          padding: 0 0 3pt 0 !important;
          line-height: 1.1 !important;
        }
        aside p, aside span, aside li {
          margin: 0 !important;
          padding: 0 !important;
          line-height: 1.1 !important;
        }
        aside div[class*="space-y"] > * + * {
          margin-top: 2pt !important;
        }
        aside div[class*="mb-"] {
          margin-bottom: 2pt !important;
        }
        .print-page-one > div:last-child {
          flex: 0 0 12.5cm !important;
          width: 12.5cm !important;
          min-width: 12.5cm !important;
          max-width: 12.5cm !important;
          overflow: hidden !important;
          margin: 0 !important;
          padding: 0.8cm !important;
          padding-bottom: 3cm !important;
          box-sizing: border-box !important;
          position: relative !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        .print-page-two > div:last-child {
          flex: 0 0 12.5cm !important;
          width: 12.5cm !important;
          min-width: 12.5cm !important;
          max-width: 12.5cm !important;
          overflow: hidden !important;
          margin: 0 !important;
          padding: 0.8cm !important;
          padding-top: 2.5cm !important;
          box-sizing: border-box !important;
          position: relative !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
        .print-page-one > div:last-child *,
        .print-page-two > div:last-child * {
          max-width: 100% !important;
          word-wrap: break-word !important;
          overflow-wrap: break-word !important;
        }
      }
    `,
  })

  const getLanguagePercentage = (level: string) => {
    const levelMap: Record<string, number> = {
      Native: 100,
      "Full Professional": 90,
      "Professional Working": 70,
      Elementary: 50,
      Basic: 15,
    }
    return levelMap[level] || 75
  }

  // Auto-trigger print when autoExport query param is present
  useEffect(() => {
    if (autoExport && contentRef.current) {
      // Small delay to ensure content is fully rendered
      setTimeout(() => {
        handlePrint()
      }, 500)
    }
  }, [autoExport, handlePrint])

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex gap-4">
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Website
          </Button>
        </Link>
        <Button onClick={handlePrint} size="lg">
          <Download className="mr-2 h-5 w-5" />
          Export to PDF
        </Button>
      </div>

      {/* Print Preview */}
      <div className="mx-auto space-y-8" style={{ width: '100%', maxWidth: '21cm' }}>
        <div ref={contentRef} className="w-full" style={{ width: '21cm', maxWidth: '21cm' }}>
          {/* Page 1 - With Sidebar */}
          <div className="bg-white shadow-2xl flex flex-row print-page-one overflow-hidden" style={{ width: '21cm', height: '29.7cm', minWidth: '21cm', maxWidth: '21cm', display: 'flex', flexDirection: 'row' }}>
            {/* Left Sidebar - Only on Page 1 */}
            <aside className="bg-[#1e293b] text-white p-3 flex flex-col flex-shrink-0" style={{ width: '7.5cm', minWidth: '7.5cm', maxWidth: '7.5cm', flex: '0 0 7.5cm', boxSizing: 'border-box' }}>
              {/* Profile Photo */}
              <div className="flex flex-col items-center mb-1" style={{ marginBottom: '4pt', marginTop: '0', padding: '0' }}>
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500 mb-0.5" style={{ marginBottom: '2pt', marginTop: '0' }}>
                  {!imageError ? (
                    <Image
                      src="/claudio_resume/images/profile-photo.jpg"
                      alt={resumeData.name}
                      fill
                      className="object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <span className="text-4xl">👤</span>
                    </div>
                  )}
                </div>
                <h1 className="text-[9pt] font-bold text-center uppercase tracking-tight mb-0 leading-tight" style={{ marginBottom: '0', lineHeight: '1.2', marginTop: '0' }}>
                  {resumeData.name}
                </h1>
                <p className="text-[6pt] text-center leading-tight mt-0.5" style={{ marginTop: '0.125rem', lineHeight: '1.2', marginBottom: '0' }}>
                  {resumeData.title}
                </p>
              </div>

              {/* Languages */}
              <div className="mb-1" style={{ marginBottom: '4pt', marginTop: '0', padding: '0' }}>
                <h3 className="text-[7pt] font-bold uppercase mb-0.5 pb-0.5 border-b border-yellow-500/50" style={{ marginBottom: '2pt', marginTop: '0', paddingBottom: '2pt', paddingTop: '0' }}>
                  Languages
                </h3>
                <div className="space-y-[2px]">
                  {resumeData.languages.map((lang, index) => {
                    const percentage = getLanguagePercentage(lang.level)
                    return (
                      <div key={index} className="mb-[2px]" style={{ marginBottom: index < resumeData.languages.length - 1 ? '2pt' : '0', marginTop: index === 0 ? '0' : '2pt', padding: '0' }}>
                        <div className="flex justify-between items-center mb-[1px]" style={{ marginBottom: '1pt', marginTop: '0', padding: '0' }}>
                          <span className="text-[6pt] leading-none" style={{ lineHeight: '1', margin: '0', padding: '0' }}>{lang.name}</span>
                          <span className="text-[5pt] text-yellow-400 leading-none" style={{ lineHeight: '1', margin: '0', padding: '0' }}>{percentage}%</span>
                        </div>
                        <div className="w-full h-[2px] bg-gray-600 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Core Competencies */}
              <div className="mb-1" style={{ marginBottom: '4pt', marginTop: '0', padding: '0' }}>
                <h3 className="text-[7pt] font-bold uppercase mb-0.5 pb-0.5 border-b border-yellow-500/50" style={{ marginBottom: '2pt', marginTop: '0', paddingBottom: '2pt', paddingTop: '0' }}>
                  Core Competencies
                </h3>
                <ul className="space-y-[2px] mb-0.5" style={{ marginBottom: '2pt', marginTop: '0', paddingTop: '0' }}>
                  {resumeData.coreCompetencies.map((competency, index) => (
                    <li key={index} className="text-[5.5pt] leading-tight" style={{ lineHeight: '1.2', marginBottom: index < resumeData.coreCompetencies.length - 1 ? '1pt' : '0' }}>
                      {competency}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Expertise */}
              <div className="mb-1" style={{ marginBottom: '4pt', marginTop: '0', padding: '0' }}>
                <h3 className="text-[7pt] font-bold uppercase mb-0.5 pb-0.5 border-b border-yellow-500/50" style={{ marginBottom: '2pt', marginTop: '0', paddingBottom: '2pt', paddingTop: '0' }}>
                  Technical Expertise
                </h3>
                <ul className="space-y-[2px]" style={{ marginTop: '0', paddingTop: '0' }}>
                  {resumeData.technicalExpertise.map((expertise, index) => (
                    <li key={index} className="text-[5pt] leading-tight" style={{ lineHeight: '1.2', marginBottom: index < resumeData.technicalExpertise.length - 1 ? '1pt' : '0' }}>
                      {expertise}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              <div className="mb-1" style={{ marginBottom: '4pt', marginTop: '0', padding: '0' }}>
                <h3 className="text-[7pt] font-bold uppercase mb-0.5 pb-0.5 border-b border-yellow-500/50" style={{ marginBottom: '2pt', marginTop: '0', paddingBottom: '2pt', paddingTop: '0' }}>
                  Education
                </h3>
                <div className="space-y-0.5">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="text-[5.5pt]" style={{ marginBottom: index < resumeData.education.length - 1 ? '0.25rem' : '0', lineHeight: '1.2' }}>
                      <p className="font-bold leading-tight" style={{ marginBottom: '0', lineHeight: '1.2' }}>{edu.period}</p>
                      <p className="font-bold uppercase text-[4.5pt] leading-tight" style={{ marginBottom: '0', lineHeight: '1.2' }}>{edu.institution}</p>
                      <ul className="list-disc pl-2.5 mt-0.5" style={{ marginTop: '0.125rem', marginBottom: '0' }}>
                        <li className="text-[4.5pt] leading-tight" style={{ lineHeight: '1.2' }}>{edu.degree}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="mb-0" style={{ marginBottom: '0' }}>
                <h3 className="text-[7pt] font-bold uppercase mb-0.5 pb-0.5 border-b border-yellow-500/50" style={{ marginBottom: '0.125rem', paddingBottom: '0.125rem' }}>
                  Contact
                </h3>
                <div className="space-y-0.5 text-[5.5pt]" style={{ marginTop: '0' }}>
                  <p className="leading-tight" style={{ marginBottom: '0.125rem', lineHeight: '1.2' }}>{resumeData.location}</p>
                  <p className="break-all text-[4.5pt] leading-tight" style={{ marginBottom: '0.125rem', lineHeight: '1.2' }}>{resumeData.email}</p>
                  <p className="text-[4.5pt] leading-tight" style={{ marginBottom: '0', lineHeight: '1.2' }}>{resumeData.linkedin}</p>
                </div>
              </div>
            </aside>

            {/* Right Content - Page 1 */}
            <div className="bg-white overflow-hidden" style={{ width: '12.5cm', flex: '0 0 12.5cm', minWidth: '12.5cm', maxWidth: '12.5cm', boxSizing: 'border-box', padding: '0.8cm', paddingBottom: '3cm', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
              {/* Summary */}
              <div className="mb-4">
                <h2 className="text-[10pt] font-bold uppercase text-[#1e293b] mb-2 pb-1 border-b border-gray-300">
                  Summary
                </h2>
                <p className="text-[9pt] leading-relaxed text-gray-800">
                  {resumeData.summary}
                </p>
              </div>

              {/* Key Achievements */}
              <div className="mb-3">
                <h2 className="text-[10pt] font-bold uppercase text-[#1e293b] mb-2 pb-1 border-b border-gray-300">
                  Key Achievements
                </h2>
                <ul className="space-y-1">
                  {resumeData.keyAchievements.map((achievement, index) => (
                    <li key={index} className="flex gap-1 text-[7pt] leading-snug">
                      <span className="text-yellow-600">•</span>
                      <span className="flex-1 text-gray-800">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Professional Experience - First 2 jobs */}
              <div style={{ marginBottom: '2cm', paddingBottom: '1cm' }}>
                <h2 className="text-[10pt] font-bold uppercase text-[#1e293b] mb-2 pb-1 border-b border-gray-300">
                  Professional Experience
                </h2>
                <div className="space-y-2">
                  {resumeData.experience.slice(0, 2).map((exp, index) => (
                    <div key={index} className="relative pl-4 border-l-2 border-gray-300">
                      <div className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-yellow-500 border-2 border-white" />
                      
                      <div>
                        <h3 className="text-[9pt] font-bold text-gray-900 leading-tight">{exp.role}</h3>
                        <p className="text-[7.5pt] font-semibold text-gray-700">{exp.company}</p>
                        <p className="text-[6.5pt] text-gray-600 mb-1">
                          {exp.period} {exp.duration && `(${exp.duration})`} • {exp.location}
                        </p>
                        {exp.technologies && (
                          <p className="text-[6pt] text-gray-600 mb-1">
                            {exp.technologies.join(", ")}
                          </p>
                        )}
                        <ul className="space-y-0.5 mt-1">
                          {exp.responsibilities.map((resp, respIndex) => {
                            const urlMatch = resp.match(/\(https?:\/\/[^)]+\)/)
                            const text = urlMatch ? resp.replace(urlMatch[0], '').trim() : resp
                            return (
                              <li key={respIndex} className="flex gap-1 text-[7.5pt] leading-relaxed text-gray-800">
                                <span className="text-yellow-600 flex-shrink-0">•</span>
                                <span className="flex-1">{text}</span>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Page 2+ - With Minimal Sidebar */}
          <div className="bg-white shadow-2xl print-page-two mt-8 flex flex-row overflow-hidden" style={{ width: '21cm', minHeight: '29.7cm', minWidth: '21cm', maxWidth: '21cm', display: 'flex', flexDirection: 'row', transform: 'none' }}>
            {/* Minimal Sidebar on Page 2+ */}
            <aside className="bg-[#1e293b] text-white p-3 flex flex-col flex-shrink-0" style={{ width: '7.5cm', minWidth: '7.5cm', maxWidth: '7.5cm', flex: '0 0 7.5cm', boxSizing: 'border-box', transform: 'none' }}>
              {/* Profile Photo */}
              <div className="flex flex-col items-center mb-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500 mb-1">
                  {!imageError ? (
                    <Image
                      src="/claudio_resume/images/profile-photo.jpg"
                      alt={resumeData.name}
                      fill
                      className="object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-700">
                      <span className="text-4xl">👤</span>
                    </div>
                  )}
                </div>
                <h1 className="text-[9pt] font-bold text-center uppercase tracking-tight mb-0.5 leading-tight">
                  {resumeData.name}
                </h1>
                <p className="text-[6pt] text-center leading-tight">
                  {resumeData.title}
                </p>
              </div>

              {/* Contact */}
              <div className="mb-0">
                <h3 className="text-[7pt] font-bold uppercase mb-0.5 pb-0.5 border-b border-yellow-500/50">
                  Contact
                </h3>
                <div className="space-y-0.5 text-[5.5pt]">
                  <p className="leading-tight">{resumeData.location}</p>
                  <p className="break-all text-[4.5pt] leading-tight">{resumeData.email}</p>
                  <p className="text-[4.5pt] leading-tight">{resumeData.linkedin}</p>
                </div>
              </div>
            </aside>

            {/* Right Content - Page 2+ */}
            <div className="bg-white overflow-hidden" style={{ width: '12.5cm', flex: '0 0 12.5cm', minWidth: '12.5cm', maxWidth: '12.5cm', boxSizing: 'border-box', padding: '0.8cm', paddingTop: '2.5cm', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
            {/* Remaining Experience */}
            <div>
              <h2 className="text-[11pt] font-bold uppercase text-[#1e293b] mb-3 pb-1 border-b-2 border-gray-300">
                Professional Experience (continued)
              </h2>
              <div className="space-y-3">
                {resumeData.experience.slice(2).map((exp, index) => (
                  <div key={index} className="relative pl-4 border-l-2 border-gray-300">
                    <div className="absolute left-[-7px] top-2 w-3 h-3 rounded-full bg-yellow-500 border-2 border-white" />
                    
                    <div>
                      <h3 className="text-[10pt] font-bold text-gray-900 leading-tight">{exp.role}</h3>
                      <p className="text-[8pt] font-semibold text-gray-700">{exp.company}</p>
                      <p className="text-[7pt] text-gray-600 mb-1">
                        {exp.period} {exp.duration && `(${exp.duration})`} • {exp.location}
                      </p>
                      {exp.technologies && (
                        <p className="text-[6.5pt] text-gray-600 mb-1">
                          {exp.technologies.join(", ")}
                        </p>
                      )}
                      <ul className="space-y-0.5 mt-1">
                        {exp.responsibilities.map((resp, respIndex) => {
                          const urlMatch = resp.match(/\(https?:\/\/[^)]+\)/)
                          const text = urlMatch ? resp.replace(urlMatch[0], '').trim() : resp
                          return (
                            <li key={respIndex} className="flex gap-1 text-[8pt] leading-relaxed text-gray-800">
                              <span className="text-yellow-600 flex-shrink-0">•</span>
                              <span className="flex-1">{text}</span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Patents & Innovations */}
            <div className="mt-4">
              <h2 className="text-[11pt] font-bold uppercase text-[#1e293b] mb-3 pb-1 border-b-2 border-gray-300">
                Patents & Innovations
              </h2>
              <div className="space-y-2">
                {resumeData.patents.map((patent, index) => (
                  <div key={index} className="text-[8pt]">
                    <p className="font-bold text-gray-900 mb-0.5">{patent.name}</p>
                    {patent.description && (
                      <p className="text-gray-700 leading-relaxed">{patent.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .print-page-one,
        .print-page-two {
          width: 21cm !important;
          max-width: 21cm !important;
          min-width: 21cm !important;
          display: flex !important;
          flex-direction: row !important;
        }
        .print-page-one aside,
        .print-page-two aside {
          width: 7.5cm !important;
          min-width: 7.5cm !important;
          max-width: 7.5cm !important;
          flex: 0 0 7.5cm !important;
          flex-shrink: 0 !important;
          box-sizing: border-box !important;
        }
        .print-page-one > div:last-child,
        .print-page-two > div:last-child {
          width: 12.5cm !important;
          min-width: 12.5cm !important;
          max-width: 12.5cm !important;
          flex: 0 0 12.5cm !important;
          box-sizing: border-box !important;
        }
        @media print {
          * {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            width: 21cm;
          }
          @page {
            size: A4 portrait;
            margin: 0;
          }
          .print-page-one {
            page-break-after: always;
            page-break-inside: avoid;
            height: 29.7cm !important;
            width: 21cm !important;
            max-width: 21cm !important;
            display: flex !important;
            flex-direction: row !important;
            overflow: hidden !important;
          }
          .print-page-two {
            page-break-before: always;
            width: 21cm !important;
            max-width: 21cm !important;
            display: flex !important;
            flex-direction: row !important;
            overflow: hidden !important;
          }
          aside {
            flex: 0 0 7.5cm !important;
            width: 7.5cm !important;
            min-width: 7.5cm !important;
            max-width: 7.5cm !important;
            overflow: hidden !important;
            padding: 9pt !important;
            margin: 0 !important;
            position: relative !important;
            box-sizing: border-box !important;
            max-height: 29.7cm !important;
          }
          aside * {
            line-height: 1.2 !important;
            margin-top: 0 !important;
          }
          aside > div {
            margin-bottom: 0.5rem !important;
          }
          aside > div:last-child {
            margin-bottom: 0 !important;
          }
          aside h1, aside h3 {
            margin-bottom: 0.25rem !important;
            margin-top: 0 !important;
          }
          aside p, aside span {
            margin-bottom: 0 !important;
            margin-top: 0 !important;
          }
          aside [class*="space-y"] > * + * {
            margin-top: 2px !important;
          }
          aside [class*="mb-\\["] {
            margin-bottom: 2px !important;
          }
          .print-page-one > div:last-child {
            flex: 0 0 12.5cm !important;
            width: 12.5cm !important;
            min-width: 12.5cm !important;
            max-width: 12.5cm !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0.8cm !important;
            padding-bottom: 3cm !important;
            box-sizing: border-box !important;
            position: relative !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
          .print-page-two > div:last-child {
            flex: 0 0 12.5cm !important;
            width: 12.5cm !important;
            min-width: 12.5cm !important;
            max-width: 12.5cm !important;
            overflow: hidden !important;
            margin: 0 !important;
            padding: 0.8cm !important;
            padding-top: 2.5cm !important;
            box-sizing: border-box !important;
            position: relative !important;
            word-wrap: break-word !important;
            overflow-wrap: break-word !important;
          }
        }
      `}</style>
    </div>
  )
}

export default function PrintPreview() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>}>
      <PrintPreviewContent />
    </Suspense>
  )
}

