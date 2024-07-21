export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-zinc-100 h-fit w-fit px-4 py-2 rounded-full font-medium text-zinc-500">
      {children}
    </span>
  );
}
