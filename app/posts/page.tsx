import Container from "@/components/Container";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.data?.title ?? "Untitled Post"}
            date={post.data?.date ?? ""}
          />
        ))}
      </div>
    </Container>
  );
}







