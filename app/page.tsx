import Experience from "./_components/Experience";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Page() {
  return (
    <div className="flex flex-col gap-28 py-28">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
