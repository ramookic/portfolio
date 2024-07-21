import Chip from "./Chip";

export default function Hero() {
  return (
    <section className="flex flex-col gap-28">
      <h1 className="text-7xl text-zinc-900 font-medium border-b border-b-zinc-200 pb-28">
        I&apos;m Ramo Okić, Frontend Developer.
      </h1>
      <div className="flex gap-4">
        <Chip>About</Chip>
        <p className="text-2xl text-zinc-900 leading-8">
          Hi there! I&apos;m an experienced Frontend Developer with a strong
          background in JavaScript, TypeScript, React, and Next.js. I have a
          passion for creating efficient and user-friendly web applications. My
          journey in web development has equipped me with skills in Redux,
          TanStack Query, Styled Components, Tailwind, Supabase, React Router,
          and NextAuth. Additionally, I have some knowledge of Node.js, MongoDB,
          and Express.js, which allows me to understand and collaborate
          effectively on full-stack projects.
        </p>
      </div>
    </section>
  );
}
