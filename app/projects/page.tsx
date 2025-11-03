"use client"

import { motion } from "framer-motion"
import { ArrowLeft, FolderKanban } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { resumeData } from "@/data/resume-data"

export default function ProjectsPage() {
  // Extract projects from key achievements and experience
  const projects = [
    {
      name: "Musicalia",
      description: "Fully functional music guessing game with multiplayer mode and 3 game types using 8 AIs. Features real-time voice-to-text recognition using Whisper AI and ChatGPT API for intelligent gameplay. Implements WebSocket technology for seamless multiplayer experiences with real-time audio recognition processing",
      url: "https://music-guess-game-mu.vercel.app/",
      technologies: ["AI Integration", "Whisper AI", "ChatGPT API", "WebSocket", "Real-Time Processing", "Voice Recognition", "Multiplayer", "Game Development"],
      company: "Uken Games"
    },
    {
      name: "Laptop Logistics Solution",
      description: "Comprehensive logistics management system designed to streamline laptop distribution, tracking, and lifecycle management across the organization. Implemented scalable processes for device distribution, upgrades, secure returns, and resale strategies for unused equipment, significantly improving asset traceability and operational efficiency",
      technologies: ["Logistics", "Asset Management", "Automation", "Device Lifecycle", "Inventory Management", "Process Optimization"],
      company: "Uken Games"
    },
    {
      name: "IT Management System",
      description: "Comprehensive IT management platform streamlining all IT automations and processes. Centralized system managing IT onboarding and offboarding processes, centralizing company subscriptions with automated renewal warnings, and processing all IT controls in one unified platform",
      technologies: ["IT Automation", "Process Automation", "Subscription Management", "Onboarding/Offboarding", "Workflow Automation", "Centralized Systems"],
      company: "Uken Games"
    },
    {
      name: "Aligner Digi 4",
      description: "World's most advanced laser aligner for light and heavy vehicles, detecting laser beams at distances exceeding 20 meters. Developed the Geometria software and managed the project as Technology Development Manager",
      technologies: ["Laser Technology", "Image Processing", ".NET C#", "Project Management"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Aligner Digi 5",
      description: "New version of the world's most advanced aligner with more robust software and cloud services integration. Developed the Geometria software and managed the project as Technology Development Manager",
      technologies: ["Cloud Services", "AWS", "Software Architecture", "Project Management"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Aligner 3D Flash",
      description: "First three-dimensional aligner in Latin America for light vehicles. Utilizes two high-resolution cameras and advanced algorithms to isolate target plates from complex environments. Achieves exceptional precision, detecting all vehicle alignment angles with 0.2 millimeter precision. Advanced computer vision algorithms enable accurate target detection across varying lighting and environmental conditions. Managed the project as Technology Development Manager",
      technologies: ["3D Technology", "Image Processing", "High-Resolution Cameras", "Computer Vision", "Precision Measurement", "Target Isolation", "Full Stack Development", "Project Management"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Aligner 3D Flash II",
      description: "First Brazilian aligner to feature AI integration for detecting vehicle license plates and using AI algorithms to detect the aligner target. Pioneering implementation of computer vision and machine learning in automotive alignment equipment. Managed the project as Technology Development Manager",
      technologies: ["AI Integration", "OCR Technology", "Computer Vision", "Machine Learning", "Target Detection", "Project Management"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Universal 360",
      description: "Advanced alignment system project. Managed the project as Technology Development Manager",
      technologies: ["Project Management", "Automotive Equipment", "Alignment Systems"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "TcDataCloud",
      description: "Groundbreaking project that created a comprehensive ecosystem of AWS solutions to provide real-time updates for worldwide vehicle databases across all aligner systems. Enables seamless, automated synchronization of vehicle data globally, ensuring all alignment equipment has access to the most current vehicle specifications and information",
      technologies: ["AWS", "Cloud Services", "Real-Time Updates", "Global Database", "Ecosystem Architecture", "Automation", "Vehicle Data Management"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Dynamic Software Block",
      description: "Windows service with AWS management portal for proactive application control (Dynamic Blocking; Integrated Management Portal; Offline Self-Locking Mechanism)",
      technologies: ["Windows Service", "AWS", "Security"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Randon Automation",
      description: "Production line automation software for Randon, integrating their factory systems with our software and equipment, significantly increasing factory productivity",
      technologies: ["Automation", "Industrial Systems", "Integration"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Camera Lens Calibration Software",
      description: "Software for calibration of camera lenses using C# and visual processing technologies",
      technologies: [".NET C#", "Visual Processing", "Image Processing"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Jiga Testing Software",
      description: "Advanced testing software developed to validate and test the illuminating boards of the 3D aligner system. Built using C# with AForge and OpenCV libraries for precise image processing and analysis",
      technologies: [".NET C#", "Image Processing", "AForge", "OpenCV"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Image Processing Testing Suite",
      description: "Comprehensive image processing software designed to test various scenarios, threshold algorithms, and visual processing techniques. Enables rigorous validation and optimization of computer vision algorithms through systematic testing across multiple lighting conditions and image parameters",
      technologies: [".NET C#", "Image Processing", "Computer Vision", "Algorithm Testing"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "TcDataCloud Control",
      description: "Comprehensive control and management system for the TcDataCloud ecosystem. Provides full administrative control including payment management, user blocking and access control, and all operational controls related to the TcDataCloud platform. Enables centralized management of the entire worldwide vehicle database service",
      technologies: ["AWS", "Cloud Services", "Control Systems", ".NET C#", "Payment Management", "User Management", "Administrative Control", "Platform Management"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Project DCL (Direction Control Lights)",
      description: "Hardware communication system using pipeline communication protocols to interface with infrared LEDs and control the direction control lights of the 3D aligner system",
      technologies: [".NET C#", "Pipeline Communication", "Hardware Integration", "IoT", "Device Control"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "MGP Project",
      description: "Comprehensive factory management software designed to control all tasks of factory machines, streamlining production control and buffering processes across the entire factory floor",
      technologies: [".NET C#", "SQL Server", "Factory Automation", "Production Control", "Industrial Systems"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Hybrid E-Commerce Platform",
      description: "Multi-functional web platform combining e-commerce, ERP integration, CRM for sales representatives, and support portal for technicians. Seamlessly synchronized with company ERP system to provide unified business operations across sales, customer support, and online commerce",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS", "HTML", "ERP Integration", "E-Commerce", "CRM"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Factory Live Dashboard",
      description: "Real-time live dashboard displaying factory highlights and production metrics to all factory personnel. Provides instant visibility into key performance indicators and operational status across the entire production floor",
      technologies: [".NET C#", "Real-Time Systems", "Dashboard", "Data Visualization"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "SolidWorks ERP Integration",
      description: "Java-based integration system that automatically updates parts from SolidWorks projects into the ERP system process, streamlining the workflow between engineering design and enterprise resource planning",
      technologies: ["Java", "ERP Integration", "SolidWorks", "CAD Integration", "Process Automation"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Electronic Board Manufacturing Workflow Redesign",
      description: "Comprehensive redesign of the entire production workflow for electronic board manufacturing. Implemented industry best practices, environmental improvements including anti-static painting, and safety equipment upgrades to significantly enhance production quality and reliability",
      technologies: ["Process Improvement", "Lean Manufacturing", "Quality Assurance", "Workflow Optimization", "ESD Protection"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "ERP Automation Environment",
      description: "Created comprehensive automation environment within the ERP system using internal scripting capabilities. Designed integrated modules combining SQL procedures and triggers to automatically synchronize production processes with planning systems, eliminating manual data entry and reducing errors",
      technologies: ["ERP Systems", "SQL Server", "Stored Procedures", "Triggers", "Automation", "Production Planning", "Database Integration"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "Lei do Bem Project",
      description: "Managed the development and innovation activities across the entire company to qualify for government tax benefits under Brazil's Lei do Bem (Law of Good). Oversaw extensive data management and control processes to document R&D activities, ensuring successful annual tax benefit applications. The company achieved significant tax reductions every year since project launch",
      technologies: ["Project Management", "Tax Incentive Management", "R&D Management", "Data Management", "Government Compliance", "Financial Optimization"],
      company: "Truck Center Automotive Equipments"
    },
    {
      name: "IT Infrastructure Modernization",
      description: "Transformed the company's IT infrastructure by transitioning to professional server environment. Implemented Active Directory for centralized user and resource management, Windows Server for enterprise-grade services, manageable switches for network control, and Windows Server firewall for enhanced security",
      technologies: ["Active Directory", "Windows Server", "Network Infrastructure", "Manageable Switches", "Firewall Configuration", "IT Infrastructure", "Network Security"],
      company: "Truck Center Automotive Equipments"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <FolderKanban className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Projects Delivered</h1>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all hover:scale-105 border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FolderKanban className="h-5 w-5 text-primary" />
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm mt-2">
                    {project.company}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm mb-4 block"
                    >
                      Visit Project →
                    </a>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

