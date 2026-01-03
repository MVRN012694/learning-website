import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default async function Home() {
  // Fetch posts from lib/posts
  const posts = getAllPosts();

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-10">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">My Daily Learning</h1>
        <p className="text-gray-600 mt-3 text-lg">
          I share what I learn every day — simple explanations, real examples.
        </p>
      </header>

      {/* Articles */}
      <section className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block border rounded-lg p-5 hover:bg-gray-50 transition"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.preview}...</p>
          </Link>
        ))}
      </section>
    </main>
  );
}





