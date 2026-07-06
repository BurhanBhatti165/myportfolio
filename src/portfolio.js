/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Burhan Bhatti",
  title: "Hi all, I'm Burhan",
  subTitle: emoji(
    "Computer Science Graduate from FAST NUCES, Lahore, specializing in AI/ML and full-stack development. Proficient in Python, React, Django, FastAPI, and LangChain, with hands-on industry experience building scalable AI systems, RAG pipelines, and multi-agent workflows. Passionate about applying cutting-edge AI to real-world problems. Open to AI-focused engineering roles and meaningful collaborations 🚀"
  ),
  resumeLink:
    "/Muhammad_Burhan_Bhatti_resume.pdf", // Place this PDF inside public/ directory
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BurhanBhatti165",
  linkedin: "https://www.linkedin.com/in/burhanbhatti165/",
  gmail: "burhanbhatti166@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "AI/ML & Full-Stack Expertise",
  subTitle: "COMPUTER SCIENCE GRADUATE SPECIALIZING IN ARTIFICIAL INTELLIGENCE, MACHINE LEARNING, AND MODERN FULL-STACK DEVELOPMENT",
  skills: [
    emoji(
      "🤖 Build end-to-end AI systems using LangChain, LangGraph, RAG pipelines, and multi-agent workflows"
    ),
    emoji("⚡ Develop highly interactive, responsive web applications with React.js and modern web technologies"),
    emoji(
      "🚀 Create scalable full-stack applications with Django, FastAPI, and Python backend technologies"
    ),
    emoji(
      "🔮 Implement real-time AI features using STT/TTS with Whisper and ElevenLabs"
    ),
    emoji(
      "🧠 Design and fine-tune neural networks (EfficientNet, ResNet) for computer vision and NLP tasks"
    ),
    emoji(
      "🤝 Architect production-grade AI chatbots (multi-turn, tool use, retrieval) with LangChain & FastAPI"
    ),
    emoji(
      "⚙️ Build AI-driven CRM automation pipelines with intelligent lead routing and web scraping systems"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      logo: "https://img.icons8.com/color/96/python.png",
      officialUrl: "https://python.org/"
    },
    {
      skillName: "React.js",
      logo: "https://img.icons8.com/color/96/react-native.png",
      officialUrl: "https://reactjs.org/"
    },
    {
      skillName: "FastAPI",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      officialUrl: "https://fastapi.tiangolo.com/"
    },
    {
      skillName: "Django",
      logo: "https://img.icons8.com/color/96/django.png",
      officialUrl: "https://djangoproject.com/"
    },
    {
      skillName: "JavaScript",
      logo: "https://img.icons8.com/color/96/javascript.png",
      officialUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
      skillName: "C++",
      logo: "https://img.icons8.com/color/96/c-plus-plus-logo.png",
      officialUrl: "https://isocpp.org/"
    },
    {
      skillName: "SQL",
      logo: "https://img.icons8.com/color/96/sql.png",
      officialUrl: "https://www.postgresql.org/"
    },
    {
      skillName: "HTML/CSS",
      logo: "https://img.icons8.com/color/96/html-5.png",
      officialUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
      skillName: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      officialUrl: "https://pytorch.org/"
    },
    {
      skillName: "LangChain",
      logo: "https://img.icons8.com/color/96/link.png",
      officialUrl: "https://langchain.com/"
    },
    {
      skillName: "HuggingFace",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/huggingface.svg",
      officialUrl: "https://huggingface.co/"
    },
    {
      skillName: "Git",
      logo: "https://img.icons8.com/color/96/git.png",
      officialUrl: "https://git-scm.com/"
    },
    {
      skillName: "OpenCV",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      officialUrl: "https://opencv.org/"
    },
    {
      skillName: "ChromaDB / FAISS",
      logo: "https://img.icons8.com/color/96/database.png",
      officialUrl: "https://www.trychroma.com/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "FAST-NUCES, Lahore",
      logo: require("./assets/images/fast.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 – June 2026",
      desc: "Graduated with a focus on AI/ML and software engineering. Built scalable AI systems, RAG pipelines, and full-stack web applications throughout my degree.",
      descBullets: [
        "Specialized in AI/ML, LangChain, and multi-agent workflow development",
        "Strong foundation in software engineering, data structures, and algorithms",
        "Developed production-ready projects including a full-stack AI learning platform and a custom CRM system"
      ]
    },
    {
      schoolName: "Punjab College, Sheikhupura",
      logo: require("./assets/images/pgc.png"),
      subHeader: "Intermediate (Pre-Engineering)",
      duration: "2019 – 2021",
      desc: "Completed pre-engineering with a strong foundation in mathematics and sciences.",
      descBullets: ["Pre-Engineering focus with mathematics and physics"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML & LLM Systems",
      progressPercentage: "88%"
    },
    {
      Stack: "Frontend / React Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Python & Backend Systems",
      progressPercentage: "85%"
    },
    {
      Stack: "LangChain, RAG & Multi-Agent Workflows",
      progressPercentage: "82%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Machine Learning Engineer",
      company: "Mavericks United",
      companylogo: require("./assets/images/mavericks.jpg"),
      date: "May 2025 – Feb 2026",
      desc: "Engineered end-to-end CRM automation pipelines, eliminating manual lead handling across the sales workflow and building scalable AI solutions for operational efficiency.",
      descBullets: [
        "Engineered end-to-end CRM automation pipelines, eliminating manual lead handling across the sales workflow",
        "Designed specialized AI agents to streamline operations across distinct business departments",
        "Built web scraping systems across 25+ sources for automated lead generation and CRM enrichment",
        "Implemented intelligent lead auto-assignment routing based on team member tech stack and experience"
      ]
    },
    {
      role: "AI Intern",
      company: "Neuronexus",
      companylogo: require("./assets/images/neuron.jpg"),
      date: "Jun 2025 – Aug 2025",
      desc: "Fine-tuned LLMs and built complete ML pipelines and AI applications using LangChain, RAG, and LangGraph in a remote setting.",
      descBullets: [
        "Fine-tuned LLMs using full fine-tuning and QLoRA for domain-specific tasks",
        "Built complete ML pipelines (data cleaning, augmentation, training, evaluation) for multiple models",
        "Developed AI projects using LangChain, RAG, and LangGraph",
        "Configured scalable MCP (Model Context Protocol) servers"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Hidden per user request
  display: false // Open Source section removed
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "NOTABLE PROJECTS I'VE BUILT — FROM AI PLATFORMS TO PRODUCTION FULL-STACK SYSTEMS",
  projects: [
    {
      image: require("./assets/images/sparkle_ai.png"),
      projectName: "Sparkle AI – Personalized Learning Platform",
      projectDesc: "Full-stack AI learning platform with adaptive content delivery based on user learning styles. Features multiple AI tutor agents (visual, kinesthetic, analogy-based) matched via a 20-question onboarding assessment, a RAG pipeline with ChromaDB for precise source attribution, and a ChatGPT-style conversational dashboard built with React, TypeScript, and Framer Motion.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/BurhanBhatti165/sparkle-ai"
        }
      ]
    },
    {
      image: require("./assets/images/age_gender.png"),
      projectName: "Age & Gender Detection System",
      projectDesc: "Fine-tuned EfficientNet-B3 and ResNet-50 on a 23K-image UTKFace dataset for simultaneous age and gender prediction. Designed a shared-backbone dual-task architecture achieving 94.21% gender accuracy and 4.42 years MAE. Built a real-time OpenCV inference pipeline with temporal smoothing and runtime model switching.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/BurhanBhatti165/Face-And-Gender-Recognization"
        }
      ]
    },
    {
      image: require("./assets/images/resume_interviewer.png"),
      projectName: "AI Resume Interviewer",
      projectDesc: "Full-stack AI interview platform with real-time voice (STT/TTS via Whisper & ElevenLabs) and text-based interaction. Uses FAISS and LangChain for resume parsing, semantic retrieval, and dynamic personalized questioning. Features JWT authentication, multi-round interview memory, and a React.js frontend with Material-UI and Framer Motion.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/BurhanBhatti165/Resume-Builder_"
        }
      ]
    },
    {
      image: require("./assets/images/custom_crm.png"),
      projectName: "Custom CRM System",
      projectDesc: "Full-featured CRM for Mavericks United with role-based access control, hierarchical user management, and JWT-secured authentication. Includes lead and team management modules with tracking and assignment workflows, a responsive React frontend, and a RAG-based chatbot for context-aware help and workflow guidance.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/BurhanBhatti165"
        }
      ]
    },
    {
      image: require("./assets/images/skiller.png"),
      projectName: "Skill Share Platform",
      projectDesc: "Platform for students to register for courses, review instructors, and track learning progress. Built with React, ASP.NET, and Django for comprehensive learning management — supporting multi-role user flows and a clean, responsive frontend.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/BurhanBhatti165/skill-share-"
        }
      ]
    },
    {
      image: require("./assets/images/fast.png"),
      projectName: "PrepFAST",
      projectDesc: "Web platform enabling FAST-NUCES students to access past exam papers and generate AI-based practice questions using Django and Python. Implemented paper evaluation features to enhance exam preparation through interactive AI-powered feedback.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/BurhanBhatti165/PrepFast"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Certifications and cool stuff I've done!",

  achievementsCards: [
    {
      title: "Building AI Browser Agents",
      subtitle:
        "Completed DeepLearning.AI course on building AI agents that navigate and interact with websites. Learned agent frameworks, evaluation, monitoring, and fine-tuning for reliable web automation.",
      image: require("./assets/images/deeplearning_ai.png"),
      imageAlt: "DeepLearning.AI Certificate — Building AI Browser Agents",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.deeplearning.ai/accomplishments/3b5b8664-e16a-4e88-82da-330178ff3426?usp=sharing"
        }
      ]
    },
    {
      title: "MCP: Build Rich-Context AI Apps with Anthropic",
      subtitle:
        "Completed DeepLearning.AI course on Model Context Protocol (MCP). Learned to build AI apps that access tools, data, and prompts using MCP architecture for enhanced AI capabilities.",
      image: require("./assets/images/deeplearning_ai.png"),
      imageAlt: "DeepLearning.AI Certificate — MCP Rich-Context AI Apps",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.deeplearning.ai/accomplishments/6926a2ec-aed7-4bc6-8ea1-a66b1b04dbdb?usp=sharing"
        }
      ]
    },

    {
      title: "Software Engineering Best Practices",
      subtitle: "Demonstrated ability to build scalable production-ready projects, collaborate in cross-functional teams, and continuously explore emerging technologies.",
      image: require("./assets/images/deeplearning_ai.png"),
      imageAlt: "Software Engineering Best Practices",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/BurhanBhatti165"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With a passion for building cool AI and full-stack applications, I love to write and teach others what I've learned.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@burhanbhatti166/building-ai-powered-applications-with-langchain-e8920ccddc16",
      title: "Building AI-Powered Applications with LangChain",
      description:
        "Exploring the capabilities of LangChain in building intelligent applications and the integration of RAG systems for enhanced user experiences."
    },
    {
      url: "https://medium.com/@burhanbhatti166/modern-web-development-with-react-and-django-872cfaa3afaa",
      title: "Modern Web Development with React and Django",
      description:
        "Best practices for building scalable web applications using React.js frontend and Django backend with modern software engineering practices."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "AI in Modern Web Applications",
      subtitle: "Tech Talk at FAST-NUCES, Lahore",
      slides_url: "https://slides.com/burhanbhatti165/ai-web-apps",
      event_url: "https://www.linkedin.com/in/burhanbhatti165/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+92-313-6994851",
  email_address: "burhanbhatti166@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
