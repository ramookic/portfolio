import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-8">
      <div className="flex items-center gap-4">
        <h4 className="text-4xl font-medium text-zinc-900">Ramo Okić</h4>
        <p className="bg-zinc-100 w-fit px-4 py-2 rounded-full font-medium text-zinc-500">
          Frontend Developer
        </p>
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
