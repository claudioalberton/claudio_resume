"use client"

import { useRouter } from "next/navigation"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PDFExportButtonProps {
  contentRef?: React.RefObject<HTMLDivElement>
}

export function PDFExportButton({ contentRef }: PDFExportButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    // Navigate to print-preview and auto-trigger export
    router.push("/print-preview?autoExport=true")
  }

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-8 right-8 z-50 shadow-2xl hover:shadow-3xl transition-all no-print group"
    >
      <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
      Download PDF
    </Button>
  )
}
