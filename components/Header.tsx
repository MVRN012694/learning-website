import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between">
        <Link href="/" className="text-xl font-bold">
          Daily Tech Insights
        </Link>

        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
