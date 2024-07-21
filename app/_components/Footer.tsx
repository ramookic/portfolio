import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-100 py-28">
      <div className="container mx-auto pb-12 flex flex-col gap-4">
        <p className="text-zinc-500">Let&apos;s get in touch</p>
        <h2 className="text-6xl">okicramo9@gmail.com</h2>
      </div>
      <div className="border-t-2 border-zinc-300 container mx-auto pt-12 flex items-center justify-between">
        <p className="text-zinc-500">Copyright © {currentYear} Ramo Okić</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/ramookic/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-800 hover:text-orange-600 transition-all ease duration-300"
          >
            <BiLogoLinkedin size={32} />
          </a>
          <a
            href="https://github.com/ramookic"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-800 hover:text-orange-600 transition-all ease duration-300"
          >
            <BiLogoGithub size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
