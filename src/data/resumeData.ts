export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Full Stack' | 'Backend / Cloud' | 'Frontend / UI' | 'AI Integration';
  tagline: string;
  problem: string;
  solution: string;
  keyContributions: string[];
  technologies: string[];
  metricsBadge?: string;
  companyContext: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: { name: string; tag?: string }[];
}

export const resumeData = {
  personal: {
    name: "Sagar Devani",
    role: "Full Stack .NET & Generative AI Developer",
    subtitle: "Angular, Azure & AI-Assisted Engineering",
    headline: "Architecting scalable enterprise applications with .NET Core and Angular.",
    valueProposition: "Senior Full Stack Engineer with 3+ years delivering resilient enterprise web applications, high-performance RESTful APIs, and responsive Angular SPAs backed by Microsoft Azure and AI-augmented engineering workflows.",
    location: "Ahmedabad, Gujarat, India",
    email: "sagardevani942@gmail.com",
    phone: "+91-9157396154",
    linkedin: "https://www.linkedin.com/in/devani-sagar",
    github: "https://github.com/sagardevani",
    availability: "Available for Full-time Roles & High-Impact Opportunities",
    bannerImage: "./sagar-banner.jpg",
    resumePdf: "./Sagar_Devani_Resume.pdf",
    yearsExperience: "3+",
  },

  metrics: [
    {
      value: "3+ Years",
      label: "Enterprise Experience",
      sublabel: ".NET Core, Angular, SQL Server & Azure"
    },
    {
      value: "50%",
      label: "Deployment Cycle Cut",
      sublabel: "Via automated Azure DevOps CI/CD pipelines"
    },
    {
      value: "40%",
      label: "Latency Reduction",
      sublabel: "Optimized RESTful APIs & LINQ query pipelines"
    },
    {
      value: "90%",
      label: "On-Time Sprint Delivery",
      sublabel: "Agile execution, code reviews & triage leadership"
    },
  ],

  about: {
    summary: `Full Stack Engineer with 3+ years designing and delivering enterprise web applications using .NET Core, C#, ASP.NET Core Web API, and Angular (TypeScript), backed by SQL Server and deployed on Microsoft Azure (App Service, Functions, Azure SQL Database, DevOps CI/CD).`,
    architecturePhilosophy: `My engineering approach centers on Clean Architecture, SOLID design principles, and Dependency Injection to ensure systems remain modular, extensible, and easily testable as enterprise requirements evolve.`,
    aiPerspective: `I leverage AI coding assistants—GitHub Copilot, Claude Code, Cursor, and ChatGPT—in daily production workflows to accelerate delivery and enforce stringent code quality in Agile teams, while actively deepening knowledge in Generative AI, prompt engineering, and RAG architectures.`,
    highlights: [
      {
        title: "Clean Enterprise Architecture",
        desc: "Strict adherence to SOLID principles, Repository Pattern, and Dependency Injection for loosely coupled, testable services."
      },
      {
        title: "High-Throughput APIs & Data",
        desc: "End-to-end RESTful API engineering with ASP.NET Core, Entity Framework Core, SQL Server, and fine-tuned LINQ execution."
      },
      {
        title: "Modern Reactive Frontends",
        desc: "High-performance Angular single-page applications with RxJS, NgRx state management, lazy loading, and route guards."
      },
      {
        title: "Cloud & DevOps Reliability",
        desc: "Production deployments on Microsoft Azure (App Service, Functions, Azure SQL) with automated Azure Pipelines CI/CD."
      }
    ]
  },

  skillCategories: [
    {
      title: "Backend & APIs",
      description: "Enterprise service architecture, REST APIs, and micro-integrations",
      iconName: "Server",
      skills: [
        { name: ".NET Core", tag: "Primary" },
        { name: "ASP.NET Core", tag: "Primary" },
        { name: "C#", tag: "Language" },
        { name: "ASP.NET Core Web API", tag: "Primary" },
        { name: "ASP.NET MVC" },
        { name: "RESTful API Design & Integration" },
        { name: "JWT Authentication" },
        { name: "Dependency Injection" }
      ]
    },
    {
      title: "Frontend Engineering",
      description: "TypeScript-driven reactive SPAs and modular component systems",
      iconName: "Layout",
      skills: [
        { name: "Angular (2+)", tag: "Primary" },
        { name: "TypeScript", tag: "Language" },
        { name: "JavaScript", tag: "Language" },
        { name: "RxJS", tag: "Reactive" },
        { name: "NgRx", tag: "State" },
        { name: "HTML5 / CSS3" },
        { name: "Bootstrap" },
        { name: "AngularJS" },
        { name: "jQuery" },
        { name: "Component UI Libraries" }
      ]
    },
    {
      title: "Data & ORM",
      description: "Relational database modeling, query tuning, and ORM abstractions",
      iconName: "Database",
      skills: [
        { name: "SQL Server", tag: "Database" },
        { name: "Entity Framework Core", tag: "ORM" },
        { name: "LINQ", tag: "Query" },
        { name: "T-SQL", tag: "Language" },
        { name: "SQL", tag: "Language" },
        { name: "MySQL" },
        { name: "Query Optimization" }
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Continuous integration, cloud deployment, and infrastructure management",
      iconName: "Cloud",
      skills: [
        { name: "Microsoft Azure", tag: "Cloud" },
        { name: "Azure App Service" },
        { name: "Azure Functions" },
        { name: "Azure SQL Database" },
        { name: "Azure DevOps" },
        { name: "Azure Pipelines (CI/CD)", tag: "CI/CD" },
        { name: "Git Version Control" }
      ]
    },
    {
      title: "AI-Assisted & Generative AI",
      description: "Modern AI toolchains and emerging agentic application architectures",
      iconName: "Cpu",
      skills: [
        { name: "GitHub Copilot", tag: "Daily Prod" },
        { name: "Claude Code", tag: "Daily Prod" },
        { name: "Cursor IDE", tag: "Daily Prod" },
        { name: "ChatGPT", tag: "Daily Prod" },
        { name: "LLM Concepts", tag: "Developing" },
        { name: "Prompt Engineering", tag: "Developing" },
        { name: "RAG (Retrieval-Augmented Gen)", tag: "Developing" }
      ]
    },
    {
      title: "Architecture & Practices",
      description: "Software design standards, engineering rigor, and development lifecycle",
      iconName: "ShieldCheck",
      skills: [
        { name: "Clean Architecture" },
        { name: "SOLID Principles" },
        { name: "OOP" },
        { name: "Repository Pattern" },
        { name: "Unit Testing" },
        { name: "Agile / Scrum" },
        { name: "Code Review Leadership" }
      ]
    },
    {
      title: "Data Structures & Algorithms",
      description: "Algorithmic foundation and computational problem solving in C#",
      iconName: "Binary",
      skills: [
        { name: "Problem Solving in C#" },
        { name: "Arrays & Strings" },
        { name: "Linked Lists" },
        { name: "Stacks & Queues" },
        { name: "Hash Tables" },
        { name: "Trees & Graphs" },
        { name: "Recursion" },
        { name: "Sorting & Searching" }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      id: "qx-global",
      role: "Senior Software Engineer",
      company: "QX Global Group",
      location: "Ahmedabad, Gujarat, India",
      period: "Apr 2026 – Present",
      current: true,
      type: "Full-Time",
      summary: "Leading the architecture and cloud delivery of enterprise full-stack web applications with ASP.NET Core and Angular, driving system modernization, API optimization, and CI/CD automation.",
      highlights: [
        "Architected and integrated scalable full-stack applications using ASP.NET Core Web API and Angular, applying Clean Architecture and Dependency Injection so modules could be developed, tested, and integrated with external systems independently — improving maintainability and extensibility.",
        "Deployed and managed cloud services on Microsoft Azure (App Service, Azure SQL Database) with Azure DevOps CI/CD pipelines and Git-based source control, cutting deployment time by 50%.",
        "Optimized RESTful APIs and LINQ queries that power downstream integrations, reducing average server response time by 40% and improving throughput.",
        "Led Agile sprint execution — planning, peer code reviews, and production triage — while proactively communicating status and risks to stakeholders, hitting a 90% on-time completion rate.",
        "Contributed to engineering standards and code-review guidelines for the team, and used AI coding assistants (GitHub Copilot, Claude Code) to speed up implementation and catch issues earlier in the review cycle."
      ],
      technologies: [
        "ASP.NET Core Web API",
        "Angular",
        "C#",
        "Clean Architecture",
        "Dependency Injection",
        "Microsoft Azure",
        "Azure App Service",
        "Azure SQL Database",
        "Azure DevOps (CI/CD)",
        "LINQ & Query Optimization",
        "Git",
        "Agile/Scrum",
        "GitHub Copilot",
        "Claude Code"
      ],
      metrics: [
        { label: "Deployment Time", value: "-50%" },
        { label: "Server Latency", value: "-40%" },
        { label: "Sprint Completion", value: "90%" }
      ]
    },
    {
      id: "cybage",
      role: "Software Engineer",
      company: "Cybage Software",
      location: "Gandhinagar, Gujarat, India",
      period: "Nov 2023 – Apr 2026",
      current: false,
      type: "Full-Time",
      summary: "Engineered scalable enterprise web applications, built high-performance Angular SPAs, designed secure RESTful Web APIs, and created a reusable cross-project UI component library.",
      highlights: [
        "Built full-stack enterprise applications with an Angular (TypeScript) front end and .NET Core back end, following OOP and Repository Pattern for clean, testable, and integration-friendly code.",
        "Developed high-performance Angular SPAs with lazy loading, route guards, and RxJS/NgRx state management, improving load times and UX consistency.",
        "Designed secure RESTful Web APIs in ASP.NET Core for integration with multiple internal systems, and built a reusable component-based UI library that reduced front-end development time across projects.",
        "Collaborated cross-functionally with QA, product, and client stakeholders throughout the sprint cycle, translating requirements into technical designs and resolving production issues."
      ],
      technologies: [
        "Angular (TypeScript)",
        ".NET Core",
        "ASP.NET Core Web API",
        "RxJS",
        "NgRx",
        "Repository Pattern",
        "OOP",
        "SQL Server",
        "REST APIs",
        "UI Component Library",
        "Lazy Loading & Route Guards"
      ],
      metrics: [
        { label: "Architecture", value: "Repository Pattern" },
        { label: "State", value: "RxJS / NgRx" },
        { label: "Efficiency", value: "Reusable UI Library" }
      ]
    },
    {
      id: "rushkar",
      role: "Software Development Intern",
      company: "Rushkar Technology Pvt. Ltd.",
      location: "Ahmedabad, Gujarat, India",
      period: "Jan 2023 – Apr 2023",
      current: false,
      type: "Internship",
      summary: "Gained foundational industrial development experience in the .NET ecosystem, working on web application modules, debugging, and SQL database operations.",
      highlights: [
        "Assisted in development, testing, and debugging of .NET web application modules.",
        "Built foundational industrial skills in C#, ASP.NET, and SQL Server database queries and procedures.",
        "Participated in sprint testing, code issue identification, and module verification."
      ],
      technologies: [
        "C#",
        "ASP.NET",
        ".NET Web Applications",
        "SQL Server",
        "Debugging & Unit Testing"
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "enterprise-clean-arch",
      title: "Modular Enterprise Core Platform & External Integration Engine",
      category: "Full Stack",
      tagline: "Scalable ASP.NET Core Web API & Angular micro-modular architecture deployed on Azure",
      problem: "Enterprise client systems required high-extensibility and autonomous deployment without regression risks when onboarding third-party service integrations.",
      solution: "Engineered an end-to-end full-stack solution utilizing Clean Architecture, strict Dependency Injection, and isolated business layers. Paired with high-throughput ASP.NET Core APIs and an intuitive Angular frontend.",
      keyContributions: [
        "Structured domain, application, and infrastructure layers under Clean Architecture principles for independent testing and module replacement.",
        "Fine-tuned data access using Entity Framework Core and LINQ, slashing server latency by 40% on downstream endpoints.",
        "Configured Azure DevOps CI/CD pipelines targeting Azure App Service and Azure SQL Database, cutting deployment cycles by 50%."
      ],
      technologies: [
        "ASP.NET Core Web API",
        ".NET Core",
        "Angular",
        "TypeScript",
        "Clean Architecture",
        "Azure App Service",
        "Azure SQL",
        "Azure Pipelines CI/CD",
        "LINQ"
      ],
      metricsBadge: "40% Latency Cut | 50% CI/CD Boost",
      companyContext: "Architected at QX Global Group"
    },
    {
      id: "reactive-spa-system",
      title: "High-Performance Reactive Angular SPA & Reusable UI System",
      category: "Frontend / UI",
      tagline: "Enterprise-grade Angular application powered by RxJS, NgRx, and reusable design modules",
      problem: "Multiple distributed internal teams suffered from fragmented frontend codebases, slow initial bundle loads, and state synchronization friction across complex dashboards.",
      solution: "Engineered a streamlined Angular SPA architecture leveraging lazy-loaded feature modules, functional route guards, centralized NgRx state stores, and a unified reusable UI component library.",
      keyContributions: [
        "Implemented route guards and route-level code splitting/lazy loading to significantly accelerate initial page rendering.",
        "Constructed predictable reactive state flows using RxJS streams and NgRx store/effects for multi-tenant data consistency.",
        "Published a reusable UI component library that substantially shortened front-end turnaround for parallel engineering teams."
      ],
      technologies: [
        "Angular (TypeScript)",
        "RxJS",
        "NgRx",
        "Bootstrap / CSS3",
        "Lazy Loading",
        "Route Guards",
        "Reusable UI Library"
      ],
      metricsBadge: "Modular Component Library",
      companyContext: "Engineered at Cybage Software"
    },
    {
      id: "secure-api-gateway",
      title: "Secure Distributed RESTful Integration Services",
      category: "Backend / Cloud",
      tagline: "Mission-critical backend REST APIs with JWT authentication and Repository Pattern",
      problem: "Disparate corporate internal systems required unified, secure, and type-safe data access with high reliability and verifiable test coverage.",
      solution: "Designed and implemented robust ASP.NET Core RESTful APIs adhering to the Repository Pattern, featuring centralized JWT token validation, standardized error handling middleware, and optimized SQL Server schemas.",
      keyContributions: [
        "Implemented decoupled Repository Pattern layers with Entity Framework Core for high maintainability and mockable unit tests.",
        "Protected cross-system endpoints with JWT-based authorization and granular role checks.",
        "Engineered reliable exception filters and unified HTTP status handling for fault-tolerant downstream client operations."
      ],
      technologies: [
        "ASP.NET Core",
        "C#",
        "Entity Framework Core",
        "SQL Server",
        "JWT Authentication",
        "Repository Pattern",
        "Unit Testing"
      ],
      metricsBadge: "Enterprise Security & Speed",
      companyContext: "Engineered at Cybage Software"
    },
    {
      id: "ai-assisted-engineering",
      title: "AI-Augmented Engineering Workflow & Agentic Exploration",
      category: "AI Integration",
      tagline: "Operationalizing GitHub Copilot, Claude Code, and Cursor into enterprise sprint cycles",
      problem: "Maintaining rapid sprint velocity while elevating code quality standards, reducing boilerplate overhead, and accelerating complex refactors.",
      solution: "Integrated state-of-the-art AI coding platforms (GitHub Copilot, Claude Code, Cursor, ChatGPT) into daily development workflows, alongside self-directed research into RAG and LLM agentic patterns.",
      keyContributions: [
        "Leveraged AI assistants for rapid code scaffolding, comprehensive edge-case test generation, and pull request pre-review triage.",
        "Applied prompt engineering techniques to dissect legacy logic and accelerate LINQ/SQL query optimizations.",
        "Actively applying self-directed RAG and LLM fundamentals to explore intelligent agent plugins for enterprise .NET and Azure ecosystems."
      ],
      technologies: [
        "GitHub Copilot",
        "Claude Code",
        "Cursor IDE",
        "ChatGPT",
        "Prompt Engineering",
        "LLM Concepts",
        "RAG Architecture"
      ],
      metricsBadge: "Enhanced Velocity & Quality",
      companyContext: "Production Practice & Self-Directed Research"
    }
  ] as ProjectItem[],

  aiHighlights: {
    badge: "AI-Augmented Engineering",
    title: "Modern Engineering Accelerated by AI",
    subtitle: "How I integrate AI into daily enterprise software engineering — backed by facts, not hype.",
    cards: [
      {
        title: "Daily Production Workflow",
        description: "Active, daily use of GitHub Copilot, Claude Code, Cursor, and ChatGPT across .NET Core and Angular development to accelerate delivery, draft robust unit tests, and perform early code-review defect detection.",
        points: [
          "Faster boilerplate and API contract implementation",
          "Comprehensive edge-case test suite generation",
          "Earlier bug detection during pull request reviews",
          "Accelerated exploration of complex LINQ and SQL queries"
        ],
        icon: "Workflow"
      },
      {
        title: "Developing Generative AI Foundation",
        description: "Self-directed, structured study of Generative AI and agentic application architectures, connecting modern LLM capabilities with enterprise backend and cloud systems.",
        points: [
          "LLM architecture concepts and token dynamics",
          "Advanced prompt engineering for deterministic code generation",
          "Retrieval-Augmented Generation (RAG) architectural patterns",
          "Extending .NET/Azure foundations into AI agents and plugins"
        ],
        icon: "Sparkles"
      },
      {
        title: "Engineering Rigor & Grounding",
        description: "Using AI responsibly as an engineer's force multiplier while maintaining uncompromising code ownership, strict verification, Clean Architecture, and SOLID principles.",
        points: [
          "Human-in-the-loop verification and architecture review",
          "Zero hallucinated dependencies or insecure endpoints",
          "Code adheres to strict type safety (TypeScript & C#)",
          "Production-tested CI/CD validation before deployment"
        ],
        icon: "CheckCircle2"
      }
    ]
  },

  education: {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "L.D. College of Engineering",
    location: "Ahmedabad, Gujarat, India",
    period: "2019 – 2023",
    grade: "CGPA: 8.96 / 10.0",
    description: "Comprehensive foundational computer science degree with emphasis on Data Structures & Algorithms, Software Engineering, Object-Oriented Programming, Operating Systems, and Database Management Systems.",
    leadership: [
      {
        role: "Computer/IT Department Coordinator",
        event: "National Tech Festival 'IRADA22'",
        description: "Led department-wide event logistics, cross-functional student coordination, scheduling, and technical contest management."
      },
      {
        role: "Event Manager",
        event: "National Tech Festival 'LAKSHYA20'",
        description: "Handled stakeholder coordination, event execution, and cross-team collaboration across university departments."
      }
    ]
  }
};
