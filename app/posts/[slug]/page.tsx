import Container from "@/components/Container";
import { getPostBySlug } from "@/lib/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  // ✅ REQUIRED in Next.js 16
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  return (
    <Container>
      <article className="prose prose-lg mt-10">
        <h1>{post.title}</h1>
        <p className="text-gray-500">{post.date}</p>

        <div
  className="prose prose-lg max-w-none"
  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
/>

      </article>
    </Container>
  );
}



