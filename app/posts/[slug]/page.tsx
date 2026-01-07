import { getPostBySlug } from "@/lib/posts";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params; // ✅ IMPORTANT
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="text-center mt-20">Post not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <article>
        <h1 className="text-4xl font-bold mb-2">
          {post.data.title}
        </h1>

        <p className="text-gray-500 mb-6">
          {post.data.date}
        </p>

        <div
  className="prose prose-lg"
  dangerouslySetInnerHTML={{
    __html: post.contentHtml,
  }}
/>

      </article>
    </main>
  );
}
































