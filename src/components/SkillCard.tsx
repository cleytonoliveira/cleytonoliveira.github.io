import { GrMysql } from "react-icons/gr";
import { BiLogoNodejs, BiLogoReact, BiLogoTypescript, BiLogoJavascript, BiLogoMongodb, BiLogoJava, BiLogoPython, BiLogoDocker, BiLogoHtml5, BiLogoCss3, BiLogoGit, BiLogoAws } from "react-icons/bi";

export function SkillCard(): JSX.Element {
  const skills = [
    {
      name: 'Node.js',
      icon: <BiLogoNodejs size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'React.js',
      icon: <BiLogoReact size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'MySQL',
      icon: <GrMysql size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'JavaScript',
      icon: <BiLogoJavascript size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'TypeScript',
      icon: <BiLogoTypescript size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'MongoDB',
      icon: <BiLogoMongodb size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'Python',
      icon: <BiLogoPython size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'Java',
      icon: <BiLogoJava size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'Docker',
      icon: <BiLogoDocker size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'HTML5',
      icon: <BiLogoHtml5 size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'CSS3',
      icon: <BiLogoCss3 size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'Git',
      icon: <BiLogoGit size={70} className="text-gray-30 m-auto" />
    },
    {
      name: 'Cloud',
      icon: <BiLogoAws size={70} className="text-gray-30 m-auto" />
    }
  ]

  return (
    <div className="my-5 flex flex-wrap gap-1.5 px-2.5 tablet:m-auto">
      {skills.map(({ name, icon }) => (
        <div key={name} className="w-28 h-28 py-1 bg-nero rounded-3xl m-auto hover:bg-white">
          {icon}
          <p className="text-gray-30 text-2xl text-center font-karla font-medium leading-7 tracking-tight">{name}</p>
        </div>
      ))}
    </div>
  )
}