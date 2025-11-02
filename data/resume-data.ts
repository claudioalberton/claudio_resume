export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  duration?: string;
  technologies?: string[];
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Patent {
  name: string;
  description?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
  keyAchievements: string[];
  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];
  patents: Patent[];
}

export const resumeData: ResumeData = {
  name: "Claudio Alberton Batista",
  title: "Senior IT Operations Engineer | Development and Innovation Manager",
  location: "Araucária, Paraná, Brazil",
  email: "claudioalberton11@gmail.com",
  linkedin: "www.linkedin.com/in/claudio-alberton-batista-366891120",
  summary: "I have always been fascinated by technology and the transformative impact it has on people's lives. I began my career working with ERP systems, engaging in both the development and management of these systems. Later, I started managing the IT ecosystem at my current company and found my inspiration in creating innovative solutions. In recent years, I have had the opportunity to develop pioneering software and equipment for the automotive equipment market in Brazil.",
  keyAchievements: [
    "Aligner Digi 4: World's most advanced laser aligner for light and heavy vehicles (20+ meters range)",
    "Aligner 3D Flash: First three-dimensional aligner in Latin America",
    "Aligner 3D Flash II: AI-powered vehicle plate detection aligner",
    "TcDataCloud: AWS-based automated database updating solution",
    "Dynamic Software Block: Windows service with AWS management portal for application control"
  ],
  experience: [
    {
      company: "Uken Games",
      role: "Senior IT Operations Engineer",
      location: "Toronto, Canada",
      period: "April 2025 - Present",
      responsibilities: [
        "Device Lifecycle & Asset Management",
        "Cost & Subscription Optimization",
        "IT Support & Employee Experience",
        "Internal IT Management System",
        "Automation & Governance"
      ]
    },
    {
      company: "Truck Center Automotive Equipments",
      role: "Technology Development Manager",
      location: "Araucária, Brazil",
      period: "Dec 2019 - Present",
      duration: "5 years 11 months",
      technologies: [".NET C#", "Visual Studio", "Full Stack", "AForge", "OpenCV", "OCR", "Pascal Delphi", "Scrum"],
      responsibilities: [
        "Full Stack Developer of 3D Aligner Software and Geometria Software",
        "Software architecture and planning",
        "Management of tax incentives (Lei do Bem, Ex-tarifário)"
      ]
    },
    {
      company: "Truck Center",
      role: "IT Manager",
      location: "Araucária, Brazil",
      period: "Jan 2011 - Dec 2019",
      duration: "9 years",
      technologies: ["SQL Server", "Delphi Pascal", "Active Directory", "ERP Korp", ".NET C#"],
      responsibilities: [
        "IT infrastructure and ERP/CRM management",
        "Custom industrial management software development",
        "Google Adwords campaign management"
      ]
    },
    {
      company: "Truck Center",
      role: "System Administrator",
      location: "Araucária, Brazil",
      period: "Feb 2007 - Jan 2011",
      duration: "4 years",
      technologies: ["Pascal Delphi", "SQL Server", "Oracle"],
      responsibilities: [
        "Deployed first ERP system (Octopus)",
        "Database migration to SQL Server"
      ]
    },
    {
      company: "Esense Sistemas",
      role: "Software Developer",
      location: "Curitiba, Brazil",
      period: "Jan 2006 - Jun 2006",
      duration: "6 months",
      responsibilities: [
        "Java development and Oracle DBA for Compiere ERP"
      ]
    }
  ],
  education: [
    {
      degree: "MBA in Software Engineering",
      institution: "Universidade Tecnológica Federal do Paraná",
      period: "Aug 2021 - Oct 2022"
    },
    {
      degree: "Bachelor in Information Systems",
      institution: "Faculdade de Tecnologia Opet",
      period: "Mar 2005 - Mar 2008"
    },
    {
      degree: "Post-Graduate in Databases",
      institution: "Universidade Positivo",
      period: "Completed"
    }
  ],
  skills: [
    "Networking",
    "Communication",
    "Infrastructure Management",
    ".NET C#",
    "Full Stack Development",
    "SQL Server",
    "AWS",
    "ERP Systems",
    "Software Architecture",
    "Computer Vision (OpenCV, AForge)",
    "OCR Technology",
    "Scrum/Agile",
    "Active Directory",
    "Database Administration"
  ],
  languages: [
    { name: "English", level: "Full Professional" },
    { name: "Spanish", level: "Professional Working" },
    { name: "Italian", level: "Elementary" },
    { name: "Portuguese", level: "Native" }
  ],
  patents: [
    {
      name: "3D FLASH SOFTWARE",
      description: "First three-dimensional vehicle alignment software in Latin America"
    },
    {
      name: "GEOMETRIA 3",
      description: "Advanced vehicle geometry analysis software"
    },
    {
      name: "Alinhador DIGI 4",
      description: "World's most advanced laser aligner with 20+ meter range capability"
    }
  ]
};
