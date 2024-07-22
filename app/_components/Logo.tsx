export default function Logo() {
  return (
    <div className="h-16 flex gap-1">
      <div className="h-full w-4 bg-zinc-200 rounded-full"></div>
      <div className="flex flex-col gap-1">
        <div className="h-6 w-6 rounded-full bg-zinc-700"></div>
        <div className="h-10 w-4 bg-orange-500 rounded-full -rotate-45 ml-2"></div>
      </div>
    </div>
  );
}
