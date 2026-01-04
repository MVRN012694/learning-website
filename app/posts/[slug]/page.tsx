import Container from "@/components/Container";
import { getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-2">
        {post.title}
      </h1>

      <p className="text-gray-500 mb-8">
        {post.date}
      </p>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </Container>
  );
}




