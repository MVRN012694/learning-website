import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="text-3xl font-bold mb-10">All Posts</h1>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:underline">
                {post.data.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(post.data.date).toLocaleDateString()}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}













