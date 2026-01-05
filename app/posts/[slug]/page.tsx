import { getPostBySlug } from "@/lib/posts";
import Container from "@/components/Container";

interface Props {
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function PostPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) return <div>Post not found</div>;

  const post = await getPostBySlug(slug);
  if (!post || !post.data) return <div>Post not found</div>;

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-2">{post.data.title ?? "Untitled Post"}</h1>
      {post.data.date && (
        <p className="text-gray-500 text-sm mb-4">
          {new Date(post.data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      )}
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post?.data?.title ?? "Article",
    description: post?.data?.description ?? "Daily Tech Insights article",
  };
}

















