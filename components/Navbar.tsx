import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold">
          {siteConfig.name}
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
