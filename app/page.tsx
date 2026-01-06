import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Daily Tech Insights
        </h1>
        <p className="text-gray-600 text-lg">
          Learn Cloud, DevOps, and modern IT technologies with
          practical, interview-focused explanations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">
          Latest Posts
        </h2>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <h3 className="text-xl font-semibold hover:underline">
                  {post.data.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500">
                {new Date(post.data.date).toLocaleDateString()}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}


















