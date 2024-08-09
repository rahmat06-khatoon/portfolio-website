import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaJava } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import SocialDistance from "@/public/SocialDistance.png";
import AWS_power from "@/public/AWS_power.png";
import EcomApp from "@/public/EcomApp.png";
import ImageP from "@/public/image.png";


export const displaypic = [
  {imageUrl: ImageP}
] as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Hyderabad, India",
    description:
      "I graduated with Bachelors Degree in Computer Science from Osmania University",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Project Engineer",
    location: "Hyderabad, India",
    description:
      "I worked as Java and C++ developer in Wipro.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Dallas, TX",
    description:
      "I worked as Software Engineer at Cognizant for client Verizon. I'm open to full-time opportunities.",
    icon: React.createElement(FaJava),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "AWS Power of  N",
    description:
      "I worked as a cloud engineer in this project. It gives power of any integer",
    tags: ["Amplify", "Lambda", " API Gateway", "DynamoDB",  "Identity & Access Management(IAM)"],
    imageUrl: AWS_power,
  },
  {
    title: "E-Commerce Application",
    description:
      "It is a complete E-Commerce Website with different features",
    tags: ["SpringBoot", "Kafka", "Jenkins" , "AWS EC2 Docker", "DevOps Toolchain","MySQL"],
    imageUrl: EcomApp,
  },
  {
    title: "Social Distancing for COVID-19 using Deep Learning",
    description:
      "Deep learning platform for social distancing using surveillance camera",
    tags: ["Image Dectection", "YOLOv3" ,"Bounding Boxes"],
    imageUrl: SocialDistance,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;