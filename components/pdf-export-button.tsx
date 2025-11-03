"use client"

import { useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFExportButtonProps {
  contentRef: React.RefObject<HTMLDivElement>
}

export function PDFExportButton({ contentRef }: PDFExportButtonProps) {
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
    documentTitle: "Claudio_Alberton_Batista_Resume",
    pageStyle: `
      @page {
        size: A4;
        margin: 0.8cm;
      }
      @media print {
        * {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
        }
        body {
          font-size: 11pt;
          line-height: 1.4;
        }
        .card, [class*="Card"] {
          break-inside: avoid;
          page-break-inside: avoid;
        }
        section {
          padding-top: 1rem !important;
          padding-bottom: 1rem !important;
        }
      }
    `,
  })

  return (
    <Button
      onClick={handlePrint}
      size="lg"
      className="fixed bottom-8 right-8 z-50 shadow-2xl hover:shadow-3xl transition-all no-print group"
    >
      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
      Download PDF
    </Button>
  )
}
