import React from 'react';
import { Mail, Linkedin, MapPin, Github, Globe } from 'lucide-react';
import { Education, Certification, SocialLink, Skill, Project } from './types';

export const PERSONAL_INFO = {
  name: "Alok Gautam",
  role: "Web Developer",
  location: "Silao, Bihar, India",
  email: "a79456504@gmail.com",
  summary: `I’m a B.Tech student in Computer Science and Engineering with a passion for coding and ethical hacking. I enjoy solving problems, learning new technologies, and improving my skills every day. I’m interested in ethical hacking to help make digital systems more secure and reliable. I’m also working on improving my coding abilities in languages like C++ and Python to create better software solutions.`,
  objective: "To contribute my best to the organization irrespective of the kind of project undertaken and to utilize my skills and to perform the job to the best of my ability with the zeal and willing to learn."
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    username: PERSONAL_INFO.email,
    icon: <Mail className="w-5 h-5" />
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/webdevloperalokgautam",
    username: "webdevloperalokgautam",
    icon: <Linkedin className="w-5 h-5" />
  }
];

export const EDUCATION: Education[] = [
  {
    institution: "Bihar Engineering University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2024 - Present",
    description: "Pursuing advanced studies at Government Engineering College, Sheikhpura."
  },
  {
    institution: "Government Polytechnic Bhagalpur",
    degree: "Diploma in Computer Science & Engineering",
    period: "2021 - 2024",
    description: "Completed diploma coursework under SBTE."
  }
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Python Essentials 1", issuer: "Python Institute" },
  { name: "Ethical Hacker", issuer: "Generic" },
  { name: "Mastercard - Cybersecurity Job Simulation", issuer: "Forage" },
  { name: "Duelist", issuer: "Unknown" },
  { name: "Overview of Space Geotechnology", issuer: "Unknown" }
];

export const SKILLS: Skill[] = [
  {
    category: "Core Competencies",
    items: ["Web Development", "Ethical Hacking", "Computer Literacy"]
  },
  {
    category: "Languages & Tools",
    items: ["Python", "C++", "Space Technology Tools"]
  },
  {
    category: "Interests",
    items: ["Space Technology", "Cybersecurity", "Problem Solving"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Network Vulnerability Scanner",
    description: "A Python-based security tool designed to scan networks for open ports and potential vulnerabilities. Generates comprehensive reports to assist system administrators in securing infrastructure.",
    technologies: ["Python", "Nmap", "Socket Programming"],
    github: "https://github.com/webdevloperalokgautam" 
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive personal portfolio website built with React and Tailwind CSS. Features smooth scrolling, mobile-responsive design, and interactive UI components.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/webdevloperalokgautam"
  },
  {
    title: "Space Mission Tracker",
    description: "An interactive dashboard that tracks active satellite missions and visualizes telemetry data using public space agency APIs. Demonstrates proficiency in data handling and UI design.",
    technologies: ["React", "D3.js", "REST APIs"],
    link: "#"
  }
];