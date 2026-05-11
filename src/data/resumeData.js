// src/data/resumeData.js

export const resumeData = {
  personalInfo: {
    name: "Qais Zarifi",
    title: "Software Engineer & Operations Lead",
    email: "zarifiqais1@gmail.com",
    phone: "+1 (925) 681-8152",
    location: "Bay Point, CA",
    profilePic: "/profile.png",
    linkedin: "https://www.linkedin.com/in/qais-zarifi-238928270/",
    github: "https://github.com/zarifiqais1",
  },

  summary: {
    technical:
      "Results-oriented Software Engineer mastering full-stack development. Expert in React.js, Firebase, and algorithmic problem-solving with 500+ hours of intensive coding exercises.",
    operational:
      "Former Amazon Operations Lead (L3) with a unique blend of technical expertise and operational excellence, optimizing complex workflows in high-pressure environments.",
  },

  education: [
    {
      year: "2026",
      title: "SWE Career Track Graduate",
      institution: "Springboard",
    },
    {
      year: "2024",
      title: "Amazon TOM Lead",
      institution: "L3 Promotion & Management",
    },
    {
      year: "2022",
      title: "Amazon Ops Lead",
      institution: "SCK8 Fulfillment Center",
    },
    {
      year: "2018-2020",
      title: "B.S. Computer Science",
      institution: "Rana Institute of Tech",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Meme Generator PRO",
      description:
        "A dynamic, full-stack SaaS application designed for rapid deployment, utilizing Firebase for high availability and Canvas API for image processing.",
      link: "https://meme-generator-pro-three.vercel.app/login",
      image: "meme-pic.png",
      tags: ["React", "Firebase", "Canvas API", "Google OAuth"],
    },
    {
      id: 2,
      title: "Cash Quiz Engine",
      description:
        "An interactive, value-based reward application designed to test logic and decision-making through dynamic DOM manipulation.",
      link: "https://cash-quiz.vercel.app/",
      image: "cash-quiz-pic.png",
      tags: ["JavaScript", "DOM Manipulation", "Vercel"],
    },
    {
      id: 3,
      title: "V4 Engineering Portfolio",
      description:
        "A high-performance, responsive professional portfolio built with React 19 and Tailwind v4, featuring advanced CSS effects and glassmorphism.",
      link: "https://qais-z-resume.vercel.app/", // Update this link after Vercel deployment
      image: "Qais-z-Resume.png",
      tags: ["React", "Tailwind v4", "PostCSS", "Vite"],
    },
  ],

  skills: [
    { name: "React & Redux", percentage: 95 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "Hardware/IT (A+)", percentage: 95 },
    { name: "Operations Mgmt", percentage: 92 },
  ],

  credentials: [
    {
      title: "CompTIA A+ (Hardware)",
      institution: "CompTIA",
      description:
        "Computer Architecture, Technical Maintenance, and IT Support Operations.",
    },
    {
      title: "Web Designing Diploma",
      institution: "Advanced Training",
      description:
        "Advanced UI/UX Principles and Frontend Performance Optimization.",
    },
    {
      title: "Transportation Ops Mgmt",
      institution: "Amazon L3 Academy",
      description:
        "Advanced L3 Leadership, Logistics Technology, and Workflow Optimization.",
    },
  ],
};
