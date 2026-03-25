import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Page not found</h2>
      <Link
        href="/"
        className="rounded-full bg-foreground px-5 py-2 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Go home
      </Link>
    </div>
  );
}
