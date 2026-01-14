import type { Project, Experience } from './types';

export const PERSONAL_INFO = {
  name: "H C Prajwal",
  title: "AI & ML Intern | Backend Developer",
  bio: "Ambitious Information Science Engineer and AI Intern specializing in building intelligent systems, scalable backends, and automated CI/CD pipelines. Practical experience with FastAPI, LLMs, Docker, and Kubernetes.",
  email: "hcprajwal9901@gmail.com",
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI-powered FastAPI Generator",
    category: "Machine Learning",
    description: "Production-ready API generator from high-level ideas. Features OpenAPI spec generation, JSON schema preview, and diff-based regeneration.",
    image: "src/pics/fastapi_generator.png",
    tags: ["FastAPI", "OpenAI", "Python", "LLM", "React"],
    liveUrl: "https://fastapi-generator.vercel.app/",
    codeUrl: "https://github.com/hcprajwal9901",
  },
  {
    id: 2,
    title: "Virtual Mechanic (AI Diagnostics)",
    category: "Machine Learning",
    description: "AI assistant for vehicle diagnosis using RAG, Gemini, and Qdrant. Processes text, image, audio, and video for real-time fault detection.",
    image: "src/pics/virtual_mechanic.png",
    tags: ["NLP", "RAG", "Gemini", "Qdrant", "Python"],
    liveUrl: "https://hcprajwal9901.github.io/virtual_mechanic_AI/",
    codeUrl: "https://github.com/hcprajwal9901/virtual_mechanic_AI",
  },
  {
    id: 3,
    title: "Face Recognition Home Security",
    category: "Machine Learning",
    description: "Real-time face recognition system using computer vision (OpenCV, YOLO) and CCTV input for enhanced home security.",
    image: "src/pics/face_security.png",
    tags: ["OpenCV", "YOLO", "Python", "AI", "Computer Vision"],
    liveUrl: "#",
    codeUrl: "https://github.com/hcprajwal9901/face_recognition_for_home_cctv",
  },
  {
    id: 4,
    title: "Modern Personal Portfolio",
    category: "Web Development",
    description: "A premium portfolio website featuring glassmorphism, dynamic filtering, and a modern aesthetic built with React and Tailwind CSS.",
    image: "src/pics/personal_portfolio.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://hcprajwal9901.github.io/portfoilio_website/",
    codeUrl: "https://github.com/hcprajwal9901/portfoilio_website/"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Networkers Home",
    position: "AI Intern",
    period: "Dec 2025 – Present",
    description: [
      "Developed an AI-powered FastAPI backend code generator for LLM tasks, supporting rapid scaffolding and deployment.",
      "Contributed to an AI-based personalized tutoring web app with STT/TTS pipelines for voice-driven learning.",
      "Utilized Supabase for data storage, metadata management, and scalable backend integration."
    ]
  },
  {
    id: 2,
    company: "Elevate Labs",
    position: "DevOps Intern",
    period: "Sep 2025 – Nov 2025",
    description: [
      "Designed and implemented CI/CD pipelines using GitHub Actions, Docker, and Jenkins.",
      "Managed containerized applications using Docker and Kubernetes (Minikube) for local orchestration.",
      "Automated portfolio deployment via GitHub Pages CI/CD.",
      "Monitored system performance using Netdata in a Dockerized environment."
    ]
  }
];

export const SKILLS = [
  "Python", "FastAPI", "React", "TypeScript", "Node.js",
  "LangChain", "PyTorch", "TensorFlow", "Generative AI", "transformers", "LLM", "RAG", "VectorDB",
  "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Supabase",
  "SQL", "PostgreSQL", "Git", "UI/UX Design"
];

export const SOCIAL_LINKS = {
  github: "https://github.com/hcprajwal9901",
  linkedin: "https://www.linkedin.com/in/h-c-prajwal-b063b024b/",
  resume: "resume.pdf"
};

export const ICONS = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  externalLink: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
  )
}
