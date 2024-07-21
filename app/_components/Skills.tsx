import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import Chip from "./Chip";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const skills = [
  {
    id: 0,
    name: "Javascript",
    icon: <BiLogoJavascript />,
  },
  {
    id: 1,
    name: "TypeScript",
    icon: <BiLogoTypescript />,
  },
  {
    id: 2,
    name: "React.js",
    icon: <BiLogoReact />,
  },
  {
    id: 3,
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    id: 4,
    name: "NextJS",
    icon: <RiNextjsFill />,
  },
  {
    id: 5,
    name: "TailwindCSS",
    icon: <RiTailwindCssFill />,
  },
  {
    id: 6,
    name: "Git",
    icon: <FaGitAlt />,
  },
];

export default function Skills() {
  return (
    <section className="border-t border-t-zinc-200 flex flex-col gap-8 pt-28">
      <Chip>Skills</Chip>
      <div className="flex gap-12 flex-wrap">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col gap-4 items-center justify-center mx-auto"
          >
            <div className="px-14 md:px-18 py-14 bg-zinc-100 text-6xl rounded-3xl text-zinc-700 ">
              {skill.icon}
            </div>
            <p className="text-zinc-800 font-medium text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
