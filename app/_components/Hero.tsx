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
          Hi there! I&apos;m Ramo, a passionate Frontend Developer from{" "}
          <a>Bosnia and Herzegovina</a>. I love creating beautiful and efficient
          web applications and bringing creative ideas to life. When I&apos;m
          not coding, I&apos;m either playing games or spending time with
          friends and family. I&apos;m always excited to take on new projects
          and collaborate with others to make amazing things happen.
        </p>
      </div>
    </section>
  );
}
