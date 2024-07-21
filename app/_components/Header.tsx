import Link from "next/link";
import Chip from "./Chip";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-12">
      <div className="flex items-center gap-4">
        <h4 className="text-4xl font-medium text-zinc-900">Ramo Okić</h4>
        <Chip>Frontend Developer</Chip>
      </div>
      <Link
        href="#contact"
        className="bg-orange-600 px-6 py-3 rounded-full text-white font-medium hover:bg-orange-500 transition-all ease duration-300"
      >
        Contact
      </Link>
    </header>
  );
}
