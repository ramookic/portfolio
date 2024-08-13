import { BiUpArrowAlt } from "react-icons/bi";

const projects = [
  {
    id: 0,
    name: "Ripple",
    description: "Link in Bio Tool",
    link: "https://github.com/ramookic/ripple",
    stack: "React.js, Styled Components, Supabase",
  },
  {
    id: 1,
    name: "Squezie",
    description: "Bulk Image Compressor",
    link: "https://github.com/ramookic/squezie",
    stack: "Next.js, Browser Image Compression",
  },
  {
    id: 2,
    name: "Expenso",
    description: "Expense Tracker",
    link: "https://github.com/ramookic/expenso",
    stack: "Next.js, TypeScript, TailwindCSS, Shadcn, Supabase, Jest",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col gap-8">
      <div>
        <p className="text-zinc-500">Some of my</p>
        <h2 className="text-5xl">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            className="bg-zinc-100 flex justify-between items-center p-8 rounded-3xl"
            key={project.id}
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl">{project.name}</h3>
              <p className="text-zinc-900 text-lg">{project.description}</p>
              <p className="text-zinc-500">{project.stack}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white transition-all ease duration-300 p-4 rounded-full rotate-45 hover:bg-orange-500 hover:text-white"
            >
              <BiUpArrowAlt size={28} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
