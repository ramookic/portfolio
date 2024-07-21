import Chip from "./Chip";

const experience = [
  {
    id: 0,
    company: "Freelance",
    position: "Web Developer",
    duration: "Oct 2023 - Present",
  },
];

export default function Experience() {
  return (
    <section className="border-t border-t-zinc-200 flex flex-col gap-2 pt-28">
      <Chip>Experience</Chip>
      <div>
        {experience.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-b border-b-zinc-200 py-10"
          >
            <h4 className="text-4xl">{item.company}</h4>
            <div>
              <p className="text-xl">{item.position}</p>
              <p className="text-zinc-500">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
