import { BiLogoNodejs, BiLogoReact, BiLogoTypescript, BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoPostgresql, BiLogoDocker } from "react-icons/bi";
import { SiNextdotjs, SiStyledcomponents, SiJest } from "react-icons/si";

import { ProjectCard } from "./ProjectCard";
import { GrMysql } from "react-icons/gr";

export function ProjectsList() {
  const skills = {
    "css": { name: "CSS", icon: <BiLogoCss3 size={20} /> },
    "docker": { name: "Docker", icon: <BiLogoDocker size={20} /> },
    "javascript": { name: "JavaScript", icon: <BiLogoJavascript size={20} /> },
    "jest": { name: "Jest", icon: <SiJest size={20} /> },
    "mysql": { name: "MySQL", icon: <GrMysql size={20} /> },
    "next": { name: "Next.js", icon: <SiNextdotjs size={20} /> },
    "node": { name: "Node.js", icon: <BiLogoNodejs size={20} /> },
    "postgresql": { name: "PostgreSQL", icon: <BiLogoPostgresql size={20} /> },
    "react": { name: "React.js", icon: <BiLogoReact size={20} /> },
    "styled-components": { name: "Styled Components", icon: <SiStyledcomponents size={20} /> },
    "tailwind": { name: "Tailwind CSS", icon: <BiLogoTailwindCss size={20} /> },
    "typescript": { name: "TypeScript", icon: <BiLogoTypescript size={20} /> },
  }
  return (
    <div className="flex flex-wrap items-center m-auto">
      <ProjectCard
        title="Ranking System - Team Grube"
        image={"/projects/grube-mockup.png"}
        description="It organizes athletes' performance based on victories, defeats, and competition scores."
        skills={[skills.next, skills.node, skills.react, skills.postgresql, skills.css]}
        link="https://grube-app.vercel.app/"
      />
    </div>
  );
}