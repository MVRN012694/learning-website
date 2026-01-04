import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default async function HomePage() {
  const posts = getAllPosts();

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-10">
        My Daily Learning
      </h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </Container>
  );
}








