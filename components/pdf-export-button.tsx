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
        margin: 1cm;
      }
      @media print {
        body {
          print-color-adjust: exact;
          -webkit-print-color-adjust: exact;
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
