import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Daily Tech Insights
        </Link>

        {/* Menu */}
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </div>
      </nav>
    </header>
  );
}

