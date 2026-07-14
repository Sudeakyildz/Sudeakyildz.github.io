export const pdfProfile = {
  name: 'SUDE NUR AKYILDIZ',
  title: 'Computer Engineer',
  focus: 'Software Development · QA Automation · AI · Computer Vision',
  location: 'Istanbul, Turkiye',
  phone: '+90 505 976 44 84',
  email: 'Sudeaky5@gmail.com',
  linkedin: 'https://linkedin.com/in/sude-a-9592b3343',
  linkedinLabel: 'linkedin.com/in/sude-a-9592b3343',
  github: 'https://github.com/Sudeakyildz',
  githubLabel: 'github.com/Sudeakyildz',
  website: 'https://sudeakyildz.github.io/Sudeakyildiz.github.io',
  summary:
    'Computer Engineering graduate with hands-on experience in full-stack software development, QA automation, and applied artificial intelligence. Passionate about building intelligent systems, solving real-world problems, and delivering reliable software through clean architecture, automated testing, and continuous learning.',
  goal:
    'Interested in Full-Stack Development, QA Automation, Artificial Intelligence, and Computer Vision. Seeking opportunities to build scalable software solutions while continuously improving software quality through automation and modern engineering practices.',
}

export const pdfHighlights = [
  '6+ Software Projects',
  '4 AI Projects',
  'QA Automation',
  'Full-Stack Development',
  'REST APIs',
  'Selenium Automation',
]

export const pdfSkillLevels = [
  {
    level: 'Advanced',
    items: [
      'Python',
      'C#',
      'SQL',
      'Pytest',
      'Selenium',
      'SeleniumBase',
      'ASP.NET Core',
      'OpenCV',
      'TensorFlow',
    ],
  },
  {
    level: 'Intermediate',
    items: [
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'PyTorch',
      'YOLOv8',
      'Git',
      'Docker',
      'REST APIs',
    ],
  },
  {
    level: 'Basic',
    items: ['Java', 'C++', 'Kubernetes', 'Azure'],
  },
]

export const pdfTools = [
  'GitHub',
  'Swagger',
  'JIRA',
  'Confluence',
  'VS Code',
  'Visual Studio',
  'Linux',
  'Postman',
  'Firebase',
]

export const pdfCoreStrengths = [
  'Full-Stack Web Development',
  'QA Automation & Testing',
  'Artificial Intelligence',
  'Computer Vision',
  'REST API Development',
  'Database Design',
  'CI/CD Fundamentals',
  'Agile / Scrum',
  'Git & Version Control',
]

export const pdfCurrentlyLearning = [
  'Playwright',
  'Jenkins',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'Microservices',
  'Azure',
]

export const pdfExperience = [
  {
    role: 'Software Development Intern',
    company: 'Icredible',
    period: 'Feb 2026 – Jun 2026',
    bullets: [
      'Contributed to Backend Development and QA Automation teams across product delivery and test automation.',
      'Built a full-stack e-commerce platform with ASP.NET Core, Entity Framework Core, SQL Server, JWT, and React.',
      'Designed a Python E2E automation framework using Pytest and SeleniumBase for authentication, repository, backup, and scheduling flows.',
      'Developed a Node.js test orchestration dashboard with SSE log streaming, test discovery, environment management, and reporting.',
      'Automated GitHub OAuth and email-based OTP/2FA verification workflows with diagnostic utilities for failure analysis.',
    ],
    tech: 'Python · Pytest · SeleniumBase · C# · ASP.NET Core · React · Node.js · SQL Server · Git',
  },
  {
    role: 'AI Developer Intern',
    company: 'Makine ve Kimya Endustrisi',
    period: 'Jul 2025 – Aug 2025',
    bullets: [
      'Developed a real-time AI system to detect hazardous materials in vehicle undercarriage images.',
      'Trained an EfficientNetB0 CNN via transfer learning on an imbalanced dataset, reaching 75% accuracy and 88% recall.',
      'Achieved 100% recall for hazardous detection with zero missed threats through class weighting and augmentation.',
      'Built a 30 FPS OpenCV pipeline with live camera integration and audible hazard alerts.',
    ],
    tech: 'Python · TensorFlow · Keras · OpenCV · NumPy · Pandas · scikit-learn',
  },
  {
    role: 'Intern',
    company: 'TNCGROUP',
    period: 'May 2025 – Jun 2025',
    bullets: [
      'Created a personal finance and budget analysis system in Excel with pivot tables and financial modeling.',
      'Designed residential floor plans in AutoCAD and produced interior visuals in Adobe Photoshop.',
    ],
    tech: 'Excel · AutoCAD · Adobe Photoshop',
  },
]

export type PdfProject = {
  title: string
  period: string
  problem: string
  solution: string
  technologies: string
  github: string
  role: string
  metrics?: string
  featured?: boolean
  category: 'QA' | 'Web' | 'AI'
}

const GH = 'https://github.com/Sudeakyildz'

export const pdfFeaturedProject: PdfProject = {
  title: 'GitSec Test Automation Framework',
  period: 'Feb 2026 – Jun 2026',
  problem:
    'Manual regression testing for authentication, repository management, backup/restore, and scheduling workflows was slow, error-prone, and difficult to scale across environments.',
  solution:
    'Built a Python-based E2E automation framework with Pytest and SeleniumBase, automated GitHub OAuth and OTP/2FA flows, implemented retry mechanisms, and developed a Node.js dashboard for real-time test orchestration, log streaming, and pass/fail reporting. Reduced manual regression effort and improved test execution reliability through reusable automation components.',
  technologies: 'Python · SeleniumBase · Pytest · Node.js · GitHub API · Selenium',
  github: `${GH}/TestAutomation`,
  role: 'QA Automation Engineer',
  featured: true,
  category: 'QA',
}

export const pdfSoftwareProjects: PdfProject[] = [
  {
    title: 'ASP.NET Core E-Commerce Platform',
    period: 'Feb 2026 – Jun 2026',
    problem:
      'A scalable, secure e-commerce solution was needed with layered architecture, authentication, and maintainable database operations.',
    solution:
      'Developed a full-stack platform using ASP.NET Core, Entity Framework Core, SQL Server, JWT authentication, and React with REST APIs and database migrations.',
    technologies: 'C# · ASP.NET Core · Entity Framework Core · SQL Server · React · JWT · Git',
    github: `${GH}/DotnetStore`,
    role: 'Full-Stack Developer',
    category: 'Web',
  },
  {
    title: 'Admin Dashboard — User & Order Management',
    period: '2025',
    problem:
      'Administrators needed a centralized panel to manage users, orders, and statistics with secure access control.',
    solution:
      'Built a React/Next.js admin dashboard with authentication, protected routes, dynamic filtering, statistics modules, and REST API integration.',
    technologies: 'React · Next.js · JavaScript · REST APIs',
    github: `${GH}/AdminDashboardUserOrderManagement`,
    role: 'Full-Stack Developer',
    category: 'Web',
  },
  {
    title: 'QR-Based Cafe Ordering System',
    period: '2025',
    problem:
      'Cafes required a contactless ordering flow accessible from mobile devices over a local network.',
    solution:
      'Created a QR-based ordering system with React frontend, Node.js/Express REST APIs, MySQL persistence, and validation/error handling.',
    technologies: 'Node.js · Express · React · MySQL',
    github: `${GH}/Web-BasedCafeOrderingProgram`,
    role: 'Full-Stack Developer',
    category: 'Web',
  },
  {
    title: 'Personal Website — N-Tier ASP.NET Core MVC',
    period: '2025',
    problem:
      'A maintainable personal web platform was needed with secure user management and modular business logic.',
    solution:
      'Developed an N-Tier ASP.NET Core MVC application with ASP.NET Identity, role-based authorization, Q&A modules, REST APIs, and custom request-logging middleware.',
    technologies: 'ASP.NET Core MVC · .NET 9 · EF Core · SQL Server · REST API',
    github: `${GH}/PersonalWebSite`,
    role: 'Full-Stack Developer',
    category: 'Web',
  },
]

export const pdfAiProjects: PdfProject[] = [
  {
    title: 'Vehicle Underbody Hazard Detection System',
    period: 'Jul 2025 – Aug 2025',
    problem:
      'Security checkpoints needed automated detection of hazardous materials in vehicle undercarriage images with zero missed threats.',
    solution:
      'Trained an EfficientNetB0 CNN with transfer learning on an imbalanced dataset and built a real-time OpenCV pipeline with live camera integration and audible alerts.',
    technologies: 'Python · TensorFlow · Keras · OpenCV · EfficientNet · scikit-learn',
    github: `${GH}/VehicleUnderbodyForeignMatterDetectionSystem`,
    role: 'AI Developer',
    metrics: '75% accuracy · 88% recall · 100% hazardous recall · 30 FPS real-time pipeline',
    category: 'AI',
  },
  {
    title: 'Forest Fire Detection System & Mobile App',
    period: '2025',
    problem:
      'Early wildfire detection required real-time analysis across desktop and mobile with instant notifications.',
    solution:
      'Built fire detection with YOLO and Mask R-CNN, a Flask API for live streaming, a desktop app, and a React Native mobile app with Firebase push notifications.',
    technologies: 'Python · PyTorch · YOLOv8 · Mask R-CNN · OpenCV · Flask · React Native · Firebase',
    github: `${GH}/Camera-BasedForestFireDetectionSystemAndMobileApplication`,
    role: 'AI / Computer Vision Developer',
    metrics: 'Real-time detection · Pixel-level annotated dataset · Desktop + mobile deployment',
    category: 'AI',
  },
  {
    title: 'Security System with Face Recognition & Hand Gestures',
    period: '2025',
    problem:
      'Access control systems needed multi-factor verification combining biometrics and gesture-based authentication.',
    solution:
      'Implemented face recognition with person-specific hand gesture verification, trained ML classifiers, and integrated a Turkish voice assistant with offline STT.',
    technologies: 'Python · OpenCV · MediaPipe · scikit-learn · Tkinter · Vosk · SQLite',
    github: `${GH}/SecuritySystemAndSmartAssistantWithFacialRecognitionAndHandGestures`,
    role: 'AI Developer',
    metrics: 'Real-time webcam processing · 5-sec face verification · Custom gesture + voice datasets',
    category: 'AI',
  },
  {
    title: 'Lie Detection via Micro-Expressions',
    period: '2025',
    problem:
      'Psychological assessment workflows needed automated analysis of micro-expressions during structured questioning.',
    solution:
      'Designed a DeepFace + Keras MLP pipeline with weighted ensemble scoring and built a PyQt5 desktop app with exportable reports.',
    technologies: 'Python · PyQt5 · DeepFace · TensorFlow · OpenCV · scikit-learn',
    github: `${GH}/LieDetectionWithMicroExpressionsAndPsychologicalQuestions`,
    role: 'AI Developer',
    metrics: '7D emotion feature vectors · 5-method ensemble · Lie probability scoring (0–1)',
    category: 'AI',
  },
]

export const pdfEducation = {
  degree: 'B.Sc. Computer Engineering',
  school: 'Bilecik Seyh Edebali University',
  period: '2022 – 2026',
  location: 'Bilecik, Turkiye',
}

export const pdfLanguages = [
  { name: 'English', level: 'B1 – B2' },
  { name: 'German', level: 'Basic' },
]

export const pdfCertificates: string[] = []
