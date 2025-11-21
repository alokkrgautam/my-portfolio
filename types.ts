import React from 'react';

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: React.ReactNode;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}