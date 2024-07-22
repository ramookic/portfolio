import Link from "next/link";

export default function Page() {
  return (
    <div className="h-[60vh] flex items-center justify-center flex-col gap-12">
      <h2 className="text-7xl text-zinc-900">Page Not Found</h2>
      <Link
        href="/"
        className="bg-orange-600 px-6 py-3 rounded-full text-white font-medium hover:bg-orange-500 transition-all ease duration-300"
      >
        Back to Portfolio
      </Link>
    </div>
  );
}
