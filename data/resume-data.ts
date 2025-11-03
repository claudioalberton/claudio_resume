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
  title: "Senior IT Operations Engineer | Development and Innovation Manager | Senior Software Engineer ",
  location: "Araucária, Paraná, Brazil",
  email: "claudioalberton11@gmail.com",
  linkedin: "www.linkedin.com/in/claudio-alberton-batista-366891120",
  summary: "Technical leader and senior software engineer with 19+ years of experience transforming businesses through innovative solutions. Starting with ERP systems development, I've evolved into architecting world-class software for the automotive industry, including Latin America's first 3D aligner and the world's most advanced laser alignment systems. Currently leading IT operations at a Canadian gaming company while managing technology development for automotive equipment in Brazil. I specialize in full-stack development, cloud solutions (AWS), AI integration for daily operations, and building scalable systems that drive measurable productivity gains. My work has resulted in multiple patents and enterprise-level automation solutions for major brands.",
  keyAchievements: [
    "Aligner Digi 4: World's most advanced laser aligner for light and heavy vehicles, detecting laser beams at distances exceeding 20 meters",
    "Aligner Digi 5: New version of the world's most advanced aligner with more robust software and cloud services integration",
    "Aligner 3D Flash: First three-dimensional aligner in Latin America for light vehicles",
    "Aligner 3D Flash II: AI-powered aligner with integrated camera for vehicle plate detection",
    "TcDataCloud: AWS-based automated solution for real-time vehicle database updates",
    "Dynamic Software Block: Windows service with AWS management portal for proactive application control (Dynamic Blocking; Integrated Management Portal; Offline Self-Locking Mechanism)",
    "Randon Automation: Developed production line automation software for Randon, integrating their factory systems with our software and equipment, significantly increasing factory productivity"
  ],
  experience: [
    {
      company: "Uken Games",
      role: "Senior IT Operations Engineer",
      location: "Toronto, Canada",
      period: "April 2025 - Present",
      responsibilities: [
        "Device Lifecycle & Asset Management: Implemented scalable logistics and resale strategy for device distribution",
        "Cost & Subscription Optimization: Conducted software audits and refined licensing strategy",
        "IT Support & Employee Experience: Built Jira-based support model and standardized onboarding/offboarding",
        "Internal IT Management System: Designed centralized platform for devices, subscriptions, and lifecycle management",
        "Automation & Governance: Created Slack-to-Jira workflows and automated renewal alerts",
        "AI Integration: Utilize AI tools in daily work routine for programming, code generation, planning, and automation",
        "Musicalia: Developed fully functional music guessing game with multiplayer mode and 3 game types using 8 AIs (https://music-guess-game-mu.vercel.app/)",
        "Laptop Logistics Solution: Created innovative solution to resolve company laptop logistics challenges"
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
        "Structured the development department with project management and planning to streamline innovation and solutions to the automotive market",
        "Responsible for the development and maintenance of the company's tech overseeing the development of new products and the maintenance of the existing ones",
        "Full Stack Developer of 3D Aligner Software and Geometria Software",
        "Software architecture and planning",
        "Creating schedules and managing projects",
        "Agile project management using Scrum",
        "Architect of new solutions for the automotive market",
        "AI Integration: Utilize AI tools in daily work routine for programming assistance, code generation, planning, and development optimization",
        "Responsible for implementing and managing tax incentives related to the company's development, namely 'Lei do Bem' and 'Ex-tarifário', successfully qualifying projects for government incentives",
        "Establishing partnerships with solution providers",
        "Development of software for automotive equipment and creating the ecosystem of solutions involved"
      ]
    },
    {
      company: "Truck Center",
      role: "IT Manager",
      location: "Araucária, Brazil",
      period: "Jan 2011 - Dec 2019",
      duration: "9 years",
      technologies: ["SQL Server", "Delphi Pascal", "Active Directory", "ERP Korp", ".NET C#", "Teamwork"],
      responsibilities: [
        "Responsible for the operation of the company's IT infrastructure and management software (CRM, ERP), as well as for technological innovations and the management of department staff",
        "Development of custom control software for industrial management",
        "Participation in designing sales incentive campaigns and merchandising materials",
        "Management and creation of online advertising campaigns using the Google Adwords tool to boost web results"
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
        "DBA responsible for the database",
        "Responsible for deploying the company's first ERP system (Octopus), which covered all departments",
        "Migrated the databases from the two previous systems to the SQL Server database",
        "Developed new ERP modules using the Pascal Delphi language and SQL"
      ]
    },
    {
      company: "Esense Sistemas",
      role: "Software Developer",
      location: "Curitiba, Brazil",
      period: "Jan 2006 - Jun 2006",
      duration: "6 months",
      responsibilities: [
        "Worked as a software developer in Java and served as an Oracle DBA for the Compiere ERP system",
        "Gained experience in developing new system functionalities, creating queries, views, and procedures, as well as in managing the database"
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
      degree: "Information Systems",
      institution: "Centro Universitário UniOpet",
      period: "Mar 2005 - Mar 2008"
    },
    {
      degree: "Post-Graduate in Databases",
      institution: "Universidade Positivo",
      period: "All coursework completed; final project pending."
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
    "Image Processing",
    "AI Tools (Programming, Code Generation, Planning)",
    "ERP Systems",
    "Software Architecture",
    "AI-Assisted Development",
    "OCR Technology",
    "Scrum/Agile",
    "Active Directory",
    "Database Administration",
    "AI-Powered Planning & Automation"
  ],
  languages: [
    { name: "English", level: "Full Professional" },
    { name: "Spanish", level: "Professional Working" },
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
