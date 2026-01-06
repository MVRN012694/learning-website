import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Daily Tech Insights</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            {post.data.image && (
              <img
                src={post.data.image}
                alt={post.data.title}
                className="w-full h-56 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {post.data.title}
              </h2>

              {post.data.date && (
                <p className="text-gray-500 text-sm mb-3">
                  {new Date(post.data.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}

              <p className="text-gray-700">
                {post.data.description || "Read more →"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}











