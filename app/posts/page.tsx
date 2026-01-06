import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Daily Tech Insights</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="flex gap-6 border rounded-lg p-4 hover:shadow-lg transition"
          >
            {post.data.image && (
              <Image
                src={post.data.image}
                alt={post.data.title}
                width={180}
                height={120}
                className="rounded object-cover"
              />
            )}

            <div>
              <h2 className="text-xl font-semibold">
                {post.data.title}
              </h2>

              <p className="text-gray-600 mt-1">
                {post.data.description}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                {new Date(post.data.date).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}










