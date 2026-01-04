import Link from "next/link";
import Container from "@/components/Container";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = getAllPosts();

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-8">My Daily Learning</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block border-b pb-4 hover:bg-gray-50 rounded-md"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
}







